// Service Page Specific JavaScript

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start) + (element.dataset.suffix || '');
        
        if (start >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        }
    }, 16);
}

// Initialize counter animations when they come into view
const initCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = parseInt(entry.target.textContent);
                entry.target.dataset.suffix = entry.target.textContent.replace(target.toString(), '');
                entry.target.textContent = '0' + entry.target.dataset.suffix;
                animateCounter(entry.target, target);
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
};

// Enhanced scroll animations for service pages
const initServiceAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add stagger effect for grid items
                if (entry.target.classList.contains('service-detail-card') || 
                    entry.target.classList.contains('tech-item') ||
                    entry.target.classList.contains('use-case-card') ||
                    entry.target.classList.contains('why-card')) {
                    
                    const siblings = entry.target.parentElement.children;
                    const index = Array.from(siblings).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.animate-on-scroll, .service-detail-card, .tech-item, .use-case-card, .why-card, .process-step').forEach(el => {
        observer.observe(el);
    });
};

// Tech diagram interactive effects
const initTechDiagram = () => {
    const techLayers = document.querySelectorAll('.tech-layer');
    
    techLayers.forEach((layer, index) => {
        layer.addEventListener('mouseenter', () => {
            // Highlight connected layers
            techLayers.forEach((otherLayer, otherIndex) => {
                if (Math.abs(index - otherIndex) <= 1) {
                    otherLayer.style.transform = 'translateX(5px)';
                    otherLayer.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }
            });
        });
        
        layer.addEventListener('mouseleave', () => {
            techLayers.forEach(otherLayer => {
                otherLayer.style.transform = '';
                otherLayer.style.boxShadow = '';
            });
        });
    });
};

// Process timeline animations
const initProcessTimeline = () => {
    const processSteps = document.querySelectorAll('.process-step');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });
    
    processSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = 'all 0.6s ease';
        timelineObserver.observe(step);
    });
};

// Use case cards hover effects
const initUseCaseCards = () => {
    const useCaseCards = document.querySelectorAll('.use-case-card');
    
    useCaseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const benefits = card.querySelectorAll('.benefit');
            benefits.forEach((benefit, index) => {
                setTimeout(() => {
                    benefit.style.transform = 'scale(1.05)';
                    benefit.style.backgroundColor = '#00e7e7';
                    benefit.style.color = 'white';
                }, index * 100);
            });
        });
        
        card.addEventListener('mouseleave', () => {
            const benefits = card.querySelectorAll('.benefit');
            benefits.forEach(benefit => {
                benefit.style.transform = 'scale(1)';
                benefit.style.backgroundColor = '#e0f7fa';
                benefit.style.color = '#006064';
            });
        });
    });
};

// Floating particles for service hero
const createFloatingParticles = () => {
    const hero = document.querySelector('.service-hero');
    if (!hero) return;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'tech-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        hero.querySelector('.service-hero-bg').appendChild(particle);
    }
};

// Smooth scroll for CTA buttons
const initSmoothScroll = () => {
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
};

// Back to top button
const createBackToTop = () => {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #121272, #00e7e7);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'scale(1.1)';
        backToTop.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'scale(1)';
        backToTop.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    });
};

// Reading progress indicator
const createReadingProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #00e7e7, #540ebb);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = Math.min(scrollProgress, 100) + '%';
    });
};

// Service page analytics tracking
const trackServicePageInteractions = () => {
    // Track CTA button clicks
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', () => {
            console.log('Service CTA clicked:', button.textContent, window.location.pathname);
            // Here you would send to your analytics service
        });
    });
    
    // Track section views
    const sections = document.querySelectorAll('section[class*="section"]');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionName = entry.target.querySelector('h2')?.textContent || 'Unknown Section';
                console.log('Section viewed:', sectionName, window.location.pathname);
                // Here you would send to your analytics service
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => sectionObserver.observe(section));
};

// Lazy loading for images
const initLazyLoading = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

// Initialize all service page functionality
document.addEventListener('DOMContentLoaded', () => {
    initCounters();
    initServiceAnimations();
    initTechDiagram();
    initProcessTimeline();
    initUseCaseCards();
    createFloatingParticles();
    initSmoothScroll();
    createBackToTop();
    createReadingProgress();
    trackServicePageInteractions();
    initLazyLoading();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Export functions for potential external use
window.ServicePageUtils = {
    animateCounter,
    initCounters,
    initServiceAnimations,
    initTechDiagram,
    initProcessTimeline,
    initUseCaseCards,
    createFloatingParticles
};