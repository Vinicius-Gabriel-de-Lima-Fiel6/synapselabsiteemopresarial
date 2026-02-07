document.addEventListener('DOMContentLoaded', () => {
    
    // --- MENU MOBILE ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animação simples do ícone sanduíche
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active-bar'));
        });
    }

    // Fechar menu ao clicar em um link (UX)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- ANIMAÇÃO SCROLL REVEAL (INTERSECTION OBSERVER) ---
    // Detecta quando elementos com classe .fade-in entram na tela
    const observerOptions = {
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para de observar após animar
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // --- SMOOTH SCROLL PARA ANCORAS (Compatibilidade extra) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Ajuste para o header fixo
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
