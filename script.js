document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-in-out-cubic',
        });
    }

    // Initialize Swiper (Hero Carousel)
    if (typeof Swiper !== 'undefined') {
        const heroSwiper = new Swiper('.heroSwiper', {
            effect: 'fade',
            fadeEffect: { crossFade: true },
            autoplay: {
                delay: 4500, // Automático y temporizado rigurosamente cada 4.5seg
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true,
            speed: 1000
        });
    }

    // Navbar Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
