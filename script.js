document.addEventListener("DOMContentLoaded", () => {
    // Menú hamburguesa
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navList.classList.toggle("active");
    });

    // Inicialización de Swiper
    const lapizSwiper = new Swiper(".lapiz-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: { nextEl: ".lapiz-next", prevEl: ".lapiz-prev" },
        pagination: { el: ".lapiz-pagination", clickable: true },
        loop: true
    });

    const acrilicoSwiper = new Swiper(".acrilico-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: { nextEl: ".acrilico-next", prevEl: ".acrilico-prev" },
        pagination: { el: ".acrilico-pagination", clickable: true },
        loop: true
    });

    // Modal para imágenes
    const galleryImages = document.querySelectorAll(".swiper-slide img");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            modal.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            modal.classList.add("active");
        });
    });

    modal.addEventListener("click", () => modal.classList.remove("active"));
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") modal.classList.remove("active");
    });

    // Botones de "Encargar este estilo"
    const orderButtons = document.querySelectorAll(".category .cta-button");
    const whatsappNumber = "573219038353"; // Tu número de WhatsApp

    orderButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Determinar si es el carrusel de lápiz o acrílico
            const category = button.closest(".category");
            const isLapiz = category.querySelector(".lapiz-swiper");
            const swiper = isLapiz ? lapizSwiper : acrilicoSwiper;

            // Obtener la diapositiva activa
            const activeSlide = category.querySelector(".swiper-slide-active .art-content");
            const imgSrc = activeSlide.querySelector("img").src;
            const description = activeSlide.querySelector("p").textContent;
            const style = isLapiz ? "Retrato a lápiz" : "Cuadro en acrílico";

            // Construir el mensaje
            const message = `Hola, quiero encargar un ${style}. Características: ${description}. Imagen de referencia: ${imgSrc}`;
            const encodedMessage = encodeURIComponent(message);

            // Abrir WhatsApp con el mensaje prellenado
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
        });
    });

    // Validación del formulario
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", e => {
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            e.preventDefault();
            alert("Por favor, completa todos los campos.");
        }
    });
});