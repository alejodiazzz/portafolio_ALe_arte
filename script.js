document.addEventListener("DOMContentLoaded", () => {
    // Menú hamburguesa
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navList.classList.toggle("active");
    });

    // Inicialización de Swiper para Retratos a Lápiz
    const lapizSwiper = new Swiper(".lapiz-swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        loop: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".lapiz-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".lapiz-next",
            prevEl: ".lapiz-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    // Inicialización de Swiper para Cuadros en Acrílico
    const acrilicoSwiper = new Swiper(".acrilico-swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        loop: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".acrilico-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".acrilico-next",
            prevEl: ".acrilico-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
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

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") modal.classList.remove("active");
    });

    // Botones de "Encargar este estilo"
    const orderButtons = document.querySelectorAll(".category .cta-button");
    const whatsappNumber = "573219038353";

    orderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.closest(".category");
            const isLapiz = category.querySelector(".lapiz-swiper");
            const swiper = isLapiz ? lapizSwiper : acrilicoSwiper;

            const activeSlide = category.querySelector(".swiper-slide-active .art-content");
            const imgSrc = activeSlide.querySelector("img").src;
            const description = activeSlide.querySelector("p").textContent;
            const style = isLapiz ? "Retrato a lápiz" : "Cuadro en acrílico";

            const message = `Hola, quiero encargar un ${style}. Características: ${description}. Imagen de referencia: ${imgSrc}`;
            const encodedMessage = encodeURIComponent(message);

            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
        });
    });

    // Validación del formulario
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", e => {
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nombre || !email || !mensaje) {
            e.preventDefault();
            alert("Por favor, completa todos los campos.");
        } else if (!emailRegex.test(email)) {
            e.preventDefault();
            alert("Por favor, ingresa un correo válido.");
        }
    });

    // Año dinámico en el footer
    document.querySelector("footer p:first-child").textContent = `© ${new Date().getFullYear()} Retratos Personalizados. Todos los derechos reservados.`;

    // Botón "Volver arriba"
    const scrollTopBtn = document.querySelector(".scroll-top");
    window.addEventListener("scroll", () => {
        scrollTopBtn.classList.toggle("visible", window.scrollY > 200);
    });
    scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});