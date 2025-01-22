const plans = [
    { price: "$49 / m", title: "Professional", info: "For large businesses.", features: ["20 team members", "Plan team meetings", "File sharing"] },
    { price: "$29 / m", title: "Starter", info: "For small teams.", features: ["5 team members", "Basic file sharing", "No meetings"] },
    { price: "$99 / m", title: "Enterprise", info: "For enterprises with high demands.", features: ["Unlimited team members", "Advanced meetings", "Cloud storage"] }
];

const servicios = [
    { title: "Consultoría", description: "Asesoramiento personalizado para tus proyectos." },
    { title: "Desarrollo a medida", description: "Creamos soluciones adaptadas a tus necesidades." },
    { title: "Soporte técnico", description: "Resolución de problemas y mantenimiento continuo." }
];

function createCard(item, options = {}) {
    const { type = "default" } = options;

    if (type === "plan") {
        return `
            <div class="col-md-4">
                <div class="card text-center shadow-sm mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <h6 class="card-subtitle mb-3 text-muted">${item.price}</h6>
                        <p class="card-text">${item.info}</p>
                        <ul class="list-unstyled">
                            ${item.features.map(feature => `<li>✔️ ${feature}</li>`).join("")}
                        </ul>
                        <a href="#" class="btn btn-primary mt-3">Choose Plan</a>
                    </div>
                </div>
            </div>
        `;
    } else if (type === "service") {
        return `
            <div class="col-md-4">
                <div class="card text-center shadow-sm mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <a href="#" class="btn btn-secondary mt-3">Learn More</a>
                    </div>
                </div>
            </div>
        `;
    }
    return "";
}

function renderCards(items, container, options = {}) {
    const { type = "default" } = options;
    const cardsHTML = items.map(item => createCard(item, { type })).join("");
    container.innerHTML = cardsHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    // Verifica qué contenedores existen y renderiza en base al HTML actual
    const planesContainer = document.getElementById("planes"); // Para services.html
    const servicesContainer = document.getElementById("services"); // Para services.html
    const detailedPlansContainer = document.getElementById("detailed-plans"); // Para planes.html

    if (planesContainer) {
        renderCards(plans, planesContainer, { type: "plan" });
    }

    if (servicesContainer) {
        renderCards(servicios, servicesContainer, { type: "service" });
    }

    if (detailedPlansContainer) {
        renderCards(plans, detailedPlansContainer, { type: "plan" });
    }
});
