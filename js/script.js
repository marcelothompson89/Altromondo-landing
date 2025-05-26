// Language Switcher Functionality
const translations = {
    es: {
        'nav-home': 'Inicio',
        'nav-about': 'Nosotros',
        'nav-services': 'Servicios',
        'nav-cases': 'Casos',
        'nav-contact': 'Contacto',
        'hero-title': 'Soluciones SAP para un mundo en constante transformación',
        'hero-subtitle': 'Impulsamos la eficiencia, innovación y escalabilidad con tecnología SAP BTP, Fiori y desarrollos a medida.',
        'hero-cta': 'Hablemos de tu proyecto',
        'about-title': 'Quiénes Somos',
        'about-heading': 'Expertos apasionados por transformar negocios',
        'services-title': 'Nuestros Servicios',
        'services-subtitle': 'Soluciones integrales que potencian tu negocio',
        'cases-title': 'Casos de Éxito',
        'cases-subtitle': 'Proyectos que transforman realidades empresariales',
        'clients-title': 'Clientes que nos eligen',
        'why-title': 'Por qué Altromondo',
        'contact-title': 'Hablemos de tu proyecto',
        'contact-subtitle': 'Te ayudamos a construir soluciones que funcionan, hoy y mañana.',
        'footer-tagline': 'Transformando negocios con tecnología SAP'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-cases': 'Cases',
        'nav-contact': 'Contact',
        'hero-title': 'SAP Solutions for a constantly transforming world',
        'hero-subtitle': 'We drive efficiency, innovation and scalability with SAP BTP, Fiori technology and custom developments.',
        'hero-cta': "Let's talk about your project",
        'about-title': 'About Us',
        'about-heading': 'Experts passionate about transforming businesses',
        'services-title': 'Our Services',
        'services-subtitle': 'Comprehensive solutions that empower your business',
        'cases-title': 'Success Stories',
        'cases-subtitle': 'Projects that transform business realities',
        'clients-title': 'Clients who choose us',
        'why-title': 'Why Altromondo',
        'contact-title': "Let's talk about your project",
        'contact-subtitle': 'We help you build solutions that work, today and tomorrow.',
        'footer-tagline': 'Transforming businesses with SAP technology'
    }
};

function switchLanguage(lang) {
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="switchLanguage('${lang}')"]`).classList.add('active');

    // Update text content
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Store preference
    localStorage.setItem('preferred-language', lang);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    }
);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const nombre = formData.get('nombre');
    const empresa = formData.get('empresa');
    const email = formData.get('email');
    const mensaje = formData.get('mensaje');
    
    // Simple validation
    if (nombre && empresa && email && mensaje) {
        // Show success message
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo en las próximas 24 horas.');
        
        // Reset form
        this.reset();
    } else {
        alert('Por favor, completa todos los campos del formulario.');
    }
});

// Add floating animation to hero elements
document.querySelectorAll('.floating-element').forEach((element, index) => {
    element.style.animationDelay = `${index * 2}s`;
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Función opcional para pausar/reanudar animación
const initClientsCarousel = () => {
    const carousel = document.querySelector('.clients-carousel');
    const container = document.querySelector('.clients-carousel-container');
    
    if (carousel && container) {
        // Pausar animación al hacer hover en cualquier logo
        const logos = container.querySelectorAll('.client-logo');
        
        logos.forEach(logo => {
            logo.addEventListener('mouseenter', () => {
                carousel.style.animationPlayState = 'paused';
            });
            
            logo.addEventListener('mouseleave', () => {
                carousel.style.animationPlayState = 'running';
            });
        });
        
        // También pausar al hacer hover en el contenedor
        container.addEventListener('mouseenter', () => {
            carousel.style.animationPlayState = 'paused';
        });
        
        container.addEventListener('mouseleave', () => {
            carousel.style.animationPlayState = 'running';
        });
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initClientsCarousel);

// Add hover effects to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click analytics (placeholder for real analytics)
document.querySelectorAll('.cta-button, .submit-btn').forEach(button => {
    button.addEventListener('click', function() {
        console.log('CTA clicked:', this.textContent);
        // Here you would send analytics data to your preferred service
    });
});

// Loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Mobile menu toggle (for future implementation)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-container');
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '☰';
    menuButton.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #121272;
        cursor: pointer;
    `;
    
    // Show menu button on mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQuery = (e) => {
        if (e.matches) {
            menuButton.style.display = 'block';
            nav.appendChild(menuButton);
        } else {
            menuButton.style.display = 'none';
        }
    };
    
    mediaQuery.addListener(handleMediaQuery);
    handleMediaQuery(mediaQuery);
};

// Initialize mobile menu
createMobileMenu();

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let index = 0;
    const typeWriter = () => {
        if (index < originalText.length) {
            heroTitle.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after page load
    setTimeout(typeWriter, 1000);
}

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00e7e7, #540ebb);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollProgress + '%';
    });
};

createScrollProgress();

// Add counter animation for statistics (if needed in future)
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
};

// Preload critical images
const preloadImages = () => {
    const imageUrls = [
        'images/logo-altromondo.png',
        'images/logo-altro-horizontal.png'
        // Add any other critical image URLs here
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

preloadImages();

// Initialize language on page load
window.addEventListener('load', function() {
    const savedLang = localStorage.getItem('preferred-language') || 'es';
    if (savedLang !== 'es') {
        switchLanguage(savedLang);
    }
});