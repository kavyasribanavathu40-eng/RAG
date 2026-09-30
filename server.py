import json
import os
import mimetypes
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlparse
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent
OLLAMA_BASE_URL = os.environ.get("OLLAMA_BASE_URL", "http://127.0.0.1:11434").rstrip("/")
OLLAMA_MODEL = os.environ.get("OLLAMA_MODEL", "llama3.2")


class TravelGuideHandler(BaseHTTPRequestHandler):
    def send_json(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def read_json(self):
        length = int(self.headers.get("Content-Length", "0"))
        if length > 64000:
            raise ValueError("Request is too large.")
        return json.loads(self.rfile.read(length) or b"{}")

    def do_GET(self):
        path = urlparse(self.path).path
        if path == "/api/health":
            self.check_ollama()
            return

        relative_path = "index.html" if path == "/" else path.lstrip("/")
        file_path = (ROOT / relative_path).resolve()
        if ROOT not in file_path.parents and file_path != ROOT:
            self.send_error(403)
            return
        if not file_path.is_file():
            self.send_error(404)
            return

        content = file_path.read_bytes()
        content_type = mimetypes.guess_type(file_path.name)[0] or "application/octet-stream"
        if content_type.startswith("text/") or content_type in {"application/javascript", "application/json"}:
            content_type += "; charset=utf-8"
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        self.wfile.write(content)

    def do_POST(self):
        if urlparse(self.path).path != "/api/chat":
            self.send_error(404)
            return
        try:
            payload = self.read_json()
            question = str(payload.get("question", "")).strip()
            if not question or len(question) > 2000:
                self.send_json(400, {"error": "Add a question under 2,000 characters."})
                return

            destination = payload.get("destination", {})
            guide_context = json.dumps(destination, ensure_ascii=False)[:12000]
            messages = [
                {
                    "role": "system",
                    "content": (
                        "You are Roamly, a warm, practical travel guide. Answer using the supplied destination guide "
                        "when relevant. Be specific about food, local customs, clothing, significant places, transit, "
                        "and budgets. Clearly say when prices or local details may have changed; never invent certainty. "
                        "Keep answers easy to scan and ask one useful follow-up when it helps.\n\n"
                        f"Current destination guide (JSON): {guide_context}"
                    ),
                }
            ]
            history = payload.get("history", [])
            for message in history[-8:]:
                role = message.get("role")
                content = str(message.get("content", ""))[:2000]
                if role in {"user", "assistant"} and content:
                    messages.append({"role": role, "content": content})
            messages.append({"role": "user", "content": question})

            request = Request(
                f"{OLLAMA_BASE_URL}/api/chat",
                data=json.dumps({"model": OLLAMA_MODEL, "messages": messages, "stream": False}).encode("utf-8"),
                headers={"Content-Type": "application/json"},
                method="POST",
            )
            with urlopen(request, timeout=90) as response:
                result = json.loads(response.read())
            self.send_json(200, {"reply": result["message"]["content"], "model": OLLAMA_MODEL})
        except (HTTPError, URLError, TimeoutError, KeyError, json.JSONDecodeError) as error:
            detail = getattr(error, "reason", str(error))
            self.send_json(503, {"error": f"Could not reach Ollama at {OLLAMA_BASE_URL}. {detail}"})
        except (ValueError, TypeError) as error:
            self.send_json(400, {"error": str(error) or "Invalid request."})

    def check_ollama(self):
        try:
            with urlopen(f"{OLLAMA_BASE_URL}/api/tags", timeout=3) as response:
                models = json.loads(response.read()).get("models", [])
            installed = any(model.get("name", "").split(":")[0] == OLLAMA_MODEL.split(":")[0] for model in models)
            self.send_json(200, {"connected": True, "model": OLLAMA_MODEL, "modelInstalled": installed})
        except (HTTPError, URLError, TimeoutError, json.JSONDecodeError):
            self.send_json(200, {"connected": False, "model": OLLAMA_MODEL, "modelInstalled": False})

    def log_message(self, format_string, *args):
        print(f"[{self.log_date_time_string()}] {format_string % args}")


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", int(os.environ.get("PORT", "8000"))), TravelGuideHandler)
    print(f"Roamly is ready at http://127.0.0.1:{server.server_port}")
    print(f"Ollama endpoint: {OLLAMA_BASE_URL} | model: {OLLAMA_MODEL}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down Roamly.")
        server.server_close()
