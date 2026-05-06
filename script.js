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

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navbarItem = document.getElementById('navbar');
    
    if (mobileToggle && navbarItem) {
        mobileToggle.addEventListener('click', () => {
            navbarItem.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navbarItem.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
        
        navbarItem.querySelectorAll('.nav-link, .btn').forEach(link => {
            link.addEventListener('click', () => {
                navbarItem.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if(icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

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

    // EmailJS Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = 'Enviando petición...';
            btn.disabled = true;

            const sendClientEmail = emailjs.sendForm('service_d5u5t3c', 'template_ossqao5', this);
            const sendAdminEmail = emailjs.sendForm('service_d5u5t3c', 'template_gb5ajxl', this);

            Promise.all([sendClientEmail, sendAdminEmail])
                .then(function() {
                    btn.innerText = '¡Solicitud Recibida con Éxito!';
                    btn.style.backgroundColor = '#4CAF50';
                    btn.style.border = '1px solid #4CAF50';
                    btn.style.color = 'white';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.style.backgroundColor = '';
                        btn.style.border = '';
                        btn.style.color = '';
                        btn.disabled = false;
                    }, 5000);
                })
                .catch(function(error) {
                    btn.innerText = 'Falló el envío. Intente por WhatsApp.';
                    console.error('FAILED...', error);
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.disabled = false;
                    }, 4000);
                });
        });
    }

});
