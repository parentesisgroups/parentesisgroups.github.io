
const plans = [
    {
        price: "$49 / m",
        title: "Professional",
        info: "For large businesses.",
        features: ["20 team members", "Plan team meetings", "File sharing"]
    },
    {
        price: "$29 / m",
        title: "Starter",
        info: "For small teams.",
        features: ["5 team members", "Basic file sharing", "No meetings"]
    },
    {   
        price: "$99 / m",
        title: "Enterprise",
        info: "For enterprises with high demands.",
        features: ["Unlimited team members", "Advanced meetings", "Cloud storage","algo mas"]
    }
];

/**
 * Renderiza todas las tarjetas.
 */
function renderPlans(plans, container) {
    const cardsHTML = plans.map(plan => createCard(plan)).join("");
    container.innerHTML = cardsHTML;
}

/**
 * Crea el HTML de una tarjeta individual.
 */
function createCard(plan) {
    return `
        <div class="col-md-4">
            <div class="card text-center shadow-sm mb-4">
                <div class="card-body">
                    <h5 class="card-title">${plan.title}</h5>
                    <h6 class="card-subtitle mb-3 text-muted">${plan.price}</h6>
                    <p class="card-text">${plan.info}</p>
                    <ul class="list-unstyled">
                        ${plan.features.map(feature => `<li>✔️ ${feature}</li>`).join("")}
                    </ul>
                    <a href="#" class="btn btn-primary mt-3">Choose Plan</a>
                </div>
            </div>
        </div>
    `;
}

/**
 * Carga el contenido de un HTML externo y ejecuta una función de renderizado.
 */
function loadAndRenderPlans() {
    const planesContainer = document.getElementById("planes");
    if (!planesContainer) return;

    fetch("../../html/services/planes.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar planes.html");
            }
            return response.text();
        })
        .then(html => {
            planesContainer.innerHTML = html;
            const plansContainer = document.getElementById("plans-container");
            if (plansContainer) {
                renderPlans(plans, plansContainer);
            }
        })
        .catch(error => console.error("Error al cargar el contenido:", error));
}

// Llamada principal
document.addEventListener("DOMContentLoaded", loadAndRenderPlans);
