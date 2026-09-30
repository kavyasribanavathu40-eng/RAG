# roamly

A local-first travel discovery site with four curated city guides, an interactive OpenStreetMap, and a destination-aware chat assistant powered by Ollama.

## Run it

Python 3.10+ is all you need for the web server:

```powershell
py server.py
```

Then open http://127.0.0.1:8000.

## Connect your local Llama model

Install [Ollama](https://ollama.com/), start it, and install a model, for example:

```powershell
ollama pull llama3.2
```

Roamly defaults to Ollama at `http://127.0.0.1:11434` using the `llama3.2` model. Configure a different local endpoint or installed model before starting the server:

```powershell
$env:OLLAMA_BASE_URL = "http://127.0.0.1:11434"
$env:OLLAMA_MODEL = "llama3.2"
py server.py
```

The chat requests go from the browser to the local Python server, then to Ollama. They are not sent to a hosted AI service. The guide, Google Fonts, photos, and OpenStreetMap tiles are loaded from the internet.

## What's here

- `server.py` serves the site and proxies chat requests to Ollama.
- `index.html`, `styles.css`, and `app.js` make up the browser app.
- `/api/health` reports whether the Ollama server and configured model are available.
