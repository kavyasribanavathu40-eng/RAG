const destinations = [
  {
    id: "kyoto", name: "Kyoto", country: "Japan", flag: "JP", region: "East Asia", season: "Mar–May · Oct–Nov", dailyBudget: "$75–140", currency: "JPY · ¥", language: "Japanese", timeZone: "Asia/Tokyo", image: "photo-1493976040374-85c8e12f0c0e", imagePosition: "center 56%", tagline: "A thousand years, one quiet lane at a time.", intro: "Step past the lantern-lit lanes and Kyoto lets you in. A city of hidden gardens, tiny noodle counters, and the kind of stillness you carry home.", lat: 35.0116, lng: 135.7681,
    highlights: [{ title: "Fushimi Inari", detail: "Ten thousand vermilion gates; go before 8 am.", kind: "landmark", emoji: "⛩", coords: [34.9671, 135.7727] }, { title: "Kiyomizu-dera", detail: "A wooden hillside temple with an unforgettable view.", kind: "landmark", emoji: "◈", coords: [34.9949, 135.785] }, { title: "Nishiki Market", detail: "Five bustling blocks of pickles, tofu, and tea.", kind: "food", emoji: "◉", coords: [35.005, 135.7647] }, { title: "Philosopher's Path", detail: "A gentle canal walk under cherry trees.", kind: "nature", emoji: "↗", coords: [35.0254, 135.7948] }, { title: "Pontocho Alley", detail: "A lantern-lit dinner detour along the river.", kind: "food", emoji: "◉", coords: [35.0039, 135.7708] }],
    foods: ["Yudofu (silky tofu hot pot)", "Matcha sweets & wagashi", "Kaiseki seasonal tasting"], culture: "Remove your shoes at temple halls and many traditional stays. Quiet voices on trains are appreciated; cash still comes in handy at smaller counters.", clothes: "Spring/autumn layers; summer is humid and rainy. Pack shoes you can slip off easily and bring an umbrella in June.", transit: "Tap an IC card on buses and trains. Buses reach temples; the subway and Hankyu lines are quicker across town.", tips: ["Start temple visits early; by 10 am the quiet lanes belong to tour groups.", "Carry a little cash for market bites and neighborhood shops.", "Stand on the right side of Kyoto escalators."]
  },
  {
    id: "lisbon", name: "Lisbon", country: "Portugal", flag: "PT", region: "Western Europe", season: "Apr–Jun · Sep–Oct", dailyBudget: "$85–155", currency: "EUR · €", language: "Portuguese", timeZone: "Europe/Lisbon", image: "photo-1555881400-74d7acaacd8b", imagePosition: "center 58%", tagline: "Follow the tiled streets until the sea appears.", intro: "Lisbon is best taken slowly: up a hill, down a tiled lane, around one more corner for a pastel de nata. Then the light turns golden and suddenly it's evening.", lat: 38.7223, lng: -9.1393,
    highlights: [{ title: "Castelo de São Jorge", detail: "A hilltop castle with rooftops to the river.", kind: "landmark", emoji: "◈", coords: [38.7139, -9.1335] }, { title: "Belém Tower", detail: "A 16th-century riverside fortress at golden hour.", kind: "landmark", emoji: "◈", coords: [38.6916, -9.216] }, { title: "Time Out Market", detail: "A lively food hall for a first-night dinner.", kind: "food", emoji: "◉", coords: [38.7077, -9.1458] }, { title: "Miradouro da Graça", detail: "A no-ticket sunset view over red rooftops.", kind: "nature", emoji: "↗", coords: [38.7162, -9.1305] }, { title: "Pastéis de Belém", detail: "The original custard tarts, warm from the oven.", kind: "food", emoji: "◉", coords: [38.6975, -9.2031] }],
    foods: ["Pastel de nata (still-warm custard tart)", "Bifana pork sandwich", "Grilled sardines in summer"], culture: "A friendly 'bom dia' goes a long way. Dinner starts later than in many countries, and a small couvert on the table may be charged if you eat it.", clothes: "Comfortable shoes with serious grip for slippery cobblestones. Layers for sea breezes; a light jacket even on warm evenings.", transit: "Viva Viagem card works on metro, trams, buses, and ferries. Tram 28 is scenic but crowded; try it early or take the 12 instead.", tips: ["Bring shoes with grip; limestone sidewalks get slick after rain.", "Eat lunch at a tasca, then save room for something sweet.", "Keep bags zipped on busy trams and at crowded viewpoints."]
  },
  {
    id: "mexico-city", name: "Mexico City", country: "Mexico", flag: "MX", region: "North America", season: "Mar–May · Oct–Nov", dailyBudget: "$55–115", currency: "MXN · $", language: "Spanish", timeZone: "America/Mexico_City", image: "photo-1518105779142-d975f22f1b0a", imagePosition: "center 56%", tagline: "One city, a thousand different rhythms.", intro: "Big-hearted and full of contrast, CDMX rewards curiosity: leafy neighborhood walks, ancient history hiding in plain sight, and tacos worth crossing town for.", lat: 19.4326, lng: -99.1332,
    highlights: [{ title: "Palacio de Bellas Artes", detail: "Art Nouveau outside, murals by Rivera inside.", kind: "landmark", emoji: "◈", coords: [19.4352, -99.1412] }, { title: "Museo Frida Kahlo", detail: "Casa Azul; book timed tickets in advance.", kind: "landmark", emoji: "◈", coords: [19.355, -99.1628] }, { title: "Mercado de Coyoacán", detail: "Tostadas, juice, and a very good market wander.", kind: "food", emoji: "◉", coords: [19.3501, -99.1627] }, { title: "Chapultepec Park", detail: "Green breathing room and a world-class castle.", kind: "nature", emoji: "↗", coords: [19.4205, -99.1819] }, { title: "El Moro", detail: "Churros and thick hot chocolate since 1935.", kind: "food", emoji: "◉", coords: [19.435, -99.1372] }],
    foods: ["Al pastor tacos from a busy stand", "Tlacoyos with nopales", "Churros y chocolate at El Moro"], culture: "A warm greeting is welcome. Ask before photographing people. Restaurant tips of 10–15% are common; market stalls may be cash only.", clothes: "Light layers for warm afternoons and cool evenings at altitude. Comfortable walking shoes; summer brings afternoon showers.", transit: "The Metro is extensive and affordable. Use app-based rides late at night; tap a transit card for Metro, Metrobús, and cable cars.", tips: ["Take a day or two to adjust to the altitude; the city sits high.", "Choose busy food stalls with a quick turnover.", "Keep an eye on belongings on packed metro cars."]
  },
  {
    id: "marrakech", name: "Marrakech", country: "Morocco", flag: "MA", region: "North Africa", season: "Mar–May · Sep–Nov", dailyBudget: "$45–100", currency: "MAD · د.م.", language: "Arabic · French", timeZone: "Africa/Casablanca", image: "photo-1539020140153-e479b8c22e70", imagePosition: "center 57%", tagline: "Get happily lost in the ochre medina.", intro: "Past the medina's turning lanes, Marrakech opens into garden courtyards, mint tea rituals, and a night market that slowly becomes the whole town's living room.", lat: 31.6295, lng: -7.9811,
    highlights: [{ title: "Bahia Palace", detail: "Carved cedar, calm courtyards, and tiled ceilings.", kind: "landmark", emoji: "◈", coords: [31.6218, -7.9816] }, { title: "Jemaa el-Fnaa", detail: "A lively square that transforms after sunset.", kind: "landmark", emoji: "◈", coords: [31.6258, -7.9891] }, { title: "Le Jardin Secret", detail: "A peaceful Islamic garden tucked in the medina.", kind: "nature", emoji: "↗", coords: [31.6317, -7.9895] }, { title: "Café des Épices", detail: "Terrace tea and a front-row seat on Rahba Kedima.", kind: "food", emoji: "◉", coords: [31.6298, -7.9882] }, { title: "Majorelle Garden", detail: "A painter's cobalt-blue garden; reserve ahead.", kind: "nature", emoji: "↗", coords: [31.6417, -8.0036] }],
    foods: ["Slow-cooked lamb tagine", "Harira soup at dusk", "Chebakia with sweet mint tea"], culture: "Greet shopkeepers before browsing and ask before photographing people. Haggling is part of souk shopping; a friendly, unhurried pace keeps it pleasant.", clothes: "Breathable, modest layers work well in the medina and in places of worship. Spring and autumn evenings can cool off quickly.", transit: "The medina is best explored on foot. Agree on a petit taxi price or ask for the meter before setting off; use licensed guides for day trips.", tips: ["Save an offline map; medina lanes are deliberately winding.", "Ask the price before accepting help or taking a taxi.", "Carry small dirham notes for stalls and short rides."]
  }
];

const state = { selected: destinations[0], map: null, markers: [], history: [], saved: new Set(JSON.parse(localStorage.getItem("roamly-saved") || "[]")), filter: "all", toastTimer: null };
const $ = (selector) => document.querySelector(selector);
const imageUrl = (id, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function renderDestinations(query = "") {
  const list = $("#destination-list");
  const matches = destinations.filter((place) => `${place.name} ${place.country}`.toLowerCase().includes(query.toLowerCase()));
  list.innerHTML = matches.length ? matches.map((place) => `
    <button class="destination-card ${state.selected.id === place.id ? "selected" : ""}" data-destination="${place.id}" role="option" aria-selected="${state.selected.id === place.id}">
      <span class="destination-photo" style="--card-image:url('${imageUrl(place.image, 500)}');background-position:${place.imagePosition}"><span class="photo-region">${place.region}</span><span class="card-flag">${place.flag}</span></span>
      <span class="destination-card-copy"><strong>${place.name}</strong><span>${place.country}</span></span><span class="card-arrow">↗</span>
    </button>`).join("") : `<p class="empty-search">No city in the field notes yet. Try Kyoto or Lisbon.</p>`;
  list.querySelectorAll("[data-destination]").forEach((button) => button.addEventListener("click", () => selectDestination(button.dataset.destination)));
}

function renderGuide() {
  const place = state.selected;
  $("#destination-hero").innerHTML = `
    <div class="hero-image" style="--hero-image:url('${imageUrl(place.image, 1500)}');background-position:${place.imagePosition}"></div>
    <div class="hero-shade"></div><div class="hero-copy"><span class="hero-region">${place.flag} &nbsp; ${place.country.toUpperCase()} <span>·</span> ${place.region.toUpperCase()}</span>
    <h2>${place.name}<span class="hero-period">.</span></h2><p>${place.tagline}</p><div class="hero-meta"><span>◷ &nbsp; BEST: ${place.season}</span><span class="hero-divider"></span><span>◎ &nbsp; ${place.dailyBudget} / DAY</span></div></div><span class="hero-index">CITY NOTES &nbsp; / &nbsp; 0${destinations.indexOf(place) + 1}</span>`;
  $("#chat-city").textContent = `${place.name}, ${place.country}`;
  $("#fact-grid").innerHTML = `
    <article class="fact-card budget-card"><span class="fact-icon">↗</span><span class="fact-label">DAILY SPEND</span><strong>${place.dailyBudget}<small> / person</small></strong><p>Stays, food & getting around</p><div class="budget-track"><span></span><span></span><span></span><span></span><span></span></div><small class="track-labels"><span>THRIFTY</span><span>COMFY</span></small></article>
    <article class="fact-card"><span class="fact-icon">◎</span><span class="fact-label">TUCK IN</span><strong class="fact-value">The must-eats</strong><ul>${place.foods.map((food) => `<li>${food}</li>`).join("")}</ul></article>
    <article class="fact-card"><span class="fact-icon">✳</span><span class="fact-label">LOCAL ETIQUETTE</span><strong class="fact-value">A little respect goes far</strong><p>${place.culture}</p></article>
    <article class="fact-card"><span class="fact-icon">⌁</span><span class="fact-label">WHAT TO PACK</span><strong class="fact-value">Dress for the day</strong><p>${place.clothes}</p></article>
    <article class="fact-card transit-card"><span class="fact-icon">↗</span><span class="fact-label">GETTING AROUND</span><strong class="fact-value">Move like a local</strong><p>${place.transit}</p><span class="transit-currency">${place.currency} <i>·</i> ${place.language}</span></article>`;
  $("#local-tips").innerHTML = place.tips.map((tip, index) => `<article class="tip"><span class="tip-number">0${index + 1}</span><p>${tip}</p></article>`).join("");
  const isSaved = state.saved.has(place.id);
  $("#save-place").classList.toggle("is-saved", isSaved);
  $("#save-place").innerHTML = `<span>${isSaved ? "♥" : "♡"}</span>`;
  $("#save-place").setAttribute("aria-label", isSaved ? "Remove saved destination" : "Save destination");
  $("#map-filters").querySelectorAll("[data-filter]").forEach((button) => button.classList.toggle("active", button.dataset.filter === state.filter));
  renderMapPlaces();
  if (state.map) {
    state.map.setView([place.lat, place.lng], 13);
    renderMarkers();
  }
}

function selectDestination(id) {
  const next = destinations.find((place) => place.id === id);
  if (!next) return;
  state.selected = next;
  state.filter = "all";
  state.history = [];
  $("#chat-messages").innerHTML = "";
  renderDestinations($("#destination-search").value);
  renderGuide();
  updateChatStatus();
  if (state.map) setTimeout(() => state.map.invalidateSize(), 100);
  window.scrollTo({ top: document.querySelector(".guide-layout").offsetTop - 78, behavior: "smooth" });
}

function iconFor(place) {
  return L.divIcon({ className: "map-pin-wrap", html: `<span class="map-pin ${place.kind}"><span>${place.emoji}</span></span>`, iconSize: [34, 42], iconAnchor: [17, 38], popupAnchor: [0, -34] });
}

function renderMarkers() {
  if (!state.map) return;
  state.markers.forEach((marker) => marker.remove());
  state.markers = state.selected.highlights.filter((spot) => state.filter === "all" || spot.kind === state.filter).map((spot) => {
    const marker = L.marker(spot.coords, { icon: iconFor(spot), title: spot.title });
    marker.bindPopup(`<div class="popup-card"><span class="popup-type">${spot.kind === "food" ? "SOMETHING DELICIOUS" : spot.kind === "nature" ? "A BREATH OF FRESH AIR" : "WORTH THE DETOUR"}</span><strong>${spot.title}</strong><p>${spot.detail}</p></div>`, { closeButton: false, maxWidth: 220 });
    marker.addTo(state.map);
    return marker;
  });
}

function renderMapPlaces() {
  const places = state.selected.highlights.filter((spot) => state.filter === "all" || spot.kind === state.filter);
  $("#pin-count").textContent = `${String(places.length).padStart(2, "0")} PLACES`;
  $("#place-list").innerHTML = places.map((spot, index) => `<button class="place-row" data-place-index="${state.selected.highlights.indexOf(spot)}"><span class="place-emoji ${spot.kind}">${spot.emoji}</span><span class="place-copy"><strong>${spot.title}</strong><span>${spot.detail}</span></span><span class="place-number">0${index + 1}</span></button>`).join("");
  $("#place-list").querySelectorAll("[data-place-index]").forEach((button) => button.addEventListener("click", () => {
    const spot = state.selected.highlights[Number(button.dataset.placeIndex)];
    state.map.flyTo(spot.coords, 16, { duration: 0.75 });
    const marker = state.markers.find((item) => item.options.title === spot.title);
    if (marker) setTimeout(() => marker.openPopup(), 400);
  }));
}

function initializeMap() {
  if (!window.L) {
    $("#map").innerHTML = `<div class="map-unavailable">Map tiles need an internet connection.<br/>Your city guide still works offline.</div>`;
    return;
  }
  state.map = L.map("map", { zoomControl: false, scrollWheelZoom: false }).setView([state.selected.lat, state.selected.lng], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap contributors" }).addTo(state.map);
  L.control.zoom({ position: "bottomright" }).addTo(state.map);
  renderMarkers();
}

function timeTick() {
  try {
    $("#local-time").textContent = new Intl.DateTimeFormat("en", { timeZone: state.selected.timeZone, hour: "2-digit", minute: "2-digit", hour12: true }).format(new Date()).toUpperCase() + " · LOCAL";
  } catch { $("#local-time").textContent = "LOCAL TIME"; }
}

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("visible");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => element.classList.remove("visible"), 2600);
}

async function updateChatStatus() {
  const dot = $("#chat-status-dot");
  const label = $("#chat-status");
  try {
    const response = await fetch("/api/health");
    const result = await response.json();
    if (result.connected && result.modelInstalled) {
      dot.className = "status-ready";
      label.textContent = `${result.model} · ready`;
    } else if (result.connected) {
      dot.className = "status-offline";
      label.textContent = `${result.model} · model not found`;
    } else {
      dot.className = "status-offline";
      label.textContent = "Ollama not running";
    }
  } catch {
    dot.className = "status-offline";
    label.textContent = "Chat service unavailable";
  }
}

function addMessage(role, content, isError = false) {
  const bubble = document.createElement("article");
  bubble.className = `message ${role === "user" ? "user-message" : "assistant-message"}${isError ? " error-message" : ""}`;
  const label = document.createElement("span");
  label.className = "message-label";
  label.textContent = role === "user" ? "YOU" : "ROAMLY GUIDE";
  const text = document.createElement("p");
  text.textContent = content;
  bubble.append(label, text);
  $("#chat-messages").append(bubble);
  $("#chat-messages").scrollTop = $("#chat-messages").scrollHeight;
  return bubble;
}

async function askGuide(question) {
  const trimmed = question.trim();
  if (!trimmed) return;
  $("#suggestions").hidden = true;
  addMessage("user", trimmed);
  $("#chat-input").value = "";
  $("#chat-send").disabled = true;
  const thinking = addMessage("assistant", "Let me think that through…");
  try {
    const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question: trimmed, destination: state.selected, history: state.history }) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "The guide is unavailable right now.");
    thinking.querySelector("p").textContent = result.reply;
    state.history.push({ role: "user", content: trimmed }, { role: "assistant", content: result.reply });
  } catch (error) {
    thinking.classList.add("error-message");
    thinking.querySelector("p").textContent = `${error.message} Check that Ollama is running and that the selected model is installed.`;
  } finally {
    $("#chat-send").disabled = false;
    $("#chat-input").focus();
    $("#chat-messages").scrollTop = $("#chat-messages").scrollHeight;
  }
}

function openChat() {
  $("#chat-panel").classList.add("chat-open");
  $("#chat-panel").setAttribute("aria-hidden", "false");
  $("#chat-launcher").classList.add("launcher-hidden");
  if (!$("#chat-messages").children.length) {
    addMessage("assistant", `Hey! I'm your ${state.selected.name} guide. Ask me about a perfect day out, what things cost, local food, or anything else you're curious about.`);
  }
  setTimeout(() => $("#chat-input").focus(), 200);
}

$("#destination-search").addEventListener("input", (event) => renderDestinations(event.target.value));
document.addEventListener("keydown", (event) => { if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) { event.preventDefault(); $("#destination-search").focus(); } });
$("#map-filters").addEventListener("click", (event) => { const button = event.target.closest("[data-filter]"); if (!button) return; state.filter = button.dataset.filter; renderGuide(); });
$("#map-reset").addEventListener("click", () => { state.map.flyTo([state.selected.lat, state.selected.lng], 13, { duration: 0.65 }); });
$("#save-place").addEventListener("click", () => {
  const { id, name } = state.selected;
  state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id);
  localStorage.setItem("roamly-saved", JSON.stringify([...state.saved]));
  renderGuide();
  toast(state.saved.has(id) ? `${name} saved to your field notes` : `${name} removed from your field notes`);
});
$("#chat-launcher").addEventListener("click", openChat);
$("#chat-close").addEventListener("click", () => { $("#chat-panel").classList.remove("chat-open"); $("#chat-panel").setAttribute("aria-hidden", "true"); $("#chat-launcher").classList.remove("launcher-hidden"); });
$("#chat-form").addEventListener("submit", (event) => { event.preventDefault(); askGuide($("#chat-input").value); });
$("#chat-input").addEventListener("keydown", (event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); $("#chat-form").requestSubmit(); } });
$("#suggestions").addEventListener("click", (event) => { const button = event.target.closest("button"); if (button) askGuide(button.textContent); });

const now = new Date();
$("#today-label").textContent = new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric" }).format(now).toUpperCase();
renderDestinations();
renderGuide();
initializeMap();
timeTick();
setInterval(timeTick, 60000);
updateChatStatus();
