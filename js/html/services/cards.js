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

document.addEventListener("DOMContentLoaded", () => {
    // Contenedor donde se insertará planes.html
    const planesContainer = document.getElementById("planes");
    const serviceContainer = document.getElementById("nuestro_servicio");


    if (planesContainer) {
        // Cargar el contenido de planes.html dinámicamente
        fetch("../../html/services/planes.html")
            .then(response => {
                if (!response.ok) throw new Error("No se pudo cargar planes.html");
                return response.text();
            })
            .then(html => {
                planesContainer.innerHTML = html;

                // Renderizar las tarjetas en el contenedor de planes.html
                const detailedPlansContainer = document.getElementById("detailed-plans");
                if (detailedPlansContainer) {
                    renderCards(plans, detailedPlansContainer, "plan");
                } else {
                    console.error("No se encontró el contenedor #detailed-plans en planes.html");
                }
            })
            .catch(error => console.error(error));
    };
    if (serviceContainer){
        console.log("aqui")
        fetch("../../html/services/nuestro_servicio.html")
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar planes.html");
            return response.text();
        })
        .then(html => { 
            serviceContainer.innerHTML = html;

            // Renderizar las tarjetas en el contenedor de planes.html
            const detailedServiceContainer = document.getElementById("detailed-service");
            if (detailedServiceContainer) {
                renderCards(servicios, detailedServiceContainer, "service");
            } else {
                console.error("No se encontró el contenedor #detailed-plans en planes.html");
            }
        })
        .catch(error => console.error(error));
    } else{
        console.log("no pasa nah")
    }
});

// Función para renderizar las tarjetas
function renderCards(data, container, type) {
    const cardsHTML = data.map(item => createCard(item, type)).join("");
    container.innerHTML = cardsHTML;
}

// Función para crear tarjetas
function createCard(item, type) {
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
    }else if(type === "service") {
        return `
            <div class="col-md-4 d-flex justify-content-center">

            <div class="cardService-container mb-3">
                <div class="cardService ">
                    <div class="img-content">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-miterlimit="2" stroke-linejoin="round" fill-rule="evenodd" clip-rule="evenodd"><path fill-rule="nonzero" d="m2 19v-14c0-.552.447-1 1-1 .542 0 4.418 2.028 9 2.028 4.593 0 8.456-2.028 9-2.028.55 0 1 .447 1 1v14c0 .553-.45 1-1 1-.544 0-4.407-2.028-9-2.028-4.582 0-8.458 2.028-9 2.028-.553 0-1-.448-1-1zm1.5-.791 6.449-7.691c.289-.344.879-.338 1.16.012 0 0 1.954 2.434 1.954 2.434l1.704-1.283c.319-.24.816-.168 1.054.154l4.679 6.335v-12.44c-1.58.58-4.819 1.798-8.5 1.798-3.672 0-6.918-1.218-8.5-1.799zm2.657-.834c1.623-.471 3.657-.903 5.843-.903 2.309 0 4.444.479 6.105.98l-3.041-4.117-1.065.802.275.344c.259.323.206.796-.117 1.054-.323.259-.795.207-1.054-.117l-2.591-3.236zm.698-9.534c-1.051 0-1.905.854-1.905 1.905s.854 1.904 1.905 1.904 1.904-.853 1.904-1.904-.853-1.905-1.904-1.905zm0 1.3c.333 0 .604.271.604.605 0 .333-.271.604-.604.604-.334 0-.605-.271-.605-.604 0-.334.271-.605.605-.605z"></path></svg>
                    </div>
                    <div class="content">
                        <p class="heading">${item.title}</p>
                        <p>${item.description}</p>
                    </div>
                </div>
            </div>
            </div>
        `;
    }
    return "";
}
