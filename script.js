document.addEventListener("DOMContentLoaded", () => {
    // Menú hamburguesa
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navList.classList.toggle("active");
    });

    // Inicialización de Swiper para cada carrusel
    const lapizSwiper = new Swiper(".lapiz-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".lapiz-next",
            prevEl: ".lapiz-prev",
        },
        pagination: {
            el: ".lapiz-pagination",
            clickable: true,
        },
        loop: true,
    });

    const acrilicoSwiper = new Swiper(".acrilico-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".acrilico-next",
            prevEl: ".acrilico-prev",
        },
        pagination: {
            el: ".acrilico-pagination",
            clickable: true,
        },
        loop: true,
    });

    // Funcionalidad para abrir imágenes en un modal
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

    modal.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.classList.remove("active");
        }
    });

    // Botones de "Encargar este estilo"
    const orderButtons = document.querySelectorAll(".cta-button");
    orderButtons.forEach(button => {
        button.addEventListener("click", () => {
            document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
        });
    });

    // Validación del formulario
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            e.preventDefault();
            alert("Por favor, completa todos los campos.");
        }
    });
});