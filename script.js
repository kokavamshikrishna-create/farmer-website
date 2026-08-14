// ---- Crop Prices ----
const cropPrices = [
  { crop: "Wheat", price: "₹2,150 per quintal" },
  { crop: "Rice", price: "₹1,940 per quintal" },
  { crop: "Cotton", price: "₹6,800 per quintal" }
];
renderList("prices", "Today's Crop Prices", cropPrices, item => `${item.crop}: ${item.price}`);

// ---- Seed Varieties ----
const seedVarieties = [
  { name: "HD-3086 Wheat", feature: "High yield, rust resistant" },
  { name: "Pusa Basmati 1121", feature: "Long grain, premium export quality" },
  { name: "Bt Cotton", feature: "Pest resistant, higher fiber output" }
];
renderList("seeds", "Seed Varieties", seedVarieties, item => `<strong>${item.name}</strong> - ${item.feature}`);

// ---- Disease Guide ----
const diseases = [
  { name: "Wheat Rust", symptom: "Orange-brown powdery spots on leaves", cure: "Spray Propiconazole fungicide" },
  { name: "Rice Blast", symptom: "Diamond-shaped lesions on leaves", cure: "Use Tricyclazole fungicide, avoid excess nitrogen" },
  { name: "Cotton Bollworm", symptom: "Holes in bolls, larvae inside", cure: "Use pheromone traps, neem-based spray" }
];
renderList("diseases", "Disease Identification", diseases, item => `<strong>${item.name}</strong> - ${item.symptom}. Cure: ${item.cure}`);

// ---- Crop Lifecycle ----
const lifecycle = [
  "Land Preparation",
  "Sowing",
  "Irrigation",
  "Fertilization",
  "Pest & Disease Control",
  "Harvesting",
  "Market Sale"
];
renderList("lifecycle", "Crop Lifecycle", lifecycle, stage => stage);

// ---- Shared helper function ----
function renderList(sectionId, heading, dataArray, formatFn) {
  const section = document.getElementById(sectionId);
  let html = `<h2>${heading}</h2>`;
  dataArray.forEach(item => {
    html += `<p>${formatFn(item)}</p>`;
  });
  section.innerHTML = html;
}