// Language Switcher Functionality
const translations = {
    es: {
        'nav-home': 'Inicio',
        'nav-about': 'Nosotros',
        'nav-services': 'Servicios',
        'nav-cases': 'Casos',
        'nav-contact': 'Contacto',
        'hero-title': 'Soluciones Tecnológicas para un mundo que cambia',
        'hero-subtitle': 'Impulsamos la eficiencia, innovación y escalabilidad con tecnología SAP BTP, Fiori y desarrollos a medida.',
        'hero-cta': 'Hablemos de tu proyecto',
        'about-title': 'Quiénes Somos',
        'about-heading': 'Expertos apasionados por transformar negocios',
        'about-text-1': 'Somos un equipo de especialistas con amplia experiencia en <span class="highlight">SAP BTP, Fiori, ECC y S/4 HANA</span>. Nos dedicamos a crear soluciones tecnológicas que impulsan la transformación digital de empresas líderes.',
        'about-text-2': 'Nuestra misión es simple: entregar <span class="highlight">cercanía, agilidad y resultados concretos</span> que generen un impacto real en el crecimiento de nuestros clientes.',
        'about-text-3': 'Cada proyecto es una oportunidad para demostrar nuestro compromiso con la excelencia técnica y la satisfacción del cliente.',
        'services-title': 'Nuestros Servicios',
        'services-subtitle': 'Soluciones integrales que potencian tu negocio',
        'service-1-title': 'Consultoría SAP',
        'service-1-description': 'Consultoría funcional y técnica especializada en módulos SAP, optimización de procesos y migración a S/4 HANA.',
        'service-1-link': 'Ver más detalles →',
        'service-2-title': 'SAP Business Technology Platform (BTP)',
        'service-2-description': 'Transformamos procesos empresariales mediante el desarrollo e integración de soluciones en SAP BTP.',
        'service-2-link': 'Ver más detalles →',
        'service-3-title': 'Apps Web & Mobile',
        'service-3-description': 'Desarrollo de aplicaciones web y móviles integradas con SAP, con UX/UI moderna y rendimiento optimizado.',
        'service-3-link': 'Ver más detalles →',
        'service-4-title': 'Automatización e IA',
        'service-4-description': 'Implementación de soluciones de automatización e inteligencia artificial sobre ecosistema SAP.',
        'service-4-link': 'Ver más detalles →',
        'service-5-title': 'Staffing Especializado',
        'service-5-description': 'Recursos humanos altamente capacitados en SAP para reforzar tu equipo en proyectos críticos.',
        'service-5-link': 'Ver más detalles →',
        'cases-title': 'Casos de Éxito',
        'cases-subtitle': 'Proyectos que transforman realidades empresariales',
        'case-1-title': 'Portal de Proveedores',
        'case-1-description': 'Plataforma integral sobre SAP BTP integrada con S/4 HANA para gestión automatizada de proveedores y procesos de compras.',
        'case-2-title': 'Gestión de Inventario',
        'case-2-description': 'Aplicación móvil conectada con SAP ECC para control de inventario en tiempo real y optimización de stock.',
        'case-3-title': 'Plataforma Comercial',
        'case-3-description': 'Sistema de gestión comercial con dashboards ejecutivos y automatización de procesos de ventas.',
        'case-4-title': 'Gestión de Campo',
        'case-4-description': 'Solución web y móvil para gestión de operaciones de campo con sincronización offline y reporting avanzado.',
        'clients-title': 'Clientes que nos eligen',
        'why-title': 'Por qué Altromondo',
        'why-1-title': 'Experiencia Real en SAP',
        'why-1-description': 'Más de 10 años desarrollando soluciones SAP para empresas líderes en Argentina y Latinoamérica.',
        'why-2-title': 'Entrega Ágil de MVPs',
        'why-2-description': 'Metodologías ágiles que garantizan entregas rápidas y iterativas para generar valor desde el día uno.',
        'why-3-title': 'Atención Personalizada',
        'why-3-description': 'Cada cliente es único. Adaptamos nuestras soluciones a sus necesidades específicas y objetivos de negocio.',
        'why-4-title': 'Equipo Técnico + Funcional',
        'why-4-description': 'Combinamos expertise técnico profundo con sólido conocimiento funcional de procesos de negocio.',
        'why-5-title': 'Compromiso con Resultados',
        'why-5-description': 'No solo entregamos software, sino soluciones que generan ROI mensurable y transformación real.',
        'why-6-title': 'Innovación Constante',
        'why-6-description': 'Siempre a la vanguardia de las últimas tecnologías SAP y tendencias del mercado enterprise.',
        'contact-title': 'Hablemos de tu proyecto',
        'contact-subtitle': 'Te ayudamos a construir soluciones que funcionan, hoy y mañana.',
        'contact-heading': '¡Empecemos juntos!',
        'contact-description': 'Cada gran proyecto comienza con una conversación. Contanos sobre tu desafío y diseñemos juntos la solución perfecta.',
        'contact-email': '<strong>📧 Email:</strong> info@altromondo.com.ar',
        'contact-phone': '<strong>📞 Teléfono:</strong> +54 11 1234-5678',
        'contact-location': '<strong>📍 Ubicación:</strong> Buenos Aires, Argentina',
        'form-name': 'Nombre completo',
        'form-company': 'Empresa',
        'form-email': 'Email',
        'form-message': 'Contanos sobre tu proyecto',
        'form-placeholder': 'Descripción del desafío, objetivos, timeline estimado...',
        'form-submit': 'Enviar mensaje',
        'clients-title': 'Clientes que nos eligen',
        'footer-tagline': 'Transformando negocios con tecnología SAP',
        'footer-copyright': '&copy; 2025 Altromondo. Todos los derechos reservados.',
        'dropdown-sap-consulting': 'Consultoría SAP',
        'dropdown-apps': 'Apps Web & Mobile',
        'dropdown-ai': 'Automatización e IA',
        'dropdown-staffing': 'Staffing Especializado',
        'sap-btp-hero-title': 'SAP Business Technology Platform (BTP)',
        'sap-btp-hero-subtitle': 'Transformamos tu negocio con la plataforma integral de SAP para desarrollo, integración e innovación en la nube',
        'sap-btp-stat-projects': 'Proyectos BTP',
        'sap-btp-stat-success': 'Éxito en entregas',
        'sap-btp-stat-cost': 'Reducción de costos',
        'sap-btp-what-title': '¿Qué es SAP BTP?',
        'sap-btp-what-text1': 'SAP Business Technology Platform es la plataforma integral de SAP que combina capacidades de base de datos, análisis, integración, extensión e inteligencia artificial en una solución unificada en la nube.',
        'sap-btp-what-text2': 'Con BTP, las empresas pueden conectar, integrar y extender sus aplicaciones SAP y de terceros, crear nuevas aplicaciones personalizadas y aprovechar tecnologías avanzadas como IA y machine learning.',
        'sap-btp-what-highlight-title': '🚀 Transformación Digital Acelerada',
        'sap-btp-what-highlight-text': 'BTP permite a las organizaciones modernizar sus procesos de negocio, mejorar la experiencia del usuario y acelerar la innovación con un time-to-market reducido.',
        'sap-btp-layer-apps': 'Aplicaciones y Extensiones',
        'sap-btp-layer-dev': 'Servicios de Desarrollo',
        'sap-btp-layer-data': 'Integración y Datos',
        'sap-btp-layer-foundation': 'SAP BTP Foundation',
        'sap-btp-services-title': 'Nuestros Servicios BTP',
        'sap-btp-services-subtitle': 'Soluciones completas desde la estrategia hasta la implementación',
        'sap-btp-service1-title': 'Arquitectura y Diseño',
        'sap-btp-service2-title': 'Desarrollo de Aplicaciones',
        'sap-btp-service3-title': 'Integración',
        'sap-btp-service4-title': 'Analytics y BI',
        'sap-btp-service5-title': 'AI y Machine Learning',
        'sap-btp-service6-title': 'Soporte y Mantenimiento',
        'sap-btp-tech-title': 'Tecnologías que Dominamos',
        'sap-btp-cases-title': 'Casos de Uso Típicos',
        'sap-btp-case1-title': 'Portal de Proveedores',
        'sap-btp-case1-challenge': 'Desafío: Automatizar el proceso de registro y gestión de proveedores',
        'sap-btp-case1-solution': 'Solución: Portal web integrado con S/4 HANA para autogestión de proveedores',
        'sap-btp-case2-title': 'Dashboard Ejecutivo',
        'sap-btp-case2-challenge': 'Desafío: Visibilidad en tiempo real de KPIs críticos del negocio',
        'sap-btp-case2-solution': 'Solución: Dashboard ejecutivo con datos en vivo desde múltiples fuentes',
        'sap-btp-case3-title': 'App Móvil de Campo',
        'sap-btp-case3-challenge': 'Desafío: Gestión de operaciones de campo sin conectividad constante',
        'sap-btp-case3-solution': 'Solución: App móvil con capacidades offline y sincronización automática',
        'sap-btp-case4-title': 'Automatización Inteligente',
        'sap-btp-case4-challenge': 'Desafío: Procesar grandes volúmenes de documentos manualmente',
        'sap-btp-case4-solution': 'Solución: Sistema de OCR y AI para procesamiento automático',
        'sap-btp-process-title': 'Nuestro Proceso de Trabajo',
        'sap-btp-step1-title': 'Análisis y Diseño',
        'sap-btp-step1-desc': 'Entendemos tus necesidades de negocio y diseñamos la arquitectura de solución óptima',
        'sap-btp-step1-duration': '1-2 semanas',
        'sap-btp-step2-title': 'Prototipo y Validación',
        'sap-btp-step2-desc': 'Desarrollamos un MVP funcional para validar el concepto con usuarios finales',
        'sap-btp-step2-duration': '2-3 semanas',
        'sap-btp-step3-title': 'Desarrollo Iterativo',
        'sap-btp-step3-desc': 'Implementamos la solución en sprints cortos con entregas continuas',
        'sap-btp-step3-duration': '4-8 semanas',
        'sap-btp-step4-title': 'Testing y Despliegue',
        'sap-btp-step4-desc': 'Pruebas exhaustivas y despliegue en producción con acompañamiento',
        'sap-btp-step4-duration': '1-2 semanas',
        'sap-btp-step5-title': 'Soporte y Evolución',
        'sap-btp-step5-desc': 'Monitoreo continuo, optimizaciones y nuevas funcionalidades',
        'sap-btp-step5-duration': 'Ongoing',
        'sap-btp-why-title': '¿Por qué elegir Altromondo para BTP?',
        'sap-btp-why1-title': 'Expertise Comprobada',
        'sap-btp-why1-text': 'Más de 30 proyectos BTP exitosos con empresas líderes en diversos sectores',
        'sap-btp-why2-title': 'Metodología Ágil',
        'sap-btp-why2-text': 'Entregas rápidas con valor inmediato mediante metodologías ágiles y DevOps',
        'sap-btp-why3-title': 'Equipo Multidisciplinario',
        'sap-btp-why3-text': 'Combinamos expertise técnico y funcional para soluciones integrales',
        'sap-btp-why4-title': 'Formación Continua',
        'sap-btp-why4-text': 'Nuestro equipo se mantiene al día con las últimas tecnologías SAP',
        'sap-btp-why5-title': 'Soporte Integral',
        'sap-btp-why5-text': 'Acompañamiento desde la conceptualización hasta el go-live y más allá',
        'sap-btp-why6-title': 'Innovación Constante',
        'sap-btp-why6-text': 'Incorporamos las últimas tendencias en IA, ML y tecnologías emergentes',
        'sap-btp-cta-title': '¿Listo para transformar tu negocio con SAP BTP?',
        'sap-btp-cta-text': 'Conversemos sobre tu proyecto y diseñemos juntos la solución perfecta',
        'sap-btp-cta-primary': 'Solicitar Consultoría',
        'sap-btp-cta-secondary': 'Contacto Directo',
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-services': 'Services',
        'nav-cases': 'Cases',
        'nav-contact': 'Contact',
        'hero-title': 'Tech Solutions for a Changing World',
        'hero-subtitle': 'Empowering efficiency, innovation, and scalable growth with SAP BTP, Fiori, and tailored developments.',
        'hero-cta': "Let's Talk About Your Project",
        'about-title': 'About Us',
        'about-heading': 'Experts Passionate About Business Transformation',
        'about-text-1': 'We are a team of specialists with extensive experience in <span class="highlight">SAP BTP, Fiori, ECC, and S/4 HANA</span>. We are dedicated to creating technological solutions that drive digital transformation for leading companies.',
        'about-text-2': 'Our mission is simple: deliver <span class="highlight">proximity, agility, and concrete results</span> that generate real impact on our clients\' growth.',
        'about-text-3': 'Every project is an opportunity to demonstrate our commitment to technical excellence and client satisfaction.',
        'services-title': 'Our Services',
        'services-subtitle': 'Comprehensive solutions that empower your business',
        'service-1-title': 'SAP Consulting',
        'service-1-description': 'Specialized functional and technical consulting in SAP modules, process optimization, and migration to S/4 HANA.',
        'service-1-link': 'View more details →',
        'service-2-title': 'SAP Business Technology Platform (BTP)',
        'service-2-description': 'We transform business processes through development and integration of solutions on SAP BTP.',
        'service-2-link': 'View more details →',
        'service-3-title': 'Web & Mobile Apps',
        'service-3-description': 'Development of web and mobile applications integrated with SAP, featuring modern UX/UI and optimized performance.',
        'service-3-link': 'View more details →',
        'service-4-title': 'Automation & AI',
        'service-4-description': 'Implementation of automation and artificial intelligence solutions on the SAP ecosystem.',
        'service-4-link': 'View more details →',
        'service-5-title': 'Specialized Staffing',
        'service-5-description': 'Highly trained SAP human resources to strengthen your team in critical projects.',
        'service-5-link': 'View more details →',
        'cases-title': 'Success Stories',
        'cases-subtitle': 'Projects that transform business realities',
        'case-1-title': 'Supplier Portal',
        'case-1-description': 'Comprehensive platform on SAP BTP integrated with S/4 HANA for automated supplier management and procurement processes.',
        'case-2-title': 'Inventory Management',
        'case-2-description': 'Mobile application connected to SAP ECC for real-time inventory control and stock optimization.',
        'case-3-title': 'Commercial Platform',
        'case-3-description': 'Commercial management system with executive dashboards and sales process automation.',
        'case-4-title': 'Field Management',
        'case-4-description': 'Web and mobile solution for field operations management with offline synchronization and advanced reporting.',
        'clients-title': 'Clients Who Choose Us',
        'why-title': 'Why Altromondo',
        'why-1-title': 'Real SAP Experience',
        'why-1-description': 'Over 10 years developing SAP solutions for leading companies in Argentina and Latin America.',
        'why-2-title': 'Agile MVP Delivery',
        'why-2-description': 'Agile methodologies that guarantee fast and iterative deliveries to generate value from day one.',
        'why-3-title': 'Personalized Attention',
        'why-3-description': 'Every client is unique. We adapt our solutions to their specific needs and business objectives.',
        'why-4-title': 'Technical + Functional Team',
        'why-4-description': 'We combine deep technical expertise with solid functional knowledge of business processes.',
        'why-5-title': 'Commitment to Results',
        'why-5-description': 'We don\'t just deliver software, but solutions that generate measurable ROI and real transformation.',
        'why-6-title': 'Constant Innovation',
        'why-6-description': 'Always at the forefront of the latest SAP technologies and enterprise market trends.',
        'contact-title': "Let's Talk About Your Project",
        'contact-subtitle': 'We help you build solutions that work, today and tomorrow.',
        'contact-heading': "Let's Get Started Together!",
        'contact-description': 'Every great project begins with a conversation. Tell us about your challenge and let\'s design the perfect solution together.',
        'contact-email': '<strong>📧 Email:</strong> info@altromondo.com.ar',
        'contact-phone': '<strong>📞 Phone:</strong> +54 11 1234-5678',
        'contact-location': '<strong>📍 Location:</strong> Buenos Aires, Argentina',
        'form-name': 'Full Name',
        'form-company': 'Company',
        'form-email': 'Email',
        'form-message': 'Tell us about your project',
        'form-placeholder': 'Challenge description, objectives, estimated timeline...',
        'form-submit': 'Send Message',
        'clients-title': 'Clients Who Choose Us',
        'footer-tagline': 'Transforming businesses with SAP technology',
        'footer-copyright': '&copy; 2025 Altromondo. All rights reserved.',
        'dropdown-sap-consulting': 'SAP Consulting',
        'dropdown-apps': 'Web & Mobile Apps',
        'dropdown-ai': 'Automation & AI',
        'dropdown-staffing': 'Specialized Staffing',
        'sap-btp-hero-title': 'SAP Business Technology Platform (BTP)',
        'sap-btp-hero-subtitle': 'We transform your business with SAP\'s comprehensive platform for development, integration and innovation in the cloud',
        'sap-btp-stat-projects': 'BTP Projects',
        'sap-btp-stat-success': 'Delivery Success',
        'sap-btp-stat-cost': 'Cost Reduction',
        'sap-btp-what-title': 'What is SAP BTP?',
        'sap-btp-what-text1': 'SAP Business Technology Platform is SAP\'s unified cloud solution combining database, analytics, integration, extension and AI capabilities.',
        'sap-btp-what-text2': 'With BTP, companies can connect and extend SAP and third-party apps, build custom solutions and leverage technologies like AI and machine learning.',
        'sap-btp-what-highlight-title': '🚀 Accelerated Digital Transformation',
        'sap-btp-what-highlight-text': 'BTP helps organizations modernize business processes, enhance user experience and accelerate innovation with reduced time-to-market.',
        'sap-btp-layer-apps': 'Applications and Extensions',
        'sap-btp-layer-dev': 'Development Services',
        'sap-btp-layer-data': 'Integration and Data',
        'sap-btp-layer-foundation': 'SAP BTP Foundation',
        'sap-btp-services-title': 'Our BTP Services',
        'sap-btp-services-subtitle': 'End-to-end solutions from strategy to implementation',
        'sap-btp-service1-title': 'Architecture & Design',
        'sap-btp-service2-title': 'Application Development',
        'sap-btp-service3-title': 'Integration',
        'sap-btp-service4-title': 'Analytics & BI',
        'sap-btp-service5-title': 'AI & Machine Learning',
        'sap-btp-service6-title': 'Support & Maintenance',
        'sap-btp-tech-title': 'Technologies We Master',
        'sap-btp-cases-title': 'Typical Use Cases',
        'sap-btp-case1-title': 'Supplier Portal',
        'sap-btp-case1-challenge': 'Challenge: Automate supplier registration and management',
        'sap-btp-case1-solution': 'Solution: Web portal integrated with S/4 HANA for supplier self-service',
        'sap-btp-case2-title': 'Executive Dashboard',
        'sap-btp-case2-challenge': 'Challenge: Real-time visibility of critical business KPIs',
        'sap-btp-case2-solution': 'Solution: Executive dashboard with live data from multiple sources',
        'sap-btp-case3-title': 'Field Mobile App',
        'sap-btp-case3-challenge': 'Challenge: Manage field operations without constant connectivity',
        'sap-btp-case3-solution': 'Solution: Mobile app with offline capabilities and auto sync',
        'sap-btp-case4-title': 'Intelligent Automation',
        'sap-btp-case4-challenge': 'Challenge: Process large volumes of documents manually',
        'sap-btp-case4-solution': 'Solution: OCR and AI system for automatic processing',
        'sap-btp-process-title': 'Our Work Process',
        'sap-btp-step1-title': 'Analysis & Design',
        'sap-btp-step1-desc': 'We understand your business needs and design the optimal architecture',
        'sap-btp-step1-duration': '1-2 weeks',
        'sap-btp-step2-title': 'Prototype & Validation',
        'sap-btp-step2-desc': 'We develop a functional MVP to validate the concept with end users',
        'sap-btp-step2-duration': '2-3 weeks',
        'sap-btp-step3-title': 'Iterative Development',
        'sap-btp-step3-desc': 'We implement the solution in short sprints with continuous deliveries',
        'sap-btp-step3-duration': '4-8 weeks',
        'sap-btp-step4-title': 'Testing & Deployment',
        'sap-btp-step4-desc': 'Thorough testing and production deployment with support',
        'sap-btp-step4-duration': '1-2 weeks',
        'sap-btp-step5-title': 'Support & Evolution',
        'sap-btp-step5-desc': 'Continuous monitoring, optimizations and new features',
        'sap-btp-step5-duration': 'Ongoing',
        'sap-btp-why-title': 'Why Choose Altromondo for BTP?',
        'sap-btp-why1-title': 'Proven Expertise',
        'sap-btp-why1-text': 'Over 30 successful BTP projects with leading companies',
        'sap-btp-why2-title': 'Agile Methodology',
        'sap-btp-why2-text': 'Rapid deliveries with immediate value using agile and DevOps',
        'sap-btp-why3-title': 'Multidisciplinary Team',
        'sap-btp-why3-text': 'We combine technical and functional expertise for holistic solutions',
        'sap-btp-why4-title': 'Continuous Training',
        'sap-btp-why4-text': 'Our team stays up to date with the latest SAP technologies',
        'sap-btp-why5-title': 'Comprehensive Support',
        'sap-btp-why5-text': 'Support from concept to go-live and beyond',
        'sap-btp-why6-title': 'Constant Innovation',
        'sap-btp-why6-text': 'We incorporate the latest trends in AI, ML and emerging tech',
        'sap-btp-cta-title': 'Ready to transform your business with SAP BTP?',
        'sap-btp-cta-text': 'Let\'s discuss your project and design the perfect solution together',
        'sap-btp-cta-primary': 'Request Consulting',
        'sap-btp-cta-secondary': 'Direct Contact',
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
            element.innerHTML = translations[lang][key];
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