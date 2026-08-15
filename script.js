const cropPrices = [
  { crop: "Wheat", price: "₹2,150 per quintal" },
  { crop: "Rice", price: "₹1,940 per quintal" },
  { crop: "Cotton", price: "₹6,800 per quintal" }
];

const seedVarieties = [
  { name: "HD-3086 Wheat", feature: "High yield, rust resistant" },
  { name: "Pusa Basmati 1121", feature: "Long grain, premium export quality" },
  { name: "Bt Cotton", feature: "Pest resistant, higher fiber output" }
];

const diseases = [
  { name: "Wheat Rust", symptom: "Orange-brown powdery spots on leaves", cure: "Spray Propiconazole fungicide" },
  { name: "Rice Blast", symptom: "Diamond-shaped lesions on leaves", cure: "Use Tricyclazole fungicide, avoid excess nitrogen" },
  { name: "Cotton Bollworm", symptom: "Holes in bolls, larvae inside", cure: "Use pheromone traps, neem-based spray" }
];

const lifecycle = [
  "Land Preparation",
  "Sowing",
  "Irrigation",
  "Fertilization",
  "Pest & Disease Control",
  "Harvesting",
  "Market Sale"
];

function renderList(containerId, dataArray, formatFn) {
  const container = document.getElementById(containerId);
  if (!container) return; // this page doesn't have that section - skip
  let html = "";
  dataArray.forEach((item, index) => {
    html += `<div class="data-card">${formatFn(item, index)}</div>`;
  });
  container.innerHTML = html;
}

renderList("prices-content", cropPrices, item => `<h3>${item.crop}</h3><p>${item.price}</p>`);
renderList("seeds-content", seedVarieties, item => `<h3>${item.name}</h3><p>${item.feature}</p>`);
renderList("diseases-content", diseases, item => `<h3>${item.name}</h3><p><strong>Symptom:</strong> ${item.symptom}</p><p><strong>Cure:</strong> ${item.cure}</p>`);
renderList("lifecycle-content", lifecycle, (stage, index) => `<h3>Step ${index + 1}: ${stage}</h3>`);