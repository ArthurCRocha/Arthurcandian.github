// Esperar o DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Variáveis
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');
    const loadingSpinner = document.getElementById('loading-spinner');
    
    // Menu hambúrguer
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Fechar o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Scroll suave para os links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Alterar o header ao rolar a página
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Destaque na navegação conforme a rolagem
    window.addEventListener('scroll', function() {
        let current = '';
        
        const sections = document.querySelectorAll('section');
        const navHeight = header.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Inicializar EmailJS
    // Substitua "YOUR_PUBLIC_KEY" pela sua chave pública do EmailJS
    emailjs.init("VeUrUgjEJjlBAjuMN");
    
    // Configurar o envio de email através do formulário de contato
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Mostrar spinner de carregamento
            submitBtn.querySelector('span').style.display = 'none';
            loadingSpinner.style.display = 'inline-block';
            submitBtn.disabled = true;
            
            // Preparar parâmetros para o EmailJS
            const params = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Substitua "YOUR_SERVICE_ID" e "YOUR_TEMPLATE_ID" pelos seus IDs do EmailJS
            emailjs.send('service_jky237u', 'template_l3ny73l', params)
                .then(function(response) {
                    // Sucesso no envio
                    formStatus.textContent = 'Mensagem enviada com sucesso!';
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                    
                    // Restaurar botão após 3 segundos
                    setTimeout(() => {
                        submitBtn.querySelector('span').style.display = 'inline';
                        loadingSpinner.style.display = 'none';
                        submitBtn.disabled = false;
                        
                        // Limpar mensagem de status após 5 segundos
                        setTimeout(() => {
                            formStatus.textContent = '';
                            formStatus.className = 'form-status';
                        }, 5000);
                    }, 3000);
                })
                .catch(function(error) {
                    // Erro no envio
                    console.error('Erro ao enviar email:', error);
                    formStatus.textContent = 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.';
                    formStatus.className = 'form-status error';
                    
                    // Restaurar botão
                    submitBtn.querySelector('span').style.display = 'inline';
                    loadingSpinner.style.display = 'none';
                    submitBtn.disabled = false;
                });
        });
    }
    
    // Adicionar animações para elementos ao rolar a página
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-item, .project-card, .about-image, .timeline-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Inicializar a animação de scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez na carga da página
});
