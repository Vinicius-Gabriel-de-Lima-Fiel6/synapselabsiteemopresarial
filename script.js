/**
 * SYNAPSELAB - Script de Interatividade
 * Desenvolvido para máxima performance sem bibliotecas externas.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MENU MOBILE TOGGLE
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            // Estilização rápida via JS para o menu flutuante mobile
            if(navLinks.style.display === 'flex') {
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.flexDirection = 'column';
                navLinks.style.background = '#050708';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid #00FF95';
            }
        });
    }

    // 2. LÓGICA DO MODAL (POP-UP CONTATO)
    const modal = document.getElementById('contactModal');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const closeModal = document.querySelector('.close-modal');

    // Abre o modal em qualquer botão de CTA
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Trava o scroll
        });
    });

    // Fecha ao clicar no X
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Fecha ao clicar fora do conteúdo
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // 3. ANIMAÇÃO DE REVELAÇÃO AO ROLAR (SCROLL REVEAL)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.fade-in');
    scrollElements.forEach(el => observer.observe(el));

    // 4. HEADER DINÂMICO (MUDA COR AO ROLAR)
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(2, 3, 4, 0.95)';
            header.style.padding = '10px 0';
        } else {
            header.style.background = 'rgba(5, 7, 8, 0.85)';
            header.style.padding = '15px 0';
        }
    });
});
