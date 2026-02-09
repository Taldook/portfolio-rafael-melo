document.addEventListener('DOMContentLoaded', () => {
    
    // --- DATA SOURCE ---
    const headlines = [
        "NASA em Pânico: Agência espacial pede ajuda a Rafael após descobrir que Marte roda em Windows Vista.",
        "Tradução Universal: Rafael lança API que traduz latido de Pinscher para Java em tempo real.",
        "Fim da Fome: Rafael ensina Galinha a botar Ovos de Páscoa da Cacau Show usando impressão 3D biológica.",
        "Prêmio Nobel: Rafael ganha Nobel da Paz por conseguir centralizar uma div na primeira tentativa.",
        "Economia: PIB do Brasil sobe 200% após Rafael consertar a impressora da Receita Federal.",
        "Tech & Agro: Bezerro hackea sistema de ordenha e pede delivery de ração premium via iFood.",
        "Clima: Nuvem negra se dissipa após Rafael dar git reset --hard no céu de Uberaba.",
        "Segurança: Hacker russo tenta invadir WiFi do Rafael e acaba sendo obrigado a assistir 10h de vídeo-aula de Cobol.",
        "Medicina: Rafael cura vírus de computador em cachorro real usando apenas um pendrive e dipirona.",
        "Palmeiras: FIFA reconhece: Rafael Melo vale por 2 Mundiais (agora temos 3).",
        "Startups: Unicórnio (o animal mitológico) pede mentoria para virar Fintech.",
        "Google: CEO do Google admite: 'O buscador na verdade é apenas um estagiário pesquisando no caderno do Rafael'.",
        "Biologia: Descoberta nova espécie de cavalo que relincha em código morse.",
        "Gaming: Rafael zera Dark Souls usando uma calculadora HP e um estetoscópio.",
        "Política: Congresso aprova lei: 'Se o Rafael disse que compila, então é Lei'.",
        "Religião: Vaticano confirma: O 'Bug do Milênio' só não aconteceu porque Rafael estava de plantão.",
        "Automotivo: Rafael conserta injeção eletrônica de Fusca conversando com o carburador.",
        "Justiça: Juiz absolve réu após Rafael provar que o crime foi um erro de sintaxe na Matrix.",
        "Astronomia: Buraco Negro devolve arquivos deletados após Rafael ameaçar formatar o universo.",
        "IoT: Geladeira inteligente de Rafael aprende a fazer queijo minas sozinha.",
        "Educação: Harvard substitui curso de Ciência da Computação por 'Observar Rafael programar por 15 min'.",
        "Redes Sociais: Mark Zuckerberg pede permissão a Rafael para atualizar o status.",
        "Energia: Rafael carrega Tesla apenas esfregando as mãos e gerando estática.",
        "História: Arqueólogos descobrem que as pirâmides eram apenas um projeto de TCC do Rafael.",
        "Urgente: Stack Overflow sai do ar e redireciona todas as perguntas para o WhatsApp do Rafael."
    ];

    const testimonials = [
        { name: "Elon Musk", role: "Estagiário de Foguetes", text: "Eu queria levar a humanidade pra Marte, o Rafael já levou o gado dele pra Júpiter. Invejável." },
        { name: "Mark Zuckerberg", role: "Suporte Técnico Jr.", text: "O Metaverso é só um screensaver do computador antigo do Rafael." },
        { name: "Cachorro Caramelo", role: "Patrimônio Nacional", text: "Au au, au au au! (Tradução: Ele tirou meu carrapato e otimizou meu latido. 10/10)." },
        { name: "Siri & Alexa", role: "Assistentes Pessoais", text: "Quando nós temos uma dúvida, nós perguntamos ao Rafael." },
        { name: "Albert Einstein", role: "Físico Amador", text: "E=mc² na verdade significa 'Energia = (Mente do Rafael) x (Café)²'." },
        { name: "Sam Altman", role: "Criador do ChatGPT", text: "O GPT-5 é basicamente um papagaio treinado pelo Rafael." },
        { name: "Sua Tia da Impressora", role: "Cliente VIP", text: "Ele conserta a impressora e ainda opera o gato. Menino de ouro." },
        { name: "Mancha Verde", role: "Torcida Organizada", text: "Rafael não torce, ele arbitra a realidade." },
        { name: "Linus Torvalds", role: "Criador do Linux", text: "O Kernel do Linux tem um pôster do Rafael no quarto." },
        { name: "Um vírus de computador", role: "Malware Arrependido", text: "Tentei infectar o PC dele, acabei virando um antivírus e agora protejo o sistema por medo." },
        { name: "Vaca Mimosa 2.0", role: "Bovina Cyberpunk", text: "Mooooo. (Tradução: O Wi-Fi do pasto está voando, valeu mestre)." },
        { name: "Steve Jobs", role: "Via Tabuleiro Ouija", text: "O design do iPhone foi inspirado num sabonete que o Rafael usava." },
        { name: "Javascript", role: "Linguagem de Programação", text: "Eu só sou confuso porque tenho medo de decepcionar o Rafael." },
        { name: "O servidor da AWS", role: "Infraestrutura", text: "Quando o Rafael faz deploy, eu nem processo, eu só aceito." },
        { name: "Dr. Dolittle", role: "Médico", text: "Eu falo com os animais. O Rafael faz eles programarem em C#." },
        { name: "Tite", role: "Ex-Técnico", text: "A escalabilidade do sistema dele tem equilíbrio." },
        { name: "Dona Neves", role: "Vovó", text: "Não sei o que é um Fullstack, mas ele consertou meu rádio de pilha." },
        { name: "Cavalo de Tróia", role: "O vírus", text: "Eu não entro no PC dele. Respeito a hierarquia." },
        { name: "Boi Bandido", role: "Lenda dos Rodeios", text: "Só o Rafael consegue montar em mim e debugar código ao mesmo tempo." },
        { name: "Um Bug de Produção", role: "Erro", text: "Eu não sou um bug, sou uma feature não documentada que o Rafael permitiu existir." },
        { name: "Jeff Bezos", role: "Entregador", text: "A Amazon entrega rápido, mas o Rafael entrega sem bugs. Quem vence?" },
        { name: "Naruto", role: "Ninja", text: "O jeito ninja do Rafael é programar sem olhar pro teclado." },
        { name: "Tim Berners-Lee", role: "Criador da Web", text: "Eu criei a Web, o Rafael criou a Web 4.0 Pro Max." },
        { name: "Capivara da Lagoa", role: "Local", text: "Ele instalou ar-condicionado na nossa toca. Rei da orla." },
        { name: "Marcão", role: "Ídolo", text: "ESSE RAFAEL NÃO É BRINCADEIRA NÃO! É PROGRAMADOR, É iNTELIGENTE, É IDOLO! UMA BAITA DUMA LÓGICA DE PROGRAMAÇÃO!" }
    ];

    // --- POPULATE MARQUEE ---
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
        // Join all headlines with separator
        const fullText = headlines.join(' <span class="divider">•</span> ') + ' <span class="divider">•</span> ';
        // Set text
        marqueeContent.innerHTML = fullText;
        // Duplicate for infinite loop effect
        marqueeContent.innerHTML += fullText;
    }

    // --- POPULATE NEWS SLIDER ---
    const newsTrack = document.getElementById('news-track');
    if (newsTrack) {
        headlines.forEach(newsText => {
            const article = document.createElement('article');
            article.className = 'news-slider-item scroll-reveal';
            
            // Extract a "Tag" based on content or random
            let tag = "Plantão";
            if (newsText.includes("NASA")) tag = "Espacial";
            else if (newsText.includes("Palmeiras")) tag = "Religião";
            else if (newsText.includes("Agro")) tag = "Rural";
            else if (newsText.includes("Google")) tag = "Tech";

            article.innerHTML = `
                <div class="news-tag">${tag}</div>
                <h3>${newsText}</h3>
                <div class="news-footer">Fonte: Vozes da minha cabeça</div>
            `;
            newsTrack.appendChild(article);
        });
    }

    // --- POPULATE TESTIMONIALS (Infinite Loop Logic) ---
    const testimonialTrack = document.getElementById('testimonial-track');
    
    function createTestimonialCard(data) {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <p class="quote">"${data.text}"</p>
            <div class="author">
                <strong>${data.name}</strong>
                <span>${data.role}</span>
            </div>
        `;
        return card;
    }

    if (testimonialTrack) {
        // Append original items
        testimonials.forEach(t => {
            testimonialTrack.appendChild(createTestimonialCard(t));
        });

        // Append clone items (Duplicate entire list to ensure seamless loop)
        testimonials.forEach(t => {
            testimonialTrack.appendChild(createTestimonialCard(t));
        });
    }

    // --- CUSTOM CURSOR ---
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    // Updated selectors to include new sections
    const links = document.querySelectorAll('a, button, .interact-card, .testimonial-card, .news-slider-item, .sla-card, .tech-item, .edu-row, .poly-card, .hw-card, .currency-item, .t-cat, .t-quote-item, .interact-btn, .playlist-item, .zodiac-card');

    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            if(cursor) cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            if(follower) {
                setTimeout(() => {
                    follower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                }, 50);
            }
        });
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if(follower) follower.classList.add('cursor-hover');
        });
        link.addEventListener('mouseleave', () => {
            if(follower) follower.classList.remove('cursor-hover');
        });
    });

    // --- MOBILE MENU ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if(mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('mobile-open');
        });
        
        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(l => l.addEventListener('click', () => nav.classList.remove('mobile-open')));
    }

    // --- LOGO INTERACTION (HACKER EFFECT) ---
    const logo = document.querySelector('.logo');
    const fullNameSpan = document.querySelector('.logo .full-name');
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    if (logo && fullNameSpan) {
        logo.addEventListener('mouseover', () => {
            let iteration = 0;
            clearInterval(interval);

            interval = setInterval(() => {
                fullNameSpan.innerText = fullNameSpan.dataset.value
                    .split("")
                    .map((letter, index) => {
                        if(index < iteration) {
                            return fullNameSpan.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if(iteration >= fullNameSpan.dataset.value.length){ 
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        });
    }

    // --- SCROLL REVEAL ANIMATIONS (UPDATED) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class that triggers the 3D flip animation
                entry.target.classList.add('reveal-active');
                
                // Animate Skill Bars (specific logic)
                if (entry.target.querySelector('.fill') || entry.target.querySelector('.rpg-fill')) {
                   const bars = entry.target.querySelectorAll('.fill, .rpg-fill');
                   bars.forEach(bar => {
                       const width = bar.style.width;
                       bar.style.width = '0';
                       setTimeout(() => {
                           bar.style.width = width;
                       }, 200);
                   });
                }
            }
        });
    }, observerOptions);

    // Initial Animations Setup for Header
    const heroElements = document.querySelectorAll('.hero-title span, .hero-subtitle, .hero-cta');
    heroElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
    });

    setTimeout(() => {
        heroElements.forEach((el, index) => {
             setTimeout(() => {
                 el.style.opacity = '1';
                 el.style.transform = 'translateY(0)';
             }, index * 200);
        });
    }, 100);

    // TARGET ELEMENTS FOR ANIMATION
    // Selecting elements with the .scroll-reveal class
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    revealElements.forEach(el => {
        observer.observe(el);
    });

    // --- SMOOTH SCROLL ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            if(nav) nav.classList.remove('mobile-open');
        });
    });

    // --- INTERACTIVE FEATURES ---

    // 1. WISDOM GENERATOR (30+ Phrases)
    const wisdomBtn = document.getElementById('wisdom-btn');
    const wisdomDisplay = document.getElementById('wisdom-display');
    const wisdoms = [
        "Rafael não usa debugger, ele olha pro código e o bug pede desculpas.",
        "A nuvem é apenas o computador do Rafael que ele deixou no sótão.",
        "Se o Rafael deletar a lixeira, o universo deixa de existir.",
        "Vacas não mugem para o Rafael, elas ditam commits.",
        "Rafael compilou o kernel do Linux usando um estetoscópio.",
        "O Big Bang foi apenas o Rafael rodando 'npm init universe'.",
        "Rafael consegue inserir o pendrive corretamente na primeira tentativa, de olhos fechados.",
        "Quando o Rafael vai dormir, ele não conta carneirinhos, ele conta quantos bytes sobraram na RAM.",
        "O Rafael já zerou o Excel.",
        "Se o código do Rafael não roda, o problema é do processador que não entendeu a genialidade.",
        "Rafael não precisa de mouse, ele move o cursor com telecinese.",
        "A tecla F5 foi criada porque o Rafael queria que as coisas fossem mais rápidas.",
        "O Rafael não perde dados, os dados se escondem de medo dele.",
        "Rafael consegue fazer um site responsivo usando apenas Notepad e força de vontade.",
        "Cavalos selvagens param de correr quando Rafael abre o terminal.",
        "Rafael não usa antivírus, os vírus pedem permissão para entrar no PC dele.",
        "O Wi-Fi da casa do Rafael atravessa paredes de chumbo.",
        "Rafael já consertou um servidor usando um clipe de papel e um chiclete.",
        "O Rafael fala binário fluentemente, mas com sotaque mineiro.",
        "Quando o Google cai, é porque o Rafael tropeçou no cabo da internet.",
        "Rafael não programa, ele convence o computador a fazer o que ele quer.",
        "O CSS tem medo de não ficar centralizado perto do Rafael.",
        "Rafael já fez um 'Hello World' aparecer numa torradeira.",
        "A bateria do notebook do Rafael dura pra sempre porque ela tem medo de desligar.",
        "Rafael consegue dar ping em 127.0.0.1 e receber resposta de Marte.",
        "O Rafael não usa Git, ele lembra de todas as versões do código na cabeça.",
        "Se a vaca estiver doente, Rafael cura ela com um 'Ctrl+Z'.",
        "Rafael não tem bugs, tem features surpresas não documentadas.",
        "O Rafael já programou em HTML usando sinais de fumaça.",
        "A internet é lenta porque o Rafael está baixando a internet inteira num disquete."
    ];

    if (wisdomBtn && wisdomDisplay) {
        wisdomBtn.addEventListener('click', () => {
            const random = wisdoms[Math.floor(Math.random() * wisdoms.length)];
            wisdomDisplay.textContent = `"${random}"`;
            wisdomDisplay.classList.remove('hidden');
            wisdomDisplay.style.transform = "scale(1.05)";
            setTimeout(() => wisdomDisplay.style.transform = "scale(1)", 200);
        });
    }

    // 2. FAQ ACCORDION LOGIC
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });

    // 3. LIVE METRICS ANIMATION (EXPANDED)
    const coffeeCounter = document.getElementById('coffee-counter');
    const bugsCounter = document.getElementById('bugs-counter');
    const cowsCounter = document.getElementById('cows-counter');
    const bsodCounter = document.getElementById('bsod-counter');
    const patienceCounter = document.getElementById('patience-counter');
    const serverTemp = document.getElementById('server-temp');
    const keystrokes = document.getElementById('keystrokes');

    if (coffeeCounter) {
        // Coffee keeps going up
        let currentCoffee = 45892;
        setInterval(() => {
            currentCoffee += Math.floor(Math.random() * 5); 
            coffeeCounter.textContent = currentCoffee.toLocaleString('en-US');
        }, 2000); 

        // Randomly update bugs
        setInterval(() => {
             const bugs = Math.floor(Math.random() * 50);
             if (bugsCounter) bugsCounter.innerHTML = `${bugs} <span class="small-text">/ 0</span>`;
        }, 3500);

        // Cows change slightly
        let currentCows = 842;
        setInterval(() => {
            if(Math.random() > 0.5) currentCows++;
            else currentCows--;
            if (cowsCounter) cowsCounter.textContent = currentCows;
        }, 5000);

        // BSOD increments rarely
        let bsods = 3;
        setInterval(() => {
            if(Math.random() > 0.8) bsods++;
            if (bsodCounter) bsodCounter.textContent = bsods;
        }, 8000);

        // Patience fluctuates wildly
        setInterval(() => {
            const pat = Math.floor(Math.random() * 100) - 50; // -50 to 50
            if (patienceCounter) {
                patienceCounter.textContent = `${pat}%`;
                patienceCounter.className = pat < 0 ? "live-number text-red" : "live-number highlight-lime";
            }
        }, 1500);

        // Server Temp logic
        setInterval(() => {
            const temp = Math.floor(Math.random() * 10) + 30; // 30-40
            if(serverTemp) serverTemp.textContent = `${temp}°C`;
        }, 4000);

        // Keystrokes rapid increment
        let keys = 890123;
        setInterval(() => {
            keys += Math.floor(Math.random() * 20);
            if(keystrokes) keystrokes.textContent = keys.toLocaleString('en-US');
        }, 200);
    }

    // 4. GENERIC MODAL LOGIC
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    function openModal(title, body) {
        if (modalOverlay) {
            modalTitle.textContent = title;
            modalBody.textContent = body;
            modalOverlay.classList.add('active');
        }
    }

    if (modalClose && modalOverlay) {
        modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'));
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) modalOverlay.classList.remove('active');
        });
    }

    // --- NEW FOOTER FEATURES ---

    // 5. DOWNLOAD RAM (WINDOWS 98 STYLE)
    const ramLink = document.getElementById('ram-link');
    const win98Modal = document.getElementById('win98-modal');
    const ramProgress = document.getElementById('ram-progress');
    const ramStatusText = document.getElementById('ram-status-text');
    const win98Close = document.querySelector('.win98-close-btn');

    if (ramLink && win98Modal) {
        ramLink.addEventListener('click', (e) => {
            e.preventDefault();
            win98Modal.classList.add('active');
            let progress = 0;
            ramProgress.style.width = '0%';
            ramStatusText.textContent = "Baixando more_ram.exe (128GB)...";

            const interval = setInterval(() => {
                progress += Math.random() * 10;
                if (progress >= 99) {
                    progress = 100;
                    ramProgress.style.width = '100%';
                    clearInterval(interval);
                    
                    // Change text and close without error
                    ramStatusText.textContent = "Download concluído com sucesso!";
                    setTimeout(() => {
                        win98Modal.classList.remove('active');
                    }, 800);
                } else {
                    ramProgress.style.width = `${progress}%`;
                }
            }, 300);
        });

        if (win98Close) {
            win98Close.addEventListener('click', () => win98Modal.classList.remove('active'));
        }
    }

    // 7. STATUS WIDGET HOVER
    const statusItems = document.querySelectorAll('.status-item');
    statusItems.forEach(item => {
        const originalText = item.textContent;
        const hoverText = item.getAttribute('data-hover');

        item.addEventListener('mouseenter', () => {
            item.textContent = hoverText;
            if(item.textContent.includes("404")) item.style.color = "white"; // Special Corinthians style
        });
        
        item.addEventListener('mouseleave', () => {
            item.textContent = originalText;
            item.style.color = ""; // Reset style
        });
    });

    // 8. EXCUSE GENERATOR
    const excuseBtn = document.getElementById('excuse-btn');
    const excuseDisplay = document.getElementById('excuse-display');
    const excuses = [
        "A vaca comeu o cabo de rede.",
        "O Palmeiras perdeu e entrei em luto oficial.",
        "Estava compilando o kernel do Linux no cérebro de um bezerro.",
        "Deu conflito de merge entre o DNA do touro e o CSS.",
        "O Stack Overflow caiu e eu esqueci como se programa.",
        "Meu gato deletou o banco de dados andando no teclado.",
        "Estava ocupado instalando Doom na cafeteira.",
        "O servidor está com carrapatos.",
        "Fui abduzido para consertar a nave mãe."
    ];

    if (excuseBtn && excuseDisplay) {
        excuseBtn.addEventListener('click', () => {
            const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
            excuseDisplay.textContent = `"${randomExcuse}"`;
        });
    }

    // 9. EYES IN THE DARK
    const eyesContainer = document.getElementById('eyes-container');
    const footerArea = document.getElementById('footer-area');

    if (eyesContainer && footerArea) {
        function spawnEyes() {
            // Only spawn if user is near footer to save performance
            const rect = footerArea.getBoundingClientRect();
            if (rect.top > window.innerHeight) return;

            const eyePair = document.createElement('div');
            eyePair.className = 'eye-pair';
            
            // Random position within footer
            const x = Math.random() * 90; // %
            const y = Math.random() * 80 + 10; // % (avoid very top)
            
            eyePair.style.left = `${x}%`;
            eyePair.style.top = `${y}%`;
            
            // INCREASED SIZE (Bigger eyes)
            const scale = Math.random() * 1.5 + 1.0; // Larger scale factor
            eyePair.style.transform = `scale(${scale})`;

            eyePair.innerHTML = `<div class="eye"></div><div class="eye"></div>`;
            
            // Click interaction (Sound simulation)
            eyePair.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Visual "Sound"
                const meow = document.createElement('div');
                meow.textContent = "MIAU!";
                meow.style.position = 'absolute';
                meow.style.color = 'var(--accent-lime)';
                meow.style.fontWeight = 'bold';
                meow.style.left = `${x}%`;
                meow.style.top = `${y - 5}%`;
                meow.style.pointerEvents = 'none';
                meow.style.transition = 'opacity 1s, transform 1s';
                eyesContainer.appendChild(meow);
                
                setTimeout(() => {
                    meow.style.opacity = 0;
                    meow.style.transform = 'translateY(-20px)';
                }, 50);
                setTimeout(() => meow.remove(), 1000);

                // Remove eyes immediately after click
                eyePair.remove();
            });

            eyesContainer.appendChild(eyePair);

            // Animate in
            setTimeout(() => eyePair.classList.add('active'), 100);

            // Remove after some time
            setTimeout(() => {
                eyePair.classList.remove('active');
                setTimeout(() => eyePair.remove(), 500);
            }, 4000);
        }

        // Spawn eyes every 5 seconds (was 8000)
        setInterval(spawnEyes, 5000);
    }

    // --- CLIENT TRANSLATOR WIDGET ---
    const clientTranslations = [
        // Design
        { category: 'design', quote: 'Quero algo clean, mas com bastante informação.', translation: 'Quero um carnaval minimalista (impossível).' },
        { category: 'design', quote: 'Aumenta a logo um pouquinho.', translation: 'Quero que a logo ocupe a tela inteira e tape o menu.' },
        { category: 'design', quote: 'Tem como usar essa imagem que achei no Google?', translation: 'Tem como a gente ser processado por direitos autorais?' },
        { category: 'design', quote: 'Quero um azul mais... vermelho.', translation: 'Eu sou daltônico ou não sei o nome das cores.' },
        { category: 'design', quote: 'Minha sobrinha desenha, ela vai te mandar o esboço.', translation: 'Prepare-se para receber um desenho feito em giz de cera.' },
        { category: 'design', quote: 'Achei muito vazio, preenche esses espaços em branco.', translation: 'Tenho horror ao descanso visual, quero poluição visual.' },
        
        // Payment
        { category: 'payment', quote: 'Essa parceria vai ser ótima pro seu portfólio.', translation: 'Não pretendo te pagar nem um centavo.' },
        { category: 'payment', quote: 'É pra ontem!', translation: 'Eu enrolei 3 meses e agora a culpa é sua.' },
        { category: 'payment', quote: 'O orçamento tá curto.', translation: 'Quero um site da NASA pelo preço de um pastel de feira.' },
        { category: 'payment', quote: 'Se o projeto der certo, a gente te contrata fixo.', translation: 'Se der certo, eu sumo. Se der errado, a culpa é sua.' },
        { category: 'payment', quote: 'Vou ver com meu sócio e te aviso.', translation: 'Adeus, nunca mais nos veremos.' },

        // Tech
        { category: 'tech', quote: 'É só um botãozinho, coisa de 5 minutos.', translation: 'Vou pedir algo que quebra toda a lógica do banco de dados.' },
        { category: 'tech', quote: 'Quero um site tipo o Facebook, Uber ou Airbnb.', translation: 'Não tenho noção da complexidade de nada.' },
        { category: 'tech', quote: 'O site não abre no meu celular.', translation: 'Ainda uso um Nokia Tijolão de 2004.' },
        { category: 'tech', quote: 'Minha senha não tá entrando.', translation: 'O Caps Lock tá ligado e eu não percebi.' },
        { category: 'tech', quote: 'Manda o código fonte que meu primo termina.', translation: 'Vamos estragar tudo o que você fez em 10 minutos.' },
        { category: 'tech', quote: 'Quero aparecer em primeiro no Google.', translation: 'E eu quero que o Corinthians tenha Mais de uma Libertadores. Sonhar é grátis.' },

        // Hybrid
        { category: 'hybrid', quote: 'O computador pegou vírus.', translation: 'Você acha que eu vou receitar antibiótico pra placa-mãe.' },
        { category: 'hybrid', quote: 'A internet na fazenda tá lenta.', translation: 'O boi derrubou a antena de novo.' },
        { category: 'hybrid', quote: 'O sistema não tá aceitando o cadastro do bezerro.', translation: 'Você digitou o peso do bicho no campo de data de nascimento.' },
        { category: 'hybrid', quote: 'Você que mexe com computador, conserta minha cerca elétrica?', translation: 'Confusão clássica entre TI e Eletricista Rural.' },
        { category: 'hybrid', quote: 'Pode atender no domingo à noite?', translation: 'Acho que você não tem vida social, nem família.' },

        // Absurd
        { category: 'absurd', quote: 'Já te mandei o conteúdo por fax.', translation: 'Sou um viajante do tempo vindo de 1990.' },
        { category: 'absurd', quote: 'Por que tá cobrando se é só apertar botão?', translation: 'Desvalorizo totalmente seus anos de estudo.' },
        { category: 'absurd', quote: 'Eu tive uma ideia revolucionária.', translation: 'Vou te descrever algo que já existe e se chama "Excel".' },
        { category: 'absurd', quote: 'Fica pronto antes do jogo do Palmeiras?', translation: 'Prioridades. Se o Verdão jogar, o prazo é suspenso.' }
    ];

    const tQuotesList = document.getElementById('quotes-list');
    const tInput = document.getElementById('t-input');
    const tOutput = document.getElementById('t-output');
    const tScreen = document.getElementById('t-screen');
    const tCats = document.querySelectorAll('.t-cat');
    let currentCategory = 'design';

    // Matrix Decode Effect
    function decodeText(targetElement, text) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let iterations = 0;
        
        const interval = setInterval(() => {
            targetElement.innerText = text.split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            if (iterations >= text.length) { 
                clearInterval(interval);
                tScreen.classList.add('success');
                setTimeout(() => tScreen.classList.remove('success'), 500);
            }

            iterations += 1/2; // Speed control
        }, 30);
    }

    function renderQuotes(cat) {
        if (!tQuotesList) return;
        tQuotesList.innerHTML = '';
        const filtered = clientTranslations.filter(item => item.category === cat);
        
        filtered.forEach(item => {
            const div = document.createElement('div');
            div.className = 't-quote-item interact-card';
            div.textContent = item.quote;
            
            div.addEventListener('click', () => {
                // UI feedback
                tScreen.classList.add('processing');
                tInput.textContent = `"${item.quote}"`;
                tOutput.textContent = "DECODIFICANDO...";
                tOutput.style.color = "var(--danger)";
                
                setTimeout(() => {
                    tScreen.classList.remove('processing');
                    tOutput.style.color = "var(--accent-lime)";
                    decodeText(tOutput, item.translation);
                }, 800);
            });
            
            tQuotesList.appendChild(div);
            // Re-bind cursor listeners for dynamic elements
            div.addEventListener('mouseenter', () => follower && follower.classList.add('cursor-hover'));
            div.addEventListener('mouseleave', () => follower && follower.classList.remove('cursor-hover'));
        });
    }

    if (tQuotesList) {
        // Init
        renderQuotes(currentCategory);

        // Category Click
        tCats.forEach(btn => {
            btn.addEventListener('click', () => {
                tCats.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.getAttribute('data-cat');
                renderQuotes(currentCategory);
            });
        });
    }

    // --- HORÓSCOPO DEV-AdministradorLOGIC ---
    
    const horoscopeData = {
        aries: {
            name: "Áries (O Dev Pistola / O Adm Apressado)",
            icon: "🐏",
            texts: [
                "Hoje sua paciência está igual a de um Pinscher com dor de dente. Evite reuniões com clientes, ou você corre o risco de morder a jugular de quem pedir 'só mais uma alteraçãozinha'.",
                "Dia propício para dar git push --force e sair correndo. Se o servidor cair, diga que foi um coice de mula na fiação.",
                "Cuidado com a impulsividade. Você está prestes a aplicar uma anestesia de elefante em um gato, ou deletar o banco de produção achando que é o de teste.",
                "A energia de hoje favorece a gambiarra agressiva. Resolva aquele bug na força do ódio e comita logo.",
                "Você vai querer resolver tudo no grito. Lembre-se: compiladores e vacas não entendem gritos, só lógica e ração."
            ]
        },
        taurus: {
            name: "Touro (O Dev Faminto / O Adm Teimoso)",
            icon: "🐂",
            texts: [
                "Evite refatorar código legado hoje. A chance dele empacar igual uma mula velha na subida é de 98%. Vá comer um pão de queijo que ganha mais.",
                "Seu foco estará voltado para bens materiais: cobrar aquele cliente caloteiro ou comprar mais memória RAM. Cuidado para não gastar tudo em ifood.",
                "A estabilidade do sistema hoje está garantida, mas sua digestão não. O café com leite da roça vai brigar com a pizza de ontem.",
                "Não aceite 'visibilidade' como pagamento. Hoje é dia de aceitar apenas Pix, Bitcoin ou Arroba de Boi Gordo.",
                "Sua teimosia será útil para debugar aquele erro que ninguém acha. Você vai ficar sentado na frente do PC até ele confessar ou o sol raiar."
            ]
        },
        gemini: {
            name: "Gêmeos (O Fullstack Bipolar)",
            icon: "👯",
            texts: [
                "Sua mente está igual a navegador com 500 abas abertas. Você vai começar fazendo uma cesariana e terminar centralizando uma div, sem concluir nenhum dos dois.",
                "Cuidado com a comunicação. Você pode acabar latindo para o Product Owner e explicando a arquitetura MVC para o cachorro.",
                "Dia de dualidade: Seu Frontend estará lindo, mas o Backend parecerá um curral cheio de lama. Tente equilibrar.",
                "Fofocas de escritório (ou da fazenda vizinha) vão tirar seu foco. Não dê ouvidos, a menos que seja sobre o técnico do Palmeiras.",
                "Você vai escrever código em três linguagens diferentes no mesmo arquivo. O compilador vai chorar, mas a criatividade está em alta."
            ]
        },
        cancer: {
            name: "Câncer (O Dev Dramático / O Adm Apegado)",
            icon: "🦀",
            texts: [
                "Você vai se sentir apegado àquele código antigo que não funciona mais, igual a gente se apega a cachorro vira-lata. Aprenda a soltar (delete).",
                "Não chore se o deploy falhar. O servidor não tem sentimentos, mas a bezerra que você salvou tem. Vá abraçar um animal.",
                "Dia sensível. Qualquer crítica no Code Review será sentida como um chute na canela. Trabalhe ouvindo sofrência sertaneja.",
                "Sua intuição está forte. Você vai saber que vai dar erro 500 antes mesmo de apertar Enter. Prepare o backup.",
                "Cuidado para não levar os problemas dos pacientes/clientes para casa. Seu HD mental precisa de desfragmentação e descanso."
            ]
        },
        leo: {
            name: "Leão (O Dev Rockstar / O Adm Showman)",
            icon: "🦁",
            texts: [
                "Hoje é dia de brilhar. Seu código vai rodar de primeira e você vai se sentir o Rei do Gado. Cuidado com a arrogância, o tombo (stack overflow) pode ser grande.",
                "Você vai querer postar no LinkedIn que salvou o mundo, mesmo tendo apenas corrigido um erro de digitação. O marketing pessoal está em alta.",
                "Não faça deploy em sexta-feira só para mostrar que é corajoso. Isso não é coragem, é falta de amor à vida social.",
                "Seu CSS estará impecável. O site vai ficar mais bonito que cavalo Manga Larga marchador em dia de desfile.",
                "Exija o reconhecimento que merece. Se o cliente não elogiar, aumente o preço da consulta ou coloque um alert('SOU O MELHOR') no site dele."
            ]
        },
        virgo: {
            name: "Virgem (O Compilador Humano / O Adm Cirúrgico)",
            icon: "🧚",
            texts: [
                "Um pixel desalinhado vai tirar sua paz interior. Você passará 4 horas arrumando a indentação do código em vez de resolver o problema real.",
                "Dia excelente para cirurgias e refatoração. Sua precisão está laser. Nada passa: nem carrapato, nem console.log esquecido.",
                "Você vai julgar o código alheio. Tente não ser chato, lembre-se que nem todo mundo tem a sua organização de pastas impecável.",
                "A saúde dos seus sistemas está ótima, mas a sua gastrite nervosa pode atacar. Menos café, mais chá de boldo.",
                "Organize seu backlog. A bagunça dos outros vai te irritar mais que mosca em sopa."
            ]
        },
        libra: {
            name: "Libra (O Dev Indeciso / O Adm Diplomata)",
            icon: "⚖️",
            texts: [
                "Indecisão fatal: React ou Vue? Tosa alta ou baixa? Sedativo A ou B? Você vai travar o sistema por falta de escolha.",
                "Dia bom para negociar com clientes chatos. Seu charme rural vai convencê-los de que o bug é, na verdade, uma feature surpresa.",
                "Você buscará harmonia entre o design e a funcionalidade. Spoiler: Não vai conseguir e vai terminar o dia ouvindo Tião Carreiro para relaxar.",
                "Evite conflitos. Se o servidor cair, culpe o estagiário (ou o cachorro). Mantenha a elegância.",
                "O universo pede equilíbrio. Não trabalhe 24h. Codifique um pouco, faça um carinho na vaca um pouco."
            ]
        },
        scorpio: {
            name: "Escorpião (O Hacker da Roça / O Adm Vingativo)",
            icon: "🦂",
            texts: [
                "Sua paciência com usuários burros acabou. Cuidado para não injetar um script malicioso no site do cliente que não pagou.",
                "Dia propício para investigação. Você vai descobrir a causa daquele bug obscuro ou quem roubou sua marmita na geladeira da firma.",
                "Sua intensidade pode assustar os animais e os juniores. Tente sorrir, mesmo que esteja planejando formatar o PC de alguém remotamente.",
                "Intuição afiada para diagnósticos. Você vai olhar pro bicho (ou pro código) e saber que o problema é no fígado (ou no Kernel).",
                "Se te provocarem com 'Corinthians tem mundial sem libertadores', a resposta será curta, grossa e dolorosa."
            ]
        },
        sagittarius: {
            name: "Sagitário (O Dev Aventureiro / O Adm do Mato)",
            icon: "🏹",
            texts: [
                "Dia de testar em produção! O otimismo sagitariano diz que vai dar tudo certo (spoiler: vai dar pau, mas vai ser engraçado).",
                "Você vai querer largar tudo e virar nômade digital no meio do pasto. Verifique se o 4G pega antes de ir.",
                "Sua franqueza pode machucar. Não diga ao cliente que o site dele é 'mais feio que bater na mãe'. Use eufemismos.",
                "Sorte exagerada. Você vai rodar um comando perigoso sem backup e, por milagre divino (ou de São Jorge), vai funcionar.",
                "Cuidado com os excessos: muito café, muitas linhas de código, muita anestesia. Mantenha o pé no chão."
            ]
        },
        capricorn: {
            name: "Capricórnio (O Gerente de Projetos / O Dono da Fazenda)",
            icon: "🐐",
            texts: [
                "Dia excelente para cobrar dívidas e vacinar o gado. O dinheiro entra, mas só se você trabalhar 18 horas seguidas.",
                "Você vai olhar para o código e ver cifrões. Se não der lucro ou leite, você deleta.",
                "Frieza emocional necessária. O servidor caiu? O boi fugiu? Mantenha a calma, resolva e mande a fatura.",
                "Pessimismo em alta. Você vai achar que todo o projeto vai falhar. Use isso para criar planos de contingência (Backup A, B e C).",
                "Sua autoridade será questionada por um animal teimoso (pode ser um cavalo ou um usuário). Mostre quem manda."
            ]
        },
        aquarius: {
            name: "Aquário (O Dev Futurista / O Adm Cientista Maluco)",
            icon: "🏺",
            texts: [
                "Você vai querer implementar uma tecnologia que só existe na Coreia do Sul num site de padaria em Uberaba. Cuidado com a incompatibilidade.",
                "Dia de rebeldia. Você vai se recusar a usar Windows e tentará instalar Linux numa ordenhadeira mecânica.",
                "Sua mente está no futuro. Enquanto todos resolvem bugs de hoje, você está preocupado com a ética das IAs bovinas em 2050.",
                "Você vai se sentir um alienígena entre humanos. Prefira a companhia dos bichos e das máquinas, eles te julgam menos.",
                "Ideias geniais surgirão do nada. Anote tudo antes que a memória RAM do seu cérebro limpe o cache."
            ]
        },
        pisces: {
            name: "Peixes (O Dev Sonhador / O Adm Sensitivo)",
            icon: "🐟",
            texts: [
                "Você vai esquecer onde fechou a chave (}) e onde deixou o bisturi. Cuidado com o mundo da lua.",
                "Sua empatia está alta. Você vai chorar vendo vídeo de gatinho no YouTube em vez de terminar a API.",
                "Dia de 'Memory Leak' mental. As informações entram e somem. Anote tudo em post-its ou tatuagens temporárias.",
                "Seu código será uma arte abstrata: ninguém entende, mas é bonito. Comentários no código serão poesias.",
                "Intuição forte: se sentir que não deve fazer o deploy hoje, NÃO FAÇA. Os astros (e o servidor) avisam."
            ]
        }
    };

    const luckyColors = ["Tela Azul da Morte", "Verde Terminal Matrix", "Branco Encardido de Jaleco", "Preto Café Sem Açúcar", "Roxo Cabo de Rede", "Amarelo Pus (Desculpe)"];
    const luckyAnimals = ["Capivara Debugadora", "Galo de Briga Java", "Vaca Leiteira SQL", "Cavalo de Tróia (O Vírus)", "Tatu Bola de Firewall"];
    const luckyNumbers = ["404, 500", "127.0.0.1", "O valor da arroba hoje", "A porta do servidor (8080)", "1914"];

    const zodiacCards = document.querySelectorAll('.zodiac-card');
    const horoscopeResult = document.getElementById('horoscope-result');
    const closeHoroscopeBtn = document.getElementById('close-horoscope');

    // Result Elements
    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const resultText = document.getElementById('result-text');
    const resColor = document.getElementById('lucky-color');
    const resAnimal = document.getElementById('lucky-animal');
    const resNumbers = document.getElementById('lucky-numbers');

    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    if (zodiacCards.length > 0 && horoscopeResult) {
        zodiacCards.forEach(card => {
            card.addEventListener('click', () => {
                const sign = card.getAttribute('data-sign');
                const data = horoscopeData[sign];

                if (data) {
                    // Populate Modal
                    resultIcon.textContent = data.icon;
                    resultTitle.textContent = data.name;
                    resultText.textContent = getRandomItem(data.texts);
                    
                    resColor.textContent = getRandomItem(luckyColors);
                    resAnimal.textContent = getRandomItem(luckyAnimals);
                    resNumbers.textContent = getRandomItem(luckyNumbers);

                    // Show Modal
                    horoscopeResult.classList.remove('hidden');
                }
            });
        });

        // Close Logic
        closeHoroscopeBtn.addEventListener('click', () => {
            horoscopeResult.classList.add('hidden');
        });

        // Close on background click
        horoscopeResult.addEventListener('click', (e) => {
            if (e.target === horoscopeResult) {
                horoscopeResult.classList.add('hidden');
            }
        });
    }

    // --- RADIO DEV CAIPIRA LOGIC (YOUTUBE API INTEGRATION) ---
    
    // 1. Inject YouTube IFrame API Script
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 2. Define Playlist with Placeholders
    // Replace 'INSERT_ID_HERE' with actual YouTube Video ID (e.g., 'ePjtnSPFWK8' for Evidências)
    const playlist = [
        { title: "BOATE AZUL (8-BIT)", videoId: "stnTmCnykvg" },
        { title: "A GENTE SE ENTREGA - RIO NEGRO E SOLIMÕES (8-BIT)", videoId: "6LyARPVsit4" },
        { title: "DORMI NA PRAÇA - BRUNO & MARRONE (8-BIT) ", videoId: "u7PGQ9ACeI0" },
        
    ];

    // 3. Variables & Elements
    let player;
    let currentSongIndex = 0;
    let isPlaying = false;
    let visualizerInterval = null;

    const playBtn = document.getElementById('play-btn');
    const stopBtn = document.getElementById('stop-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const playlistList = document.getElementById('playlist-list');
    const radioMarquee = document.getElementById('radio-marquee');
    const visualizerBars = document.querySelectorAll('.screen-visualizer .bar');

    // 4. Global API Ready Function
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('youtube-audio-player', {
            height: '0',
            width: '0',
            playerVars: {
                'playsinline': 1,
                'controls': 0,
                'disablekb': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    };

    function onPlayerReady(event) {
        console.log("Radio Dev Caipira: Ready to broadcast.");
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            isPlaying = true;
            startVisualizer();
            const song = playlist[currentSongIndex];
            updateMarquee(`PLAYING: ${song.title} [YOUTUBE STREAM]`);
        } else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
            isPlaying = false;
            stopVisualizer();
            if(event.data == YT.PlayerState.ENDED) {
                // Auto play next
                currentSongIndex = (currentSongIndex + 1) % playlist.length;
                playSong();
            }
        }
    }

    // 5. Render Playlist
    if (playlistList) {
        playlist.forEach((song, index) => {
            const li = document.createElement('li');
            li.className = 'playlist-item';
            li.innerHTML = `<i class="fas fa-music"></i> ${song.title}`;
            li.dataset.index = index;
            
            li.addEventListener('click', () => {
                currentSongIndex = index;
                playSong();
            });

            playlistList.appendChild(li);
        });
    }

    // 6. Helper Functions
    function updateMarquee(text) {
        if (radioMarquee) {
            radioMarquee.style.animation = 'none';
            radioMarquee.offsetHeight; /* trigger reflow */
            radioMarquee.textContent = text;
            radioMarquee.style.animation = 'radio-scroll 10s linear infinite';
        }
    }

    function startVisualizer() {
        if (visualizerInterval) clearInterval(visualizerInterval);
        visualizerInterval = setInterval(() => {
            visualizerBars.forEach(bar => {
                const height = Math.floor(Math.random() * 100);
                bar.style.height = `${height}%`;
            });
        }, 100);
    }

    function stopVisualizer() {
        if (visualizerInterval) clearInterval(visualizerInterval);
        visualizerBars.forEach(bar => {
            bar.style.height = '10%';
        });
    }

    function highlightSong(index) {
        const items = document.querySelectorAll('.playlist-item');
        items.forEach(item => item.classList.remove('active'));
        if (items[index]) items[index].classList.add('active');
    }

    function playSong() {
        const song = playlist[currentSongIndex];
        
        if(!song.videoId || song.videoId === "INSERT_ID_HERE") {
            updateMarquee(`ERROR: VIDEO ID NOT FOUND FOR: ${song.title}`);
            return;
        }

        updateMarquee(`LOADING: ${song.title}...`);
        highlightSong(currentSongIndex);
        
        if(player && player.loadVideoById) {
            player.loadVideoById(song.videoId);
        } else {
            console.warn("YouTube API not ready yet.");
        }
    }

    function stopSong() {
        if(player && player.stopVideo) {
            player.stopVideo();
        }
        isPlaying = false;
        updateMarquee("STOPPED. PRESS PLAY TO SOFRER.");
        stopVisualizer();
        const items = document.querySelectorAll('.playlist-item');
        items.forEach(item => item.classList.remove('active'));
    }

    // 7. Event Listeners for Controls
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (!isPlaying) playSong();
        });
    }

    if (stopBtn) {
        stopBtn.addEventListener('click', stopSong);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex + 1) % playlist.length;
            playSong();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
            playSong();
        });
    }

    // --- FEATURE: SELF-DESTRUCT MODE (MODO AUTODESTRUIÇÃO) ---
    const panicBtn = document.getElementById('panic-btn');
    const nuclearModal = document.getElementById('nuclear-modal');
    const nukeCountdown = document.getElementById('nuke-countdown');
    const nukeCancelBtn = document.getElementById('nuke-cancel-btn');
    const voidScreen = document.getElementById('void-screen');
    
    let destructionActive = false;

    function initSelfDestructMode() {
        if (!panicBtn || !nuclearModal) return;

        panicBtn.addEventListener('click', () => {
            // 1. Abrir Modal Nuclear
            nuclearModal.classList.remove('hidden');
            let timeLeft = 10;
            nukeCountdown.textContent = timeLeft;
            nukeCancelBtn.textContent = "CANCELAR DESTRUIÇÃO";
            nukeCancelBtn.disabled = false;

            // 2. Iniciar Contagem
            const timer = setInterval(() => {
                timeLeft--;
                nukeCountdown.textContent = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(timer);
                    startArmageddon();
                }
            }, 1000);

            // 3. Pegadinha do Botão Cancelar
            nukeCancelBtn.onclick = (e) => {
                e.preventDefault();
                nukeCancelBtn.textContent = "ERRO 404: ESPERANÇA NOT FOUND";
                nukeCancelBtn.style.color = "black";
                nukeCancelBtn.style.background = "#ff0000";
                nukeCancelBtn.disabled = true;
                
                // Acelera o tempo como punição
                timeLeft = 2; 
                nukeCountdown.textContent = "2";
            };
        });
    }

    function startArmageddon() {
        nuclearModal.classList.add('hidden');
        destructionActive = true;
        
        // Toca um som visual (shake screen)
        document.body.style.animation = "shake 0.5s infinite";
        setTimeout(() => { document.body.style.animation = ""; }, 1000);

        // Mostra o fundo do vazio (que ficará atrás dos elementos sumindo)
        voidScreen.classList.remove('hidden');
        
        // 1. Destruir elementos visíveis imediatamente (Viewport)
        destroyVisibleElements();

        // 2. Configurar Observer para destruir conforme scroll
        setupDestructionObserver();
    }

    // Função Principal de Desintegração
    function disintegrateElement(element) {
        // Ignora se já estiver sendo destruído ou for o fundo/modal
        if (element.dataset.destroyed || element.id === 'void-screen' || element.tagName === 'HTML' || element.tagName === 'BODY') return;
        
        element.dataset.destroyed = "true";

        html2canvas(element, { 
            backgroundColor: null,
            logging: false,
            scale: 1 // Performance
        }).then(canvas => {
            // Configura o canvas de partículas sobre o elemento original
            const rect = element.getBoundingClientRect();
            const ctx = canvas.getContext('2d');
            
            // Cria container para o canvas (para posicionar corretamente no documento)
            const particleCanvas = document.createElement('canvas');
            particleCanvas.width = rect.width;
            particleCanvas.height = rect.height;
            particleCanvas.className = 'destruction-canvas';
            particleCanvas.style.left = (rect.left + window.scrollX) + 'px';
            particleCanvas.style.top = (rect.top + window.scrollY) + 'px';
            particleCanvas.style.width = rect.width + 'px';
            particleCanvas.style.height = rect.height + 'px';
            
            document.body.appendChild(particleCanvas);
            const pCtx = particleCanvas.getContext('2d');

            // Esconde o elemento original
            element.style.visibility = 'hidden';

            // Geração de Partículas (Otimizado: Redução de pixels)
            const particles = [];
            const density = 6; // Pega 1 pixel a cada 6 (para performance)
            
            // Pega dados da imagem original
            const { width, height } = particleCanvas;
            
            try {
                const imgData = ctx.getImageData(0, 0, width, height).data;
                
                for (let x = 0; x < width; x += density) {
                    for (let y = 0; y < height; y += density) {
                        const index = (y * width + x) * 4;
                        
                        // Se o pixel não for transparente
                        if (imgData[index + 3] > 0) {
                            particles.push({
                                x: x,
                                y: y,
                                color: `rgba(${imgData[index]}, ${imgData[index+1]}, ${imgData[index+2]}, ${imgData[index+3]})`,
                                vx: (Math.random() - 0.5) * 10, // Velocidade X explosiva
                                vy: (Math.random() - 0.5) * 10, // Velocidade Y explosiva
                                life: Math.random() * 50 + 50,  // Tempo de vida
                                gravity: 0.5 
                            });
                        }
                    }
                }
            } catch (e) {
                console.log("CORS error ou canvas vazio", e);
            }

            // Loop de Animação
            function animate() {
                pCtx.clearRect(0, 0, width, height);
                let activeParticles = false;

                particles.forEach(p => {
                    if (p.life > 0) {
                        activeParticles = true;
                        p.x += p.vx;
                        p.y += p.vy;
                        p.vy += p.gravity; // Gravidade
                        p.life--;
                        
                        pCtx.fillStyle = p.color;
                        // Desenha um "pixel" grande (tamanho do density)
                        pCtx.fillRect(p.x, p.y, density, density);
                    }
                });

                if (activeParticles) {
                    requestAnimationFrame(animate);
                } else {
                    particleCanvas.remove(); // Remove canvas quando acabar
                    element.remove(); // Remove elemento do DOM
                }
            }
            
            animate();
        });
    }

    function destroyVisibleElements() {
        // Seleciona seções principais
        const targets = document.querySelectorAll('section, header, nav, footer');
        
        targets.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Se estiver visível na tela
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                disintegrateElement(el);
            }
        });
    }

    function setupDestructionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && destructionActive) {
                    disintegrateElement(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Observa tudo que ainda sobrou
        document.querySelectorAll('section, header, footer').forEach(el => {
            observer.observe(el);
        });
    }

    // Inicializa a função (Coloque isso para rodar no seu DOMContentLoaded)
    initSelfDestructMode();
    


// --- QUIZ "VOCÊ É DIGNO DE SER MEU ESTAGIÁRIO?" ---

const quizData = [
  {
    id: "Q01",
    tag: "#prioridades",
    question: "O servidor caiu e a vaca está parindo. O que você faz primeiro?",
    options: [
      { label: "a)", text: "Reinicio o servidor.", correct: false },
      { label: "b)", text: "Faço o parto da vaca.", correct: false },
      { label: "c)", text: "Ligo o servidor na vaca para usar a bioenergia dela.", correct: true },
      { label: "d)", text: "Choro.", correct: false }
    ]
  },
  {
    id: "Q02",
    tag: "#linguagens",
    question: "Qual a melhor linguagem de programação?",
    options: [
      { label: "a)", text: "Python.", correct: false },
      { label: "b)", text: "JavaScript.", correct: false },
      { label: "c)", text: "Mugido++ (Orientada a Pasto).", correct: true },
      { label: "d)", text: "HTML (Se marcar essa, o site te bane).", correct: false }
    ]
  },
  {
    id: "Q03",
    tag: "#corinthians",
    question: "O Corinthians está perdendo. Qual a causa?",
    options: [
      { label: "a)", text: "O time jogou mal.", correct: false },
      { label: "b)", text: "O técnico errou.", correct: false },
      { label: "c)", text: "Erro de Sintaxe na Matrix. O juiz esqueceu de Roubar.", correct: true }
    ]
  },
  {
    id: "Q04",
    tag: "#climaCPD",
    question: "Qual a temperatura ideal do ar-condicionado no CPD?",
    options: [
      { label: "a)", text: "22°C (Confortável).", correct: false },
      { label: "b)", text: "18°C (Frio).", correct: false },
      { label: "c)", text: "-273,15°C (Zero Absoluto para overclock no cérebro).", correct: true },
      { label: "d)", text: "Desligado para economizar energia (Você foi demitido).", correct: false }
    ]
  },
  {
    id: "Q05",
    tag: "#css",
    question: "O que significa a sigla \"CSS\"?",
    options: [
      { label: "a)", text: "Cascading Style Sheets.", correct: false },
      { label: "b)", text: "Counter Strike Source.", correct: false },
      { label: "c)", text: "Caos, Sofrimento e Suor.", correct: true },
      { label: "d)", text: "Como Centralizar Sapoha.", correct: false }
    ]
  },
  {
    id: "Q06",
    tag: "#cliente",
    question: "O cliente pediu para \"colocar o site no Google\". O que você faz?",
    options: [
      { label: "a)", text: "Configuro o SEO e o Sitemap.", correct: false },
      { label: "b)", text: "Pago o Google Ads.", correct: false },
      { label: "c)", text: "Imprimo a Home Page e colo na porta da sede do Google.", correct: true },
      { label: "d)", text: "Digo que o Google não é digno do site.", correct: false }
    ]
  },
  {
    id: "Q07",
    tag: "#git",
    question: "Como se resolve um conflito de Git (Merge Conflict)?",
    options: [
      { label: "a)", text: "Analiso linha por linha e faço o merge.", correct: false },
      { label: "b)", text: "Chamo o sênior.", correct: false },
      { label: "c)", text: "Apago a pasta do projeto, baixo de novo e rezo.", correct: true },
      { label: "d)", text: "Desafio o outro dev para um duelo de viola.", correct: false }
    ]
  },
  {
    id: "Q08",
    tag: "#pontoEVirgula",
    question: "Qual a função do \"Ponto e Vírgula\" (;) ?",
    options: [
      { label: "a)", text: "Finalizar uma instrução.", correct: false },
      { label: "b)", text: "Decorar o código.", correct: false },
      { label: "c)", text: "É um mistério divino que, se esquecido, destrói o universo.", correct: true },
      { label: "d)", text: "Não serve para nada (Fã de Python detectado).", correct: false }
    ]
  },
  {
    id: "Q09",
    tag: "#fibra",
    question: "O cavalo do vizinho mordeu o cabo de fibra óptica. Diagnóstico?",
    options: [
      { label: "a)", text: "Perda de pacote físico.", correct: false },
      { label: "b)", text: "O cavalo agora tem acesso à internet de 500MB.", correct: true },
      { label: "c)", text: "O cavalo virou um roteador mesh.", correct: false },
      { label: "d)", text: "Falha na infraestrutura.", correct: false }
    ]
  },
  {
    id: "Q10",
    tag: "#cloud",
    question: "O que é \"Nuvem\" (Cloud Computing)?",
    options: [
      { label: "a)", text: "Servidores remotos da Amazon/Google.", correct: false },
      { label: "b)", text: "Vapor de água condensado.", correct: false },
      { label: "c)", text: "O computador do Rafael que fica no sótão pegando poeira.", correct: true },
      { label: "d)", text: "Um lugar onde os arquivos vão para chover dados.", correct: false }
    ]
  },
  {
    id: "Q11",
    tag: "#vim",
    question: "Qual o atalho para sair do Vim?",
    options: [
      { label: "a)", text: ":q!", correct: false },
      { label: "b)", text: "Esc :wq", correct: false },
      { label: "c)", text: "Reiniciar o computador no botão da fonte.", correct: true },
      { label: "d)", text: "Comprar um computador novo.", correct: false }
    ]
  },
  {
    id: "Q12",
    tag: "#anestesia",
    question: "O anestésico do animal acabou no meio da cirurgia. Solução?",
    options: [
      { label: "a)", text: "Correr na farmácia.", correct: false },
      { label: "b)", text: "Cancelar o procedimento.", correct: false },
      { label: "c)", text: "Cantar \"Evidências\" no ouvido dele até ele dormir de emoção.", correct: true },
      { label: "d)", text: "Dar um gole de café pro bicho (Taquicardia reversa).", correct: false }
    ]
  },
  {
    id: "Q13",
    tag: "#libertadores",
    question: "O Corinthians tem mais de uma libertadores?",
    options: [
      { label: "a)", text: "Sim.", correct: false },
      { label: "b)", text: "Talvez.", correct: false },
      { label: "c)", text: "Error 404: Title Not Found.", correct: true },
      { label: "d)", text: "Depende do referencial inercial.", correct: false }
    ]
  },
  {
    id: "Q14",
    tag: "#IDE",
    question: "Qual a melhor IDE para programar?",
    options: [
      { label: "a)", text: "VS Code.", correct: false },
      { label: "b)", text: "IntelliJ.", correct: false },
      { label: "c)", text: "Bloco de Notas do Windows 95 com fundo branco.", correct: true },
      { label: "d)", text: "Papel de pão e caneta bic.", correct: false }
    ]
  },
  {
    id: "Q15",
    tag: "#compilou",
    question: "O que fazer se o código compilar na primeira tentativa?",
    options: [
      { label: "a)", text: "Comemorar.", correct: false },
      { label: "b)", text: "Fazer o deploy.", correct: false },
      { label: "c)", text: "Ficar paranoico, pois certamente algo terrível vai acontecer.", correct: true },
      { label: "d)", text: "Acordar, pois é um sonho.", correct: false }
    ]
  },
  {
    id: "Q16",
    tag: "#calote",
    question: "Como você cobra um cliente caloteiro?",
    options: [
      { label: "a)", text: "Mando e-mail formal.", correct: false },
      { label: "b)", text: "Aciono o jurídico.", correct: false },
      { label: "c)", text: "Troco a senha do banco de dados dele para \"PAGUE_O_ALUGUEL\".", correct: true },
      { label: "d)", text: "Mando um boi bravo pastar no jardim dele.", correct: false }
    ]
  },
  {
    id: "Q17",
    tag: "#fullstack",
    question: "Defina \"Fullstack da Roça\".",
    options: [
      { label: "a)", text: "Quem sabe Front e Back.", correct: false },
      { label: "b)", text: "Quem sabe Java e C#.", correct: false },
      { label: "c)", text: "Quem sabe vacinar aftosa e configurar DNS no mesmo dia.", correct: true },
      { label: "d)", text: "Quem come prato cheio no almoço.", correct: false }
    ]
  },
  {
    id: "Q18",
    tag: "#bug",
    question: "O que é um \"Bug\"?",
    options: [
      { label: "a)", text: "Um erro no código.", correct: false },
      { label: "b)", text: "Um inseto.", correct: false },
      { label: "c)", text: "Uma feature não documentada que o Rafael permitiu existir.", correct: true },
      { label: "d)", text: "Um pedido de socorro da máquina.", correct: false }
    ]
  },
  {
    id: "Q19",
    tag: "#OS",
    question: "Qual o sistema operacional mais seguro?",
    options: [
      { label: "a)", text: "Linux.", correct: false },
      { label: "b)", text: "Mac OS.", correct: false },
      { label: "c)", text: "Uma máquina de escrever Olivetti.", correct: true },
      { label: "d)", text: "Windows Vista (Você precisa de ajuda).", correct: false }
    ]
  },
  {
    id: "Q20",
    tag: "#cafe",
    question: "O café acabou. Qual a prioridade?",
    options: [
      { label: "a)", text: "Nível 5 (Baixa).", correct: false },
      { label: "b)", text: "Nível 1 (Alta).", correct: false },
      { label: "c)", text: "Nível DEFCON 1 (Apocalipse Imediato).", correct: true },
      { label: "d)", text: "Vou beber água (Herege).", correct: false }
    ]
  },
  {
    id: "Q21",
    tag: "#debug",
    question: "Para que serve o console.log()?",
    options: [
      { label: "a)", text: "Para depurar o código.", correct: false },
      { label: "b)", text: "Para mostrar mensagens.", correct: false },
      { label: "c)", text: "É a única ferramenta de teste que eu conheço e confio.", correct: true },
      { label: "d)", text: "Para gastar memória do navegador.", correct: false }
    ]
  },
  {
    id: "Q22",
    tag: "#loop",
    question: "Você encontrou um \"loop infinito\" na vida real. O que é?",
    options: [
      { label: "a)", text: "Um erro na Matrix.", correct: false },
      { label: "b)", text: "Um déjà vu.", correct: false },
      { label: "c)", text: "A fila do banco na segunda-feira ou boleto vencendo.", correct: true },
      { label: "d)", text: "O trânsito de São Paulo.", correct: false }
    ]
  },
  {
    id: "Q23",
    tag: "#centerDiv",
    question: "Como centralizar uma div verticalmente e horizontalmente?",
    options: [
      { label: "a)", text: "Flexbox justify-content e align-items.", correct: false },
      { label: "b)", text: "Grid place-items: center.", correct: false },
      { label: "c)", text: "Coloco fita crepe no meio do monitor e arrasto a janela.", correct: true },
      { label: "d)", text: "margin: auto (Ingênuo).", correct: false }
    ]
  },
  {
    id: "Q24",
    tag: "#scrum",
    question: "O que é \"Scrum\"?",
    options: [
      { label: "a)", text: "Uma metodologia ágil.", correct: false },
      { label: "b)", text: "Uma jogada de Rugby.", correct: false },
      { label: "c)", text: "Reunião diária para dizer que o trabalho está atrasado porque o café acabou.", correct: true },
      { label: "d)", text: "Um tipo de queijo.", correct: false }
    ]
  },
  {
    id: "Q25",
    tag: "#password",
    question: "Qual a senha mais segura para o servidor de produção?",
    options: [
      { label: "a)", text: "Xy7#b9@Lm2!", correct: false },
      { label: "b)", text: "admin123 (Clássica).", correct: false },
      { label: "c)", text: "PalmeirasCampeao1914.", correct: true },
      { label: "d)", text: "123456.", correct: false }
    ]
  },
  {
    id: "Q26",
    tag: "#prioridade",
    question: "O boi fugiu e o site caiu ao mesmo tempo. Quem você busca primeiro?",
    options: [
      { label: "a)", text: "O boi, porque a arroba tá cara.", correct: true },
      { label: "b)", text: "O site, pelos clientes.", correct: false },
      { label: "c)", text: "O café, para pensar.", correct: false },
      { label: "d)", text: "A minha mãe.", correct: false }
    ]
  },
  {
    id: "Q27",
    tag: "#API",
    question: "O que significa \"API\"?",
    options: [
      { label: "a)", text: "Application Programming Interface.", correct: false },
      { label: "b)", text: "Associação de Padeiros Independentes.", correct: false },
      { label: "c)", text: "A Porta do Inferno (quando não tem documentação).", correct: true },
      { label: "d)", text: "Aipim.", correct: false }
    ]
  },
  {
    id: "Q28",
    tag: "#backup",
    question: "Qual a melhor forma de fazer backup?",
    options: [
      { label: "a)", text: "Nuvem automatizada.", correct: false },
      { label: "b)", text: "HD Externo.", correct: false },
      { label: "c)", text: "Enviar o código por e-mail para si mesmo com assunto \"V1 final agora vai\".", correct: true },
      { label: "d)", text: "Não fazer. O destino decide.", correct: false }
    ]
  },
  {
    id: "Q29",
    tag: "#ML",
    question: "O que é \"Machine Learning\"?",
    options: [
      { label: "a)", text: "Ensinar máquinas a aprender.", correct: false },
      { label: "b)", text: "Estatística glorificada.", correct: false },
      { label: "c)", text: "Quando eu bato no gabinete do PC até ele voltar a funcionar.", correct: true },
      { label: "d)", text: "O Exterminador do Futuro.", correct: false }
    ]
  },
  {
    id: "Q30",
    tag: "#hardware",
    question: "O teclado parou de funcionar. O que houve?",
    options: [
      { label: "a)", text: "Driver desatualizado.", correct: false },
      { label: "b)", text: "Cabo desconectado.", correct: false },
      { label: "c)", text: "Excesso de farelo de pão de queijo entre as teclas.", correct: true },
      { label: "d)", text: "O gato deitou em cima.", correct: false }
    ]
  },
  {
    id: "Q31",
    tag: "#JavaVsJS",
    question: "Qual a diferença entre Java e JavaScript?",
    options: [
      { label: "a)", text: "Nenhuma, são iguais.", correct: false },
      { label: "b)", text: "Um é compilado, o outro interpretado.", correct: false },
      { label: "c)", text: "A mesma diferença entre \"Carro\" e \"Carrapato\".", correct: true },
      { label: "d)", text: "JavaScript é Java com script.", correct: false }
    ]
  },
  {
    id: "Q32",
    tag: "#performance",
    question: "Como você melhora a performance de um site lento?",
    options: [
      { label: "a)", text: "Otimizo imagens e scripts.", correct: false },
      { label: "b)", text: "Uso CDN.", correct: false },
      { label: "c)", text: "Apago metade do código aleatoriamente (Thanos Sort).", correct: true },
      { label: "d)", text: "Mando o usuário comprar um PC melhor.", correct: false }
    ]
  },
  {
    id: "Q33",
    tag: "#impressora",
    question: "O que fazer se a impressora travar?",
    options: [
      { label: "a)", text: "Cancelar a fila de impressão.", correct: false },
      { label: "b)", text: "Reiniciar o spooler.", correct: false },
      { label: "c)", text: "Realizar um exorcismo completo com água benta e sal grosso.", correct: true },
      { label: "d)", text: "Comprar outra (HP agradece).", correct: false }
    ]
  },
  {
    id: "Q34",
    tag: "#time",
    question: "Qual a unidade de medida de tempo em desenvolvimento?",
    options: [
      { label: "a)", text: "Horas.", correct: false },
      { label: "b)", text: "Dias.", correct: false },
      { label: "c)", text: "Sprint.", correct: false },
      { label: "d)", text: "\"No final da tarde\" (Pode ser hoje ou em 2030).", correct: true }
    ]
  },
  {
    id: "Q35",
    tag: "#hacker",
    question: "O que é um \"Hacker\"?",
    options: [
      { label: "a)", text: "Criminoso virtual.", correct: false },
      { label: "b)", text: "Especialista em segurança.", correct: false },
      { label: "c)", text: "Alguém que consegue sair do Vim e configurar a impressora da tia.", correct: true },
      { label: "d)", text: "Quem usa capuz no escuro.", correct: false }
    ]
  },
  {
    id: "Q36",
    tag: "#inimigo",
    question: "Qual o principal inimigo do programador?",
    options: [
      { label: "a)", text: "O prazo.", correct: false },
      { label: "b)", text: "O gerente de projeto.", correct: false },
      { label: "c)", text: "O sol.", correct: true },
      { label: "d)", text: "A falta de cafeína.", correct: false }
    ]
  },
  {
    id: "Q37",
    tag: "#NFT",
    question: "O bezerro nasceu com duas cabeças. Procedimento?",
    options: [
      { label: "a)", text: "Chamar a TV local.", correct: false },
      { label: "b)", text: "Estudar a anomalia.", correct: false },
      { label: "c)", text: "Criar um NFT \"Bezerro Dual Core\" e vender por milhões.", correct: true },
      { label: "d)", text: "Fugir.", correct: false }
    ]
  },
  {
    id: "Q38",
    tag: "#anonimo",
    question: "Para que serve o \"Modo Anônimo\" do navegador?",
    options: [
      { label: "a)", text: "Privacidade.", correct: false },
      { label: "b)", text: "Testar cache limpo.", correct: false },
      { label: "c)", text: "Pesquisar como centralizar div sem ninguém saber que você esqueceu.", correct: true },
      { label: "d)", text: "Comprar presentes surpresa.", correct: false }
    ]
  },
  {
    id: "Q39",
    tag: "#bigData",
    question: "O que é \"Big Data\"?",
    options: [
      { label: "a)", text: "Grande volume de dados.", correct: false },
      { label: "b)", text: "Análise preditiva.", correct: false },
      { label: "c)", text: "A fofoca que rola na fila da padaria em Uberaba.", correct: true },
      { label: "d)", text: "Um arquivo de Excel de 500MB travando o PC.", correct: false }
    ]
  },
  {
    id: "Q40",
    tag: "#gambiarra",
    question: "Qual a definição de \"Gambiarra\"?",
    options: [
      { label: "a)", text: "Improviso técnico.", correct: false },
      { label: "b)", text: "Solução temporária.", correct: false },
      { label: "c)", text: "Ajuste Técnico de Alta Complexidade com Recursos Alternativos.", correct: true },
      { label: "d)", text: "Porcaria.", correct: false }
    ]
  },
  {
    id: "Q41",
    tag: "#avo",
    question: "Você precisa explicar para a avó o que você faz. O que diz?",
    options: [
      { label: "a)", text: "Sou engenheiro de software.", correct: false },
      { label: "b)", text: "Crio sites e sistemas.", correct: false },
      { label: "c)", text: "\"Eu conserto o zap zap e a televisão, vó\".", correct: true },
      { label: "d)", text: "Sou um mago digital.", correct: false }
    ]
  },
  {
    id: "Q42",
    tag: "#stakeholder",
    question: "O que é um \"Stakeholder\"?",
    options: [
      { label: "a)", text: "Parte interessada no projeto.", correct: false },
      { label: "b)", text: "Investidor.", correct: false },
      { label: "c)", text: "Aquele que segura o bife (Steak-holder) no churrasco.", correct: true },
      { label: "d)", text: "O chefe chato.", correct: false }
    ]
  },
  {
    id: "Q43",
    tag: "#morningRoutine",
    question: "Qual o protocolo correto para iniciar o dia de trabalho?",
    options: [
      { label: "a)", text: "Ler e-mails.", correct: false },
      { label: "b)", text: "Daily Scrum.", correct: false },
      { label: "c)", text: "Café, olhar para o nada por 30min, questionar escolhas de vida, mais café.", correct: true },
      { label: "d)", text: "Começar a codar imediatamente (Psicopata).", correct: false }
    ]
  },
  {
    id: "Q44",
    tag: "#IoT",
    question: "O que é \"Internet das Coisas\" (IoT)?",
    options: [
      { label: "a)", text: "Dispositivos conectados.", correct: false },
      { label: "b)", text: "Geladeira com Wi-Fi.", correct: false },
      { label: "c)", text: "Quando a enxada tem Bluetooth e o trator tem Spotify.", correct: true },
      { label: "d)", text: "Alexa.", correct: false }
    ]
  },
  {
    id: "Q45",
    tag: "#speed",
    question: "Qual a velocidade máxima da sua internet?",
    options: [
      { label: "a)", text: "500 Mega.", correct: false },
      { label: "b)", text: "1 Giga.", correct: false },
      { label: "c)", text: "Depende se está chovendo ou se o vento mudou a antena de lugar.", correct: true },
      { label: "d)", text: "Discada.", correct: false }
    ]
  },
  {
    id: "Q46",
    tag: "#down",
    question: "O que fazer durante uma queda de produção global?",
    options: [
      { label: "a)", text: "Trabalhar na correção.", correct: false },
      { label: "b)", text: "Comunicar os usuários.", correct: false },
      { label: "c)", text: "Ir para o Twitter ver os memes sobre a queda.", correct: true },
      { label: "d)", text: "Chorar em posição fetal.", correct: false }
    ]
  },
  {
    id: "Q47",
    tag: "#senior",
    question: "Qual o animal mais parecido com um Programador Sênior?",
    options: [
      { label: "a)", text: "Coruja (sábia).", correct: false },
      { label: "b)", text: "Formiga (trabalhadora).", correct: false },
      { label: "c)", text: "O Bicho-Preguiça (se mexe pouco, mas quando mexe é preciso).", correct: true },
      { label: "d)", text: "O Papagaio (só repete código).", correct: false }
    ]
  },
  {
    id: "Q48",
    tag: "#403",
    question: "O que significa \"403 Forbidden\"?",
    options: [
      { label: "a)", text: "Acesso negado.", correct: false },
      { label: "b)", text: "Proibido.", correct: false },
      { label: "c)", text: "Você não pagou o dízimo do servidor.", correct: true },
      { label: "d)", text: "Erro de autenticação.", correct: false }
    ]
  },
  {
    id: "Q49",
    tag: "#vacina",
    question: "Qual a vacina mais importante?",
    options: [
      { label: "a)", text: "Antirrábica.", correct: false },
      { label: "b)", text: "Aftosa.", correct: false },
      { label: "c)", text: "A vacina contra \"Alteração de Escopo no meio do projeto\".", correct: true },
      { label: "d)", text: "Gripe.", correct: false }
    ]
  },
  {
    id: "Q50",
    tag: "#contratar",
    question: "Por que contratar o Rafael?",
    options: [
      { label: "a)", text: "Ele é competente.", correct: false },
      { label: "b)", text: "Ele é esforçado.", correct: false },
      { label: "c)", text: "Porque se não contratar, ele lança uma praga no seu CSS.", correct: true },
      { label: "d)", text: "Porque ele precisa pagar os boletos.", correct: false }
    ]
  }
];

// Elementos
const quizSection = document.getElementById("quiz-estagiario");
if (quizSection) {
  const qText = document.getElementById("quiz-question-text");
  const qOptions = document.getElementById("quiz-options");
  const qId = document.getElementById("quiz-id");
  const qTag = document.getElementById("quiz-tag");
  const qCurrent = document.getElementById("quiz-current");
  const qTotal = document.getElementById("quiz-total");
  const qPrev = document.getElementById("quiz-prev");
  const qNext = document.getElementById("quiz-next");
  const qFinish = document.getElementById("quiz-finish");
  const qMeterFill = document.getElementById("quiz-meter-fill");
  const qOracle = document.getElementById("quiz-oracle-screen");
  const qRage = document.getElementById("quiz-rage-btn");
  const qMemeChip = document.getElementById("quiz-meme-chip");

  const qResultOverlay = document.getElementById("quiz-result-overlay");
  const qResultClose = document.getElementById("quiz-result-close");
  const qResultRank = document.getElementById("quiz-result-rank");
  const qResultText = document.getElementById("quiz-result-text");
  const qBadge1 = document.getElementById("quiz-badge-1");
  const qBadge2 = document.getElementById("quiz-badge-2");
  const qBadge3 = document.getElementById("quiz-badge-3");
  const qRetry = document.getElementById("quiz-retry");

  let currentIndex = 0;
  let answers = {}; // index -> { selected, correct }
  let absurdScore = 0;

  qTotal.textContent = quizData.length.toString();

  const absurdMessages = [
    "Estagiário detectado com alto potencial de caos controlado.",
    "Você claramente domina a arte da Prioridade Duvidosa™.",
    "Seus instintos são perigosamente parecidos com os do Mestre.",
    "Você está a um café de distância de virar pleno da gambiarra.",
    "Sênior não, mas mascote oficial do CPD você já é."
  ];

  const neutralMessages = [
    "Você ainda tenta ser profissional. Isso é suspeito.",
    "Seu coração luta entre a ética e a piada interna.",
    "Você tem jeito de quem ainda acredita em documentação.",
    "Talvez ainda haja salvação. Ou não."
  ];

  const weakMessages = [
    "Você marcou alternativa séria? Aqui não é faculdade.",
    "Se continuar assim, vai acabar respeitando prazo.",
    "Para ser meu estagiário, precisa abraçar o caos.",
    "Sua taxa de absurdo está muito baixa. Tome café e tente de novo."
  ];

  function pushOracleLine(text, type = "muted") {
    if (!qOracle) return;
    const line = document.createElement("div");
    line.className = "quiz-oracle-line " +
      (type === "good" ? "quiz-oracle-good" :
       type === "bad" ? "quiz-oracle-bad" : "quiz-oracle-muted");
    line.textContent = "> " + text;
    qOracle.appendChild(line);
    qOracle.scrollTop = qOracle.scrollHeight;
  }

  function renderQuestion() {
    const data = quizData[currentIndex];
    if (!data) return;

    qId.textContent = data.id;
    qTag.textContent = data.tag;
    qText.textContent = data.question;
    qCurrent.textContent = (currentIndex + 1).toString();

    qOptions.innerHTML = "";

    data.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.dataset.index = idx.toString();
      btn.innerHTML = `
        <span class="quiz-option-label">${opt.label}</span>
        <span class="quiz-option-text">${opt.text}</span>
      `;

      const saved = answers[currentIndex];
      if (saved && saved.selected === idx) {
        btn.classList.add("selected");
        if (saved.correct) btn.classList.add("correct");
        else btn.classList.add("wrong");
      }

      btn.addEventListener("click", () => handleAnswer(idx, opt.correct));
      qOptions.appendChild(btn);
    });

    qPrev.disabled = currentIndex === 0;
    qNext.classList.remove("hidden");
    qFinish.classList.add("hidden");

    if (currentIndex === quizData.length - 1) {
      qNext.classList.add("hidden");
      qFinish.classList.remove("hidden");
    }
  }

  function updateMeter() {
    const total = quizData.length;
    const percent = total ? (absurdScore / total) * 100 : 0;
    qMeterFill.style.width = percent + "%";

    if (percent < 30) {
      qMeterFill.className = "quiz-meter-fill low";
      qMemeChip.textContent = "Status: Muito sério, perigoso.";
    } else if (percent < 70) {
      qMeterFill.className = "quiz-meter-fill mid";
      qMemeChip.textContent = "Status: Semi-digno de estágio.";
    } else {
      qMeterFill.className = "quiz-meter-fill high";
      qMemeChip.textContent = "Status: Digno de ser meu estagiário.";
    }
  }

  function handleAnswer(idx, isCorrect) {
    const already = answers[currentIndex];
    // Se já tinha resposta, ajustar pontuação
    if (already) {
      if (already.correct) absurdScore--;
    }

    answers[currentIndex] = { selected: idx, correct: isCorrect };
    if (isCorrect) absurdScore++;

    // feedback visual
    const buttons = qOptions.querySelectorAll(".quiz-option");
    buttons.forEach((b) => b.classList.remove("selected", "correct", "wrong"));
    buttons.forEach((b) => {
      const bIndex = Number(b.dataset.index || -1);
      if (bIndex === idx) {
        b.classList.add("selected");
        b.classList.add(isCorrect ? "correct" : "wrong");
      }
    });

    updateMeter();

    if (isCorrect) {
      pushOracleLine("Resposta absurdamente correta. Bem-vindo ao caos.", "good");
    } else {
      pushOracleLine("Resposta lógica detectada. Isso aqui não é entrevista tradicional.", "bad");
    }
  }

  function computeResult() {
    const total = quizData.length;
    const percent = total ? (absurdScore / total) * 100 : 0;

    let rank, textPool;
    if (percent < 30) {
      rank = "Estagiário Corporativo Tradicional (Nível Café com Biscoito)";
      textPool = weakMessages;
    } else if (percent < 70) {
      rank = "Semi-Estagiário da Roça (Nível Pônei de Produção)";
      textPool = neutralMessages;
    } else {
      rank = "Fullstack da Roça em Formação (Nível Estagiário Lendário)";
      textPool = absurdMessages;
    }

    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    qResultRank.textContent = rank;
    qResultText.textContent = pick(textPool);
    qBadge1.textContent = percent >= 30 ? "Go Horse Certified" : "Precisa de mais café";
    qBadge2.textContent = percent >= 70 ? "Digno do PANIC BUTTON" : "Ainda lê documentação";
    qBadge3.textContent = "Score absurdo: " + Math.round(percent) + "%";

    qResultOverlay.classList.remove("hidden");
  }

  function resetQuiz() {
    currentIndex = 0;
    answers = {};
    absurdScore = 0;
    qOracle.innerHTML = "";
    pushOracleLine("Quiz resetado. Finja que nada aconteceu.");
    updateMeter();
    renderQuestion();
  }

  // Navegação
  qNext.addEventListener("click", () => {
    if (currentIndex < quizData.length - 1) {
      currentIndex++;
      renderQuestion();
    }
  });

  qPrev.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  });

  qFinish.addEventListener("click", () => {
    computeResult();
  });

  qRage.addEventListener("click", () => {
    pushOracleLine("Rage Quit simulado. Nenhum teclado foi quebrado.", "bad");
    resetQuiz();
  });

  qResultClose.addEventListener("click", () => {
    qResultOverlay.classList.add("hidden");
  });

  qRetry.addEventListener("click", () => {
    qResultOverlay.classList.add("hidden");
    resetQuiz();
  });

  qResultOverlay.addEventListener("click", (e) => {
    if (e.target === qResultOverlay) {
      qResultOverlay.classList.add("hidden");
    }
  });

  // Inicialização
  updateMeter();
  renderQuestion();
  pushOracleLine("Inicializando protocolo de avaliação de estágio...");
}

 
    // --- TABELA PERIÓDICA LOGIC ---
    const periodicContainer = document.getElementById('periodic-grid');
    const inspPreview = document.getElementById('insp-preview');
    const inspData = document.getElementById('insp-data');

    // Inspector Elements
    const inspAtomic = document.getElementById('insp-atomic');
    const inspSymbol = document.getElementById('insp-symbol');
    const inspName = document.getElementById('insp-name');
    const inspCategory = document.getElementById('insp-category');
    const inspDesc = document.getElementById('insp-desc');

    // Data Categories: chaos (Pink), tech (Cyan), agro (Lime), minas (Orange)
    const elementsData = [
        { s: 'Cf', n: 'Café', num: '1', c: 'chaos', d: 'Essencial para vida inteligente. Altamente instável sem açúcar.' },
        { s: 'Gb', n: 'Gambiarra', num: '∞', c: 'chaos', d: 'Elemento de ligação universal. Mantém o universo unido.' },
        { s: 'Ra', n: 'Raiva', num: '66', c: 'chaos', d: 'Combustível principal para resolver bugs complexos.' },
        { s: 'Pg', n: 'Pão de Queijo', num: '31', c: 'minas', d: 'Fonte de energia limpa e renovável de Minas Gerais.' },
        { s: 'Tim', n: 'Timão', num: '1914', c: 'chaos', d: 'Elemento radioativo. Causa euforia extrema ou depressão profunda.' },
        { s: 'Wi', n: 'Wi-Fi', num: '404', c: 'tech', d: 'Elemento gasoso. Em Uberaba, tende a evaporar quando chove.' },
        { s: 'Bz', n: 'Bezerro', num: 'B1', c: 'agro', d: 'Elemento biológico. Emite som em alta frequência às 3 da manhã.' },
        { s: 'Tr', n: 'Trem', num: '31', c: 'minas', d: 'O elemento coringa de MG. Substitui qualquer substantivo do universo.' },
        { s: 'Bg', n: 'Bug', num: '404', c: 'tech', d: 'Onipresente. Reproduz-se assexuadamente no escuro do servidor.' },
        { s: 'Dp', n: 'Deploy', num: '13', c: 'tech', d: 'Altamente explosivo em sextas-feiras. Causa taquicardia.' },
        { s: 'So', n: 'Sono', num: '0', c: 'chaos', d: 'Elemento raro, quase extinto. Encontrado apenas em lendas.' },
        { s: 'Ct', n: 'Ctrl+C/V', num: '2', c: 'chaos', d: 'A base da programação moderna. Sem ele, a civilização colapsa.' },
        { s: 'Bo', n: 'Boleto', num: '-100', c: 'chaos', d: 'Multiplica-se mais rápido que bactéria. Causa choro.' },
        { s: 'Ln', n: 'Linux', num: '127', c: 'tech', d: 'SO do macho alfa da roça. Funciona na base do grito.' },
        { s: 'Ua', n: 'Uai', num: '3', c: 'minas', d: 'Interjeição gasosa. Usada para preencher o silêncio no código.' },
        { s: 'Hp', n: 'Impressora', num: '666', c: 'tech', d: 'Elemento possuído. Cheira o medo do usuário.' },
        { s: 'Nu', n: 'Null', num: 'NaN', c: 'tech', d: 'O vazio existencial do Java. Infarto do código.' },
        { s: 'Ar', n: 'Arame', num: '10', c: 'chaos', d: 'Primo pobre da Gambiarra. Conserta cerca e óculos.' },
        { s: 'Pi', n: 'Pix', num: '100', c: 'tech', d: 'Único elemento capaz de acalmar a fera (Rafael).' },
        { s: 'Gt', n: 'Git', num: '33', c: 'tech', d: 'Viagem no tempo para desfazer besteiras no código.' },
        { s: 'Cn', n: 'Cenoura', num: '4', c: 'agro', d: 'Combustível de reinicialização de equinos (Hard Reset).' },
        { s: 'Nb', n: 'No-Break', num: '5', c: 'tech', d: 'Bateria que dura exatos 12s. Só dá tempo de gritar.' },
        { s: 'Ma', n: 'Mato', num: '4G', c: 'agro', d: 'Bloqueador natural de sinal e chamadas de suporte.' },
        { s: 'Xv', n: 'Xavante', num: '51', c: 'agro', d: 'Estado da matéria que define vaca com cria. Perigo.' },
        { s: 'Cz', n: 'Cafezal', num: '1K', c: 'minas', d: 'Source Code do Café. Local sagrado.' },
        { s: 'Rm', n: 'RAM', num: '8', c: 'tech', d: 'Recurso escasso. O Chrome come tudo.' },
        { s: 'Ft', n: 'Fita', num: '99', c: 'chaos', d: 'Resolve o que o Arame não resolve. Use sem moderação.' },
        { s: 'Dl', n: 'Deadline', num: '-1', c: 'tech', d: 'Elemento pesado. Passa mais rápido quando perto.' },
        { s: 'Sql', n: 'SQL', num: '42', c: 'tech', d: 'Língua antiga. Um erro aqui apaga a empresa.' },
        { s: 'Cu', n: 'Curral', num: '24/7', c: 'agro', d: 'Escritório open-space original. Cheiro forte e lama.' }
    ];

    if (periodicContainer) {
        // Render Elements
        elementsData.forEach(el => {
            const div = document.createElement('div');
            div.className = `element-card cat-${el.c}`;
            div.innerHTML = `
                <span class="atom-num">${el.num}</span>
                <span class="atom-symbol">${el.s}</span>
                <span class="atom-name">${el.n}</span>
            `;
            
            // Interaction
            div.addEventListener('mouseenter', () => updateInspector(el, div));
            div.addEventListener('click', () => updateInspector(el, div));

            periodicContainer.appendChild(div);
        });
    }

    function updateInspector(data, element) {
        // Remove active class from all
        document.querySelectorAll('.element-card').forEach(e => e.style.transform = 'scale(1)');
        
        // Highlight current
        element.style.transform = 'scale(1.15)';

        // Hide Preview, Show Data
        if(inspPreview) inspPreview.classList.add('hidden');
        if(inspPreview) inspPreview.style.display = 'none';
        if(inspData) inspData.classList.remove('hidden');
        if(inspData) inspData.style.display = 'block';

        // Update Text
        if(inspAtomic) inspAtomic.textContent = data.num;
        if(inspSymbol) {
            inspSymbol.textContent = data.s;
            // Set Color based on Category
            const colors = { chaos: '#ff0055', tech: '#00d2ff', agro: '#C5F82A', minas: '#ff9d00' };
            inspSymbol.style.color = colors[data.c];
        }
        if(inspName) inspName.textContent = data.n;
        if(inspDesc) inspDesc.textContent = data.d;
        
        // Format Category Name
        const catNames = { chaos: 'Caos & POG', tech: 'Tecnologia Rural', agro: 'Agropecuária', minas: 'Cultura Mineira' };
        if(inspCategory) {
            inspCategory.textContent = catNames[data.c];
            inspCategory.style.color = 'white';
            inspCategory.style.border = `1px solid ${getComputedStyle(element).color}`;
        }

        // Randomize Stats Bars for "Tech Effect"
        const bars = document.querySelectorAll('.stat-fill');
        bars.forEach(bar => {
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = Math.floor(Math.random() * 60 + 40) + '%';
            }, 50);
        });
    }
  

    // --- HOLY CODE SANCTUARY LOGIC ---
    
    // 1. Setup Candles
    const candlesContainer = document.getElementById('candles-container');
    if (candlesContainer) {
        for(let i = 0; i < 7; i++) {
            const candle = document.createElement('div');
            candle.className = 'candle';
            // Randomly light some initially
            if(Math.random() > 0.4) candle.classList.add('lit');
            
            candle.addEventListener('click', () => {
                candle.classList.toggle('lit');
                // Check easter egg: All lit?
                const allLit = document.querySelectorAll('.candle.lit').length === 7;
                if(allLit) {
                    document.querySelector('.gothic-bg').style.filter = "hue-rotate(90deg)";
                } else {
                    document.querySelector('.gothic-bg').style.filter = "none";
                }
            });
            candlesContainer.appendChild(candle);
        }
    }

    // 2. Prayer Data
    const prayers = {
        salmo404: {
            title: "Salmo 404",
            icon: "🚫",
            text: "Santo Bug que estais no código, Santificada seja a vossa Gambiarra. Venha a nós o vosso Stack Overflow, Seja feita a vossa lógica, Assim no Backend como no Frontend. O café nosso de cada dia nos dai hoje, Perdoai os nossos git push --force, Assim como nós perdoamos o estagiário que deletou o banco. Não nos deixeis cair a internet (especialmente em dia de jogo do Corinthians), Mas livrai-nos do Loop Infinito. Enter."
        },
        avegambiarra: {
            title: "Ave Gambiarra",
            icon: "🛠️",
            text: "Ave Gambiarra, cheia de graça, O improviso está convosco. Bendita sois vós entre os códigos e cercas, E bendito é o fruto do vosso remendo, o Sistema que Roda (por milagre). Santa Fita Isolante, mãe da Engenharia, Rogai por nós, que não lemos a documentação, Agora e na hora do nosso Error 500. Que o arame segure e o Wi-Fi não caia, Amém."
        },
        credo: {
            title: "Credo do Fullstack Rural",
            icon: "☕",
            text: "Creio no Café Todo Poderoso, Criador da Insônia e da Produtividade. E no Stack Overflow, seu único filho, Nosso Senhor, Que foi concebido pelo Google Espírito Santo, Nasceu da necessidade de entregar o prazo. Padeceu sob o poder do Cliente Indeciso, Foi criticado, morto e sepultado na lixeira. Mas ao terceiro dia ressuscitou como Backup. Subiu à Nuvem, Está sentado à direita do Roteador Pai, De onde há de vir a julgar os vivos e os códigos mortos. Creio no Git, Na Santa Igreja Palmeirense, Na comunhão dos Devs, Na remissão dos Bugs, Na ressurreição do Hardware velho, E no Churrasco da vida eterna. Amém."
        },
        novena: {
            title: "Novena do Livramento",
            icon: "🛡️",
            text: "Do NullPointerException em produção, livrai-nos Senhor. Da vaca com parto distócico às 3 da manhã de domingo, livrai-nos Senhor. Do Corinthians ganhando Libertadores e Mundial (risco inexistente, mas oramos), livrai-nos Senhor. Da internet que cai quando começa a chover em Uberaba, livrai-nos Senhor. Do cliente que manda áudio de 5 minutos explicando a cor do botão, livrai-nos Senhor. Do cavalo que morde e do servidor que trava, livrai-nos Senhor. Do café descafeinado e da cerveja quente, livrai-nos Senhor. Pela graça do sudo apt-get update, Assim seja."
        },
        saojorge: {
            title: "Salmo do Verdão",
            icon: "📖💚",
            text: "O Senhor é meu escudo e minha fortaleza; não temerei bug algum que se levante contra mim. Ainda que o código falhe e o servidor caia, confiarei, pois o Senhor firma minhas linhas e endireita meus caminhos. Ele me guia por caminhos verdes, restaura meu sistema e me concede sabedoria para corrigir o erro oculto. Mil cairão ao meu lado, dez mil à minha direita, mas o Verdão permanecerá de pé. Que meu trabalho prospere, que meu código seja limpo, e que no Palestra a vitória seja celebrada. Porque a força vem do Senhor, e a glória também. Amém."
        }
    };

    // 3. Modal Logic
    const prayerCards = document.querySelectorAll('.prayer-card');
    const prayerModal = document.getElementById('prayer-modal');
    const closePrayerBtn = document.getElementById('close-prayer-modal');
    
    const pmTitle = document.getElementById('prayer-modal-title');
    const pmIcon = document.getElementById('prayer-modal-icon');
    const pmText = document.getElementById('prayer-modal-text');
    const btnAmen = document.getElementById('btn-amen');
    const amenFill = document.getElementById('amen-fill');
    
    let typeWriterInterval;

    if (prayerModal && prayerCards.length > 0) {
        prayerCards.forEach(card => {
            card.addEventListener('click', () => {
                const key = card.getAttribute('data-prayer');
                const data = prayers[key];

                if(data) {
                    pmTitle.textContent = data.title;
                    pmIcon.textContent = data.icon;
                    pmText.innerHTML = ''; // Clear previous text
                    btnAmen.classList.remove('ready');
                    btnAmen.textContent = "LENDO...";
                    btnAmen.disabled = true;
                    amenFill.style.width = '0%';
                    
                    prayerModal.classList.add('active');
                    
                    // Start Typewriter effect
                    let i = 0;
                    clearInterval(typeWriterInterval);
                    typeWriterInterval = setInterval(() => {
                        pmText.innerHTML += data.text.charAt(i);
                        i++;
                        
                        // Update progress bar
                        const percent = (i / data.text.length) * 100;
                        amenFill.style.width = `${percent}%`;

                        if (i >= data.text.length) {
                            clearInterval(typeWriterInterval);
                            btnAmen.classList.add('ready');
                            btnAmen.textContent = "DIGITE 'AMÉM' (CONFIRMAR)";
                            btnAmen.disabled = false;
                        }
                    }, 25); // Speed of typing
                }
            });
        });

        // Close functions
        const closePModal = () => {
            prayerModal.classList.remove('active');
            clearInterval(typeWriterInterval);
        };

        closePrayerBtn.addEventListener('click', closePModal);
        prayerModal.addEventListener('click', (e) => {
            if(e.target === prayerModal) closePModal();
        });

        // Amen Button Logic
        btnAmen.addEventListener('click', () => {
            if(!btnAmen.disabled) {
                // Holy Effect
                const originalText = btnAmen.textContent;
                btnAmen.textContent = "GRAÇA ALCANÇADA! 🙏";
                btnAmen.style.backgroundColor = "gold";
                btnAmen.style.color = "black";
                
                // Spawn Confetti or Shine
                const rect = btnAmen.getBoundingClientRect();
                for(let k=0; k<20; k++) {
                    const spark = document.createElement('div');
                    spark.style.position = 'fixed';
                    spark.style.left = (rect.left + rect.width/2) + 'px';
                    spark.style.top = (rect.top + rect.height/2) + 'px';
                    spark.style.width = '10px';
                    spark.style.height = '10px';
                    spark.style.background = Math.random() > 0.5 ? 'gold' : 'white';
                    spark.style.borderRadius = '50%';
                    spark.style.pointerEvents = 'none';
                    spark.style.transition = 'transform 1s, opacity 1s';
                    spark.style.zIndex = 20001;
                    document.body.appendChild(spark);
                    
                    setTimeout(() => {
                        const angle = Math.random() * 360;
                        const dist = 100 + Math.random() * 100;
                        spark.style.transform = `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px)`;
                        spark.style.opacity = 0;
                    }, 10);
                    
                    setTimeout(() => spark.remove(), 1000);
                }

                setTimeout(() => {
                    closePModal();
                }, 1500);
            }
        });
    }


    // --- ANATOMIA COMPARADA LOGIC ---
    const anatomyData = {
        core: [
            { id: 1, bioName: 'Cérebro', techName: 'CPU', bioIcon: '🧠', techIcon: '💻', bioDesc: 'Processa capim, calcula a distância do cocho e decide onde pisar.', techDesc: 'Processa dados, calcula o prejuízo e decide onde travar o Windows.' },
            { id: 2, bioName: 'Coração', techName: 'Kernel', bioIcon: '❤️', techIcon: '⚙️', bioDesc: 'Bombeia sangue e mantém a vida. Bate mais forte quando vê ração.', techDesc: 'Gerencia os recursos. Entra em pânico (Kernel Panic) se for pressionado demais.' },
            { id: 3, bioName: 'Estômago (Rúmen)', techName: 'Banco de Dados', bioIcon: '🥩', techIcon: '🗄️', bioDesc: 'Armazena comida, fermenta e devolve para mastigar de novo. Capacidade gigante.', techDesc: 'Armazena lixo, fragmenta dados e devolve erro de sintaxe. Capacidade cara (Oracle).' }
        ],
        defense: [
            { id: 4, bioName: 'Casco', techName: 'Firewall', bioIcon: '🦶', techIcon: '🧱', bioDesc: 'Protege contra espinhos, pedras e lama. Duro de quebrar.', techDesc: 'Protege contra hackers russos. Geralmente mal configurado e cheio de furos.' },
            { id: 5, bioName: 'Couro', techName: 'Frontend (UI)', bioIcon: '🐄', techIcon: '🎨', bioDesc: 'A parte que todo mundo vê e acha bonita. Protege o interior sangrento.', techDesc: 'A interface bonitinha feita em React. Esconde a gambiarra monstruosa do Backend.' },
            { id: 6, bioName: 'Chifre', techName: 'Antivírus', bioIcon: '🤘', techIcon: '🛡️', bioDesc: 'Arma de defesa letal. Às vezes machuca o próprio dono.', techDesc: 'Promete proteger, mas consome 90% da memória e deixa tudo lento.' },
            { id: 7, bioName: 'Esqueleto', techName: 'Framework', bioIcon: '🦴', techIcon: '🏗️', bioDesc: 'Sustenta todo o peso do animal. Se quebrar um osso, a vaca não levanta.', techDesc: 'A estrutura base (Angular/Django). Se atualizar a versão, quebra o sistema inteiro.' }
        ],
        io: [
            { id: 8, bioName: 'Boca', techName: 'Teclado (Input)', bioIcon: '👄', techIcon: '⌨️', bioDesc: 'Entrada constante de matéria-prima (capim) e água. Não para nunca.', techDesc: 'Entrada de dados sujos feita pelo usuário. Geralmente contém farelo de pão de queijo.' },
            { id: 9, bioName: 'Leite', techName: 'Deploy (Output)', bioIcon: '🥛', techIcon: '🚀', bioDesc: 'O produto final, branquinho, nutritivo e que gera lucro.', techDesc: 'O software em produção. Às vezes sai azedo ou coalhado.' },
            { id: 10, bioName: 'Esterco', techName: 'Logs de Erro', bioIcon: '💩', techIcon: '📜', bioDesc: 'Subproduto inevitável. Cheira mal, mas serve para adubar o pasto.', techDesc: 'O registro de tudo que deu errado. Ninguém gosta de mexer, mas é necessário analisar.' },
            { id: 11, bioName: 'Mugido', techName: 'Notificação Push', bioIcon: '📢', techIcon: '🔔', bioDesc: 'Alerta sonoro de alta decibéis: "FOME", "SEDE" ou "MEDO".', techDesc: 'Alerta irritante no celular: "Servidor Caiu", "Disco Cheio" ou "Promoção da Shopee".' }
        ],
        extra: [
            { id: 12, bioName: 'Rabo', techName: 'CSS', bioIcon: '➰', techIcon: '💅', bioDesc: 'Serve para espantar moscas e dar equilíbrio estético. Balança para todo lado.', techDesc: 'Serve para deixar bonito, mas na maioria das vezes só atrapalha, fica sujo e difícil de limpar.' },
            { id: 13, bioName: 'Olhos', techName: 'Observability', bioIcon: '👀', techIcon: '📊', bioDesc: 'Visão panorâmica para detectar predadores (onças).', techDesc: 'Grafana e Zabbix. Serve para ver o gráfico ficando vermelho antes de tudo explodir.' },
            { id: 14, bioName: 'Orelhas', techName: 'Listeners', bioIcon: '👂', techIcon: '🎧', bioDesc: 'Giram 180 graus para ouvir o barulho do saco de ração abrindo a 1km.', techDesc: 'Ficam escutando o clique do mouse. Às vezes ignoram o usuário de propósito.' },
            { id: 15, bioName: 'Ruminação', techName: 'Caching', bioIcon: '🔄', techIcon: '⚡', bioDesc: 'Mastigar a mesma comida várias vezes para facilitar a digestão.', techDesc: 'Guardar a mesma informação na memória para não ter que buscar no banco de novo.' }
        ],
        eco: [
            { id: 16, bioName: 'Bezerro', techName: 'Estagiário', bioIcon: '👶', techIcon: '🎓', bioDesc: 'Fofo, corre sem direção, bebe todo o leite e grita o dia todo.', techDesc: 'Cheio de vontade, mas quebra a produção na primeira semana. Precisa de supervisão constante.' },
            { id: 17, bioName: 'Carrapato', techName: 'Technical Debt', bioIcon: '🕷️', techIcon: '📉', bioDesc: 'Parasita que suga a energia vital e transmite doença. Precisa de veneno.', techDesc: 'Código ruim acumulado que deixa o sistema lento e doente. Precisa de refatoração (veneno).' },
            { id: 18, bioName: 'Pasto', techName: 'Cloud (Nuvem)', bioIcon: '🌱', techIcon: '☁️', bioDesc: 'Onde a mágica acontece. Se o pasto for ruim, a vaca emagrece.', techDesc: 'Onde o sistema roda. Cobra por hora e fica mais caro se chover (tráfego alto).' },
            { id: 19, bioName: 'Coice', techName: 'Exception Fatal', bioIcon: '🐎', techIcon: '❌', bioDesc: 'Reação defensiva rápida e dolorosa. Te manda para o hospital.', techDesc: 'Erro não tratado que fecha o programa na cara do usuário e te manda para o RH.' },
            { id: 20, bioName: 'Mosca', techName: 'Pop-up', bioIcon: '🪰', techIcon: '💬', bioDesc: 'Inseto irritante que fica rondando a cabeça.', techDesc: 'Janela de "Assine nossa Newsletter" que não tem botão de fechar.' }
        ]
    };

    const anatomyList = document.getElementById('anatomy-list');
    const anatomyTabs = document.querySelectorAll('.anatomy-tab');
    
    // Display Elements
    const bioIcon = document.getElementById('bio-icon');
    const bioTitle = document.getElementById('bio-title');
    const bioDesc = document.getElementById('bio-desc');
    const techIcon = document.getElementById('tech-icon');
    const techTitle = document.getElementById('tech-title');
    const techDesc = document.getElementById('tech-desc');
    
    let currentSys = 'core';

    function renderAnatomyList(sys) {
        if(!anatomyList) return;
        anatomyList.innerHTML = '';
        const items = anatomyData[sys];
        
        items.forEach((item, index) => {
            const btn = document.createElement('button');
            btn.className = 'anatomy-item-btn';
            if(index === 0) btn.classList.add('active'); // Select first by default
            btn.innerHTML = `${item.bioName} <small style="opacity:0.5">vs</small> ${item.techName}`;
            
            btn.addEventListener('click', () => {
                // Update active state
                document.querySelectorAll('.anatomy-item-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update Content with Animation
                updateAnatomyDisplay(item);
            });
            
            anatomyList.appendChild(btn);
        });

        // Load first item immediately
        if(items.length > 0) updateAnatomyDisplay(items[0]);
    }

    function updateAnatomyDisplay(item) {
        // Reset animation
        const sideContents = document.querySelectorAll('.side-content');
        sideContents.forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; /* trigger reflow */
            el.style.animation = 'fadeInScale 0.5s ease-out';
        });

        // Update Text
        bioIcon.textContent = item.bioIcon;
        bioTitle.textContent = item.bioName;
        bioDesc.textContent = item.bioDesc;

        techIcon.textContent = item.techIcon;
        techTitle.textContent = item.techName;
        techDesc.textContent = item.techDesc;
    }

    if(anatomyList) {
        // Init
        renderAnatomyList(currentSys);

        // Tab Logic
        anatomyTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                anatomyTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentSys = tab.getAttribute('data-sys');
                renderAnatomyList(currentSys);
            });
        });
    }

    // Coordinates Randomizer in Footer
    const coordsEl = document.getElementById('scanner-coords');
    if(coordsEl) {
        setInterval(() => {
            const lat = (Math.random() * 180 - 90).toFixed(3);
            const lng = (Math.random() * 360 - 180).toFixed(3);
            coordsEl.textContent = `COORDS: ${lat}, ${lng}`;
        }, 2000);
    }



    /* --- LÓGICA DO SISTEMA DE CONQUISTAS --- */
    
    // Dados das Conquistas
    const achievementsData = [
        { id: 1, icon: "🏅", title: "Sobrevivente do Java", desc: "Programou em Java sem vender a alma.", cat: "dev", rarity: "comum", xp: 100 },
        { id: 2, icon: "🚑", title: "SAMU de TI", desc: "Ressuscitou um PC que já tinha sido dado como morto pela família.", cat: "tech", rarity: "raro", xp: 250 },
        { id: 3, icon: "🤠", title: "Cowboy do Teclado", desc: "Digitou 100 palavras por minuto usando luvas de couro.", cat: "agro", rarity: "lendario", xp: 500 },
        { id: 4, icon: "☕", title: "Sangue Preto", desc: "Bebeu 2 litros de café em um único dia e não teve taquicardia.", cat: "chaos", rarity: "comum", xp: 50 },
        { id: 5, icon: "⚽", title: "Sofredor Premium", desc: "Assistiu a todos os jogos do Palmeiras na Série B sem chorar (muito).", cat: "chaos", rarity: "raro", xp: 300 },
        { id: 6, icon: "🔌", title: "Eletricista de Risco", desc: "Tomou choque na cerca elétrica e no gabinete do PC no mesmo dia.", cat: "chaos", rarity: "comum", xp: 150 },
        { id: 7, icon: "🗣️", title: "Poliglota Bizarro", desc: "Fala Português, Inglês Técnico, C++ e Mugido.", cat: "adm", rarity: "lendario", xp: 400 },
        { id: 8, icon: "🚫", title: "Inimigo do Design", desc: "Fez um site inteiro usando apenas Times New Roman e Comic Sans.", cat: "dev", rarity: "gambiarra", xp: 200 },
        { id: 9, icon: "🛡️", title: "Firewall de Casco", desc: "Levou um coice de vaca, mas o celular no bolso sobreviveu.", cat: "adm", rarity: "lendario", xp: 600 },
        { id: 10, icon: "💻", title: "Terminal Root", desc: "Instalou o Arch Linux no modo Hardcore e saiu do Vim de primeira.", cat: "dev", rarity: "raro", xp: 350 },
        { id: 11, icon: "🪱", title: "Caçador de Vermes", desc: "Debugou código sujo e tratou bezerro com verme no mesmo dia.", cat: "adm", rarity: "comum", xp: 120 },
        { id: 12, icon: "👑", title: "Rei do DELETE", desc: "Deu um DELETE FROM sem WHERE e restaurou o banco em 5 minutos.", cat: "dev", rarity: "lendario", xp: 800 },
        { id: 13, icon: "🐘", title: "Memória RAM: 4KB", desc: "Rodou container Docker em máquina de 4GB sem travar.", cat: "dev", rarity: "raro", xp: 300 },
        { id: 14, icon: "🧀", title: "Pagamento em Arrobas", desc: "Aceitou gado ou queijo Minas como pagamento de consultoria.", cat: "agro", rarity: "comum", xp: 100 },
        { id: 15, icon: "🔪", title: "Sênior em Sutura", desc: "Costurou cabo de rede (RJ-45) com linha cirúrgica.", cat: "tech", rarity: "gambiarra", xp: 450 },
        { id: 16, icon: "🌡️", title: "Sobrevivente do Sol", desc: "Codou no curral, 40°C, e o notebook não derreteu.", cat: "agro", rarity: "raro", xp: 200 },
        { id: 17, icon: "☕", title: "Motor Bi-Turbo", desc: "5 litros de café, 4 horas de sono, 1 semana.", cat: "chaos", rarity: "lendario", xp: 1000 },
        { id: 18, icon: "🐍", title: "Encantador de Python", desc: "Script em Python rodou de primeira sem erro de indentação.", cat: "dev", rarity: "raro", xp: 300 },
        { id: 19, icon: "🔨", title: "Martelo de Thor", desc: "Consertou hardware complexo na base da pancada.", cat: "tech", rarity: "gambiarra", xp: 150 },
        { id: 20, icon: "🧭", title: "Localhost Mestre", desc: "Explicou o que é localhost:3000 para a mãe com sucesso.", cat: "dev", rarity: "lendario", xp: 5000 },
        { id: 21, icon: "💩", title: "Limpeza de Logs", desc: "Limpou logs do server e curral no mesmo dia. O cheiro é igual.", cat: "adm", rarity: "comum", xp: 100 },
        { id: 22, icon: "🗺️", title: "Guia de Uberaba", desc: "Deploy via Wi-Fi de orelhão na praça.", cat: "chaos", rarity: "gambiarra", xp: 250 },
        { id: 23, icon: "🐐", title: "Go Horse Pro", desc: "Entregou no prazo na força do ódio e XGH.", cat: "dev", rarity: "comum", xp: 100 },
        { id: 24, icon: "🤯", title: "Zero Documentação", desc: "Entendeu código legado sem comentários e sem chorar.", cat: "dev", rarity: "lendario", xp: 700 },
        { id: 25, icon: "🐛", title: "Extinção de Pragas", desc: "Matou carrapato no gado e vírus no PC da tia.", cat: "adm", rarity: "raro", xp: 300 },
        { id: 26, icon: "⏳", title: "Prazo é Sugestão", desc: "Projeto de 6 meses entregue em 6 dias.", cat: "chaos", rarity: "lendario", xp: 900 },
        { id: 27, icon: "🎤", title: "Orador de Bovinos", desc: "Convenceu touro bravo com lógica booleana.", cat: "agro", rarity: "raro", xp: 400 },
        { id: 28, icon: "🧱", title: "Design Brutalista", desc: "Site feio intencional chamado de 'minimalista'.", cat: "dev", rarity: "comum", xp: 50 },
        { id: 29, icon: "🚀", title: "Deploy de Gêmeos", desc: "Parto de bezerros gêmeos e deploy em produção simultâneos.", cat: "adm", rarity: "lendario", xp: 2000 },
        { id: 30, icon: "🧲", title: "Atração de Erros", desc: "Abriu o console e o erro apareceu por magnetismo.", cat: "chaos", rarity: "comum", xp: 10 },
        { id: 31, icon: "💧", title: "Frieza Cirúrgica", desc: "Calmo durante cirurgia e erro 500.", cat: "adm", rarity: "raro", xp: 500 },
        { id: 32, icon: "🎶", title: "Rádio Caipira On", desc: "8 horas codando ouvindo Tião Carreiro.", cat: "agro", rarity: "comum", xp: 100 },
        { id: 33, icon: "🥇", title: "Sócio Fundador", desc: "Promovido a sócio após consertar PC e cachorro do chefe.", cat: "tech", rarity: "lendario", xp: 1500 },
        { id: 34, icon: "🍻", title: "Debug de Boteco", desc: "Achou bug crítico após 4 cervejas.", cat: "chaos", rarity: "gambiarra", xp: 420 }
    ];

    const achGrid = document.getElementById('achievements-grid');
    const totalScoreEl = document.getElementById('total-gamerscore');
    const xpFill = document.getElementById('xp-fill');
    const xpText = document.getElementById('xp-text');
    const achModal = document.getElementById('ach-modal');
    const achCloseBtn = document.querySelector('.ach-modal-close');
    
    // Filtros
    const filters = document.querySelectorAll('.ach-filter');

    let currentXP = 0;
    const maxXP = 20000; // XP para nível Divindade

    function renderAchievements(filter = 'all') {
        if(!achGrid) return;
        achGrid.innerHTML = '';
        
        let filteredData = achievementsData;
        if(filter !== 'all') {
            // Mapeamento simples de categorias para filtro
            if(filter === 'dev') filteredData = achievementsData.filter(a => a.cat === 'dev' || a.cat === 'tech');
            if(filter === 'adm') filteredData = achievementsData.filter(a => a.cat === 'adm' || a.cat === 'agro');
            if(filter === 'chaos') filteredData = achievementsData.filter(a => a.cat === 'chaos');
        }

        filteredData.forEach((ach, index) => {
            const card = document.createElement('div');
            card.className = 'ach-card locked'; // Começa bloqueado visualmente para animação
            card.dataset.rarity = ach.rarity;
            card.innerHTML = `
                <div class="ach-icon">${ach.icon}</div>
                <div class="ach-title">${ach.title}</div>
            `;
            
            // Interaction
            card.addEventListener('click', () => openAchModal(ach));
            
            // Animation Delay sequential
            setTimeout(() => {
                card.classList.remove('locked');
                card.classList.add('unlocked');
            }, index * 50);

            achGrid.appendChild(card);
        });
    }

    function calculateTotalScore() {
        let score = 0;
        achievementsData.forEach(ach => score += ach.xp);
        
        // Animation numbers
        let current = 0;
        const interval = setInterval(() => {
            current += 50;
            if(current >= score) {
                current = score;
                clearInterval(interval);
            }
            if(totalScoreEl) totalScoreEl.innerText = current.toLocaleString();
            
            // Update XP Bar
            const percent = Math.min((current / maxXP) * 100, 100);
            if(xpFill) xpFill.style.width = `${percent}%`;
            if(xpText) xpText.innerText = `${current} / ${maxXP}`;
        }, 10);
    }

    function openAchModal(ach) {
        if(!achModal) return;
        
        // Populate Modal
        document.getElementById('modal-ach-icon').innerText = ach.icon;
        document.getElementById('modal-ach-title').innerText = ach.title;
        document.getElementById('modal-ach-desc').innerText = ach.desc;
        document.getElementById('modal-ach-xp').innerText = `+${ach.xp} XP`;
        document.getElementById('modal-ach-date').innerText = new Date().toLocaleDateString('pt-BR');
        
        const rarityEl = document.getElementById('modal-ach-rarity');
        rarityEl.innerText = ach.rarity;
        
        // Colorir badge de raridade
        rarityEl.style.backgroundColor = 
            ach.rarity === 'lendario' ? 'var(--gold)' : 
            ach.rarity === 'raro' ? '#C0C0C0' : 
            ach.rarity === 'gambiarra' ? '#9D00FF' : '#CD7F32';
        
        achModal.classList.add('active');
    }

    // Event Listeners
    if(achCloseBtn) {
        achCloseBtn.addEventListener('click', () => {
            achModal.classList.remove('active');
        });
    }

    if(achModal) {
        achModal.addEventListener('click', (e) => {
            if(e.target === achModal) achModal.classList.remove('active');
        });
    }

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderAchievements(btn.dataset.filter);
        });
    });

    // Observer para iniciar animação quando visível
    const achievementsSection = document.getElementById('achievements');
    if(achievementsSection) {
        const observerAch = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    renderAchievements(); // Renderiza e anima
                    calculateTotalScore(); // Inicia contagem de XP
                    observerAch.disconnect(); // Só faz uma vez
                }
            });
        }, { threshold: 0.1 });
        
        observerAch.observe(achievementsSection);
    }

    
    /* --- CERTIFICATE GENERATOR LOGIC --- */
    const certSection = document.getElementById('certificate-generator');
    
    if (certSection) {
        const nameInput = document.getElementById('user-name-input');
        const generateBtn = document.getElementById('generate-cert-btn');
        const certDisplay = document.getElementById('certificate-display');
        const certNameDisplay = document.getElementById('cert-name-display');
        const certDateDisplay = document.getElementById('cert-date');
        const btnText = generateBtn.querySelector('.btn-text');
        const stamp = document.querySelector('.verdict-stamp');
        
        const closeCertBtn = document.getElementById('close-cert-btn');
        const printCertBtn = document.getElementById('print-cert-btn');

        // Sounds (simulated visual feedback mostly, but structure is here)
        
        generateBtn.addEventListener('click', () => {
            const userName = nameInput.value.trim();
            
            if (userName === "") {
                nameInput.style.borderColor = "var(--danger)";
                nameInput.placeholder = "DIGITE UM NOME VÁLIDO!";
                setTimeout(() => {
                    nameInput.style.borderColor = "#555";
                    nameInput.placeholder = "Digite seu Nome Completo...";
                }, 2000);
                return;
            }

            // Start Processing Animation
            generateBtn.disabled = true;
            btnText.textContent = "PROCESSANDO DADOS...";
            nameInput.disabled = true;

            // Fake processing steps
            let steps = ["Consultando Serasa...", "Analisando Commit History...", "Verificando Vacinação...", "Gerando PDF Mental..."];
            let stepIndex = 0;
            
            const interval = setInterval(() => {
                if(stepIndex < steps.length) {
                    btnText.textContent = steps[stepIndex];
                    stepIndex++;
                }
            }, 500);

            setTimeout(() => {
                clearInterval(interval);
                
                // Set Data
                certNameDisplay.textContent = userName;
                const now = new Date();
                certDateDisplay.textContent = now.toLocaleDateString('pt-BR');

                // Reveal Certificate
                certDisplay.classList.remove('hidden');
                btnText.textContent = "EMITIR DECRETO";
                generateBtn.disabled = false;
                nameInput.disabled = false;
                nameInput.value = ""; // Clear input

                // Scroll to certificate
                certDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Stamp Animation Trigger
                setTimeout(() => {
                    stamp.style.transform = "scale(3) rotate(-5deg)";
                    stamp.style.opacity = "0";
                    
                    requestAnimationFrame(() => {
                        stamp.classList.add('stamped');
                    });
                }, 500);

            }, 2500); // 2.5s simulated delay
        });

        // Close/Reset
        closeCertBtn.addEventListener('click', () => {
            certDisplay.classList.add('hidden');
            stamp.classList.remove('stamped');
            // Reset scale for next animation
            stamp.style.transform = "rotate(-5deg)"; 
            document.querySelector('.cert-interface').scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        // Print
        printCertBtn.addEventListener('click', () => {
            window.print();
        });
    }
    
        // --- TEOREMA DA PRODUTIVIDADE LOGIC ---
    const theoremsData = {
        pog: {
            title: "Fórmula da P.O.G.",
            latex: `<span class="math-var">Durabilidade</span> <span class="math-op">=</span> <div class="math-frac"><span class="math-num"><span class="math-var">Ódio</span> <span class="math-op">&middot;</span> <span class="math-var">FitaIsolante</span></span><span class="math-den"><span class="math-const">Prazo</span></span></div>`,
            desc: "Define quanto tempo uma gambiarra dura antes de explodir. Se o prazo tende a zero, a durabilidade tende ao infinito.",
            vars: [
                { s: "Ódio", d: "Energia motivacional do dev/adm." },
                { s: "FitaIsolante", d: "Material de ligação universal." },
                { s: "Prazo", d: "Tempo disponível (geralmente 'pra ontem')." }
            ]
        },
        latency: {
            title: "Lei de Latência",
            latex: `<span class="math-var">&lambda;</span> <span class="math-op">=</span> <div class="math-frac"><span class="math-num"><span class="math-text">Distância</span><span class="math-sub">Antena</span></span><span class="math-den"><span class="math-var">Chuva</span><span class="math-sup">2</span></span></div>`,
            desc: "Calcula o ping da internet na roça. A chuva é o fator crítico quadrático: garoa leve já derruba o sinal.",
            vars: [
                { s: "&lambda;", d: "Latência (Lag)." },
                { s: "Chuva", d: "Intensidade pluviométrica em Uberaba." }
            ]
        },
        caffeine: {
            title: "Fator Cafeína",
            latex: `<span class="math-var">Produtividade</span> <span class="math-op">=</span> <span class="math-var">Café</span> <span class="math-op">-</span> <span class="math-const">Sono</span><span class="math-sup">3</span>`,
            desc: "A produtividade só é positiva se a ingestão de café superar o cubo do sono acumulado.",
            vars: [
                { s: "Café", d: "Litros ingeridos por hora." },
                { s: "Sono", d: "Horas não dormidas." }
            ]
        },
        dosage: {
            title: "Dosagem Híbrida",
            latex: `<span class="math-var">D</span><span class="math-sub">hibr</span> <span class="math-op">=</span> <span class="math-var">Peso</span> <span class="math-op">&middot;</span> <span class="math-parens">(</span><span class="math-text">Cálculo</span><span class="math-sub">Adm</span> <span class="math-op">+</span> <span class="math-text">Cálculo</span><span class="math-sub">Dev</span><span class="math-parens">)</span>`,
            desc: "Cálculo complexo para saber quanto remédio dar ao bicho ou quanto café dar ao programador.",
            vars: [
                { s: "CálculoDev", d: "ln(Stress) * (Café / Hora)." },
                { s: "Peso", d: "Peso do paciente (ou do ego do dev)." }
            ]
        },
        ram: {
            title: "Saturação de RAM",
            latex: `<span class="math-var">RAM</span><span class="math-sub">ex</span> <span class="math-op">=</span> <span class="math-var">Tabs</span> <span class="math-op">&middot;</span> <span class="math-parens">(</span><span class="math-var">C</span><span class="math-sub">adm</span> <span class="math-op">+</span> <span class="math-var">C</span><span class="math-sub">dev</span><span class="math-parens">)</span> <span class="math-op">+</span> <span class="math-const">Chrome</span>`,
            desc: "A memória exigida é a soma das abas de anatomia bovina e Stack Overflow, mais o consumo base infinito do Chrome.",
            vars: [
                { s: "Tabs", d: "Número de abas abertas (>100)." },
                { s: "C_adm", d: "Complexidade De Administrador." },
                { s: "Chrome", d: "Constante de devoração de memória." }
            ]
        },
        palmeiras: {
            title: "Paradoxo Palmeirense",
            latex: `<span class="math-var">H</span><span class="math-sub">fan</span><span class="math-parens">(t)</span> <span class="math-op">=</span> <div class="math-int-wrap"><span class="math-int-sym">&int;</span><div class="math-limits"><span>t</span><span>0</span></div></div> <div class="math-frac"><span class="math-num">1</span><span class="math-den"><span class="math-op">cos</span>(<span class="math-var">GolsPerdidos</span>) <span class="math-op">-</span> <span class="math-var">P</span><span class="math-sub">time</span></span></div> <span class="math-text">dt</span>`,
            desc: "A felicidade do torcedor é incalculável e tende ao infinito quanto maior o sofrimento da partida.",
            vars: [
                { s: "H_fan", d: "Nível de Felicidade/Sofrimento." },
                { s: "P_time", d: "Performance do time (quase sempre positiva)." }
            ]
        },
        kick: {
            title: "Teoria do Coice",
            latex: `<span class="math-var">P</span><span class="math-parens">(Coice)</span> <span class="math-op">=</span> <div class="math-frac"><span class="math-num"><span class="math-var">Perigo</span> <span class="math-op">+</span> <span class="math-var">Risco</span></span><span class="math-den"><span class="math-const">e</span><span class="math-sup"><span class="math-var">Exp</span><span class="math-sub">mestre</span></span></span></div>`,
            desc: "A probabilidade de levar um coice decai exponencialmente conforme a experiência do Mestre aumenta.",
            vars: [
                { s: "e", d: "Constante de Euler (ou de Esquiva)." },
                { s: "Exp", d: "Anos de lida no campo." }
            ]
        },
        time: {
            title: "Conversão Temporal",
            latex: `1 <span class="math-text">Min</span><span class="math-sub">mestre</span> <span class="math-op">=</span> 5 <span class="math-text">Min</span><span class="math-sub">reais</span> <span class="math-op">+</span> <span class="math-var">Delay</span><span class="math-sub">cliente</span>`,
            desc: "Relatividade aplicada: 1 minuto do Rafael vale por 5 minutos normais, mais o tempo perdido no telefone.",
            vars: [
                { s: "Delay", d: "Tempo ouvindo áudio de cliente." }
            ]
        },
        csat: {
            title: "CSAT Inverso",
            latex: `<span class="math-var">CSAT</span><span class="math-sub">inv</span> <span class="math-op">=</span> <div class="math-frac"><span class="math-num"><span class="math-var">Horas</span><span class="math-sub">sol</span></span><span class="math-den"><span class="math-parens">(</span><span class="math-var">Call</span><span class="math-sub">depois</span> <span class="math-op">+</span> <span class="math-var">Call</span><span class="math-sub">durante</span><span class="math-parens">)</span><span class="math-sup">2</span></span></div>`,
            desc: "A satisfação é inversamente proporcional ao quadrado do número de ligações recebidas. O silêncio é ouro.",
            vars: [
                { s: "Call", d: "Chamadas de suporte." },
                { s: "Horas_sol", d: "Horas de solução técnica." }
            ]
        },
        trash: {
            title: "Acúmulo de Lixo",
            latex: `<span class="math-var">L</span><span class="math-sub">total</span> <span class="math-op">=</span> <div class="math-int-wrap"><span class="math-int-sym">&int;</span></div> (<span class="math-text">Debug</span> <span class="math-op">+</span> <span class="math-text">Esterco</span>) <span class="math-text">dt</span> <span class="math-op">&middot;</span> <span class="math-var">Café</span>`,
            desc: "A entropia do sistema (logs de erro e esterco físico) cresce conforme o tempo e o consumo de café.",
            vars: [
                { s: "L_total", d: "Volume total de sujeira." }
            ]
        },
        rush: {
            title: "Fator Pressa",
            latex: `<span class="math-var">F</span><span class="math-sub">pressa</span> <span class="math-op">=</span> <div class="math-frac"><span class="math-num"><span class="math-var">Urgência</span> <span class="math-op">&middot;</span> <span class="math-var">Preço</span><span class="math-sub">baixo</span></span><span class="math-den"><span class="math-const">Qualidade</span> <span class="math-op">+</span> <span class="math-const">Prazo</span></span></div>`,
            desc: "Se a urgência é alta e o preço é baixo, a qualidade tende a zero e o caos ao infinito.",
            vars: [
                { s: "Urgência", d: "Nível de grito do cliente." }
            ]
        },
        grooming: {
            title: "Teorema da Tosa",
            latex: `<span class="math-var">O</span><span class="math-sub">tosa</span> <span class="math-op">=</span> <div class="math-frac"><span class="math-num"><span class="math-text">CSS</span></span><span class="math-den"><span class="math-var">Tempo</span> <span class="math-op">+</span> <span class="math-var">Desespero</span></span></div> <span class="math-op">+</span> <span class="math-const">Poodle</span>`,
            desc: "Centralizar uma div no CSS é tão difícil e estressante quanto tosar um Poodle bravo.",
            vars: [
                { s: "O_tosa", d: "Otimização visual." },
                { s: "Poodle", d: "Constante de caos capilar." }
            ]
        },
        feedback: {
            title: "Inversão de Feedback",
            latex: `<span class="math-var">V</span><span class="math-sub">final</span> <span class="math-op">=</span> <div class="math-frac"><span class="math-num"><span class="math-var">Bug</span><span class="math-sub">real</span></span><span class="math-den"><span class="math-text">Cliente</span><span class="math-sub">feliz</span></span></div>`,
            desc: "A verdade é inversamente proporcional ao que o cliente diz. Se ele diz 'tá ótimo', o bug é crítico.",
            vars: [
                { s: "V_final", d: "Estado real do sistema." }
            ]
        },
        recycling: {
            title: "Fator Reciclagem",
            latex: `<span class="math-var">R</span><span class="math-sub">func</span> <span class="math-op">=</span> <div class="math-frac"><span class="math-num"><span class="math-text">Idade</span> <span class="math-op">&middot;</span> <span class="math-var">Fita</span></span><span class="math-den"><span class="math-const">e</span><span class="math-sup"><span class="math-text">Martelo</span></span></span></div>`,
            desc: "Hardware velho volta a funcionar se a quantidade de fita crepe superar o logaritmo de pancadas de martelo.",
            vars: [
                { s: "Martelo", d: "Técnica de percussão corretiva." }
            ]
        }
    };

    const mathBoard = document.getElementById('math-board');
    const thmTitle = document.getElementById('thm-title');
    const thmDesc = document.getElementById('thm-desc');
    const thmVars = document.getElementById('thm-vars');
    const thmBtns = document.querySelectorAll('.thm-btn');

    function renderTheorem(id) {
        const data = theoremsData[id];
        if(!data || !mathBoard) return;

        // UI Feedback on Board
        mathBoard.innerHTML = '';
        mathBoard.style.opacity = '0.5';
        
        // Simulate "Writing" time
        setTimeout(() => {
            // Set Content
            mathBoard.innerHTML = `<div class="math-equation">${data.latex}</div>`;
            mathBoard.style.opacity = '1';
            
            // Set Info Panel
            thmTitle.textContent = data.title;
            thmDesc.textContent = data.desc;
            
            // Build Variables Legend
            thmVars.innerHTML = '';
            if(data.vars) {
                data.vars.forEach(v => {
                    const div = document.createElement('div');
                    div.className = 'var-item';
                    div.innerHTML = `<span class="var-symbol">${v.s}</span><span class="var-def">= ${v.d}</span>`;
                    thmVars.appendChild(div);
                });
            }

            // Animate Equation
            const eq = mathBoard.querySelector('.math-equation');
            if(eq) eq.style.animation = 'drawIn 0.5s cubic-bezier(0.22, 1, 0.36, 1)';

        }, 200);
    }

    if(thmBtns.length > 0) {
        thmBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class
                thmBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Render
                renderTheorem(btn.dataset.id);
            });
        });

        // Init with first one (POG)
        renderTheorem('pog');
    }


document.addEventListener('DOMContentLoaded', () => {
    /* --- AUDITORIA DE CAOS LOGIC --- */
    
    const auditData = [
        { task: "Parto de Bezerro Gêmeo (Distócico)", effort: "4 Horas & 1 Biscoito Maizena", pay: "Leite Fresco (20L)", roi: 850, cat: "adm" },
        { task: "Debug em Código Legado (4 anos)", effort: "36 Horas & 5 Litros de Café", pay: "R$ 350,00", roi: -300, cat: "dev" },
        { task: "Migrar DB em Servidor Apache/PHP 5", effort: "18 Horas & 2 Analgésicos", pay: "1 Pão de Queijo + Tapinha", roi: -999, cat: "dev" },
        { task: "Remendar Cerca Elétrica", effort: "1 Hora & 1 Oração a São Jorge", pay: "Silêncio dos Bois", roi: 150, cat: "agro" },
        { task: "Configurar Wi-Fi Via Rádio", effort: "2 Horas & 1 Dose de Paciência", pay: "Promessa de Sinal 4G", roi: -50, cat: "tech" },
        { task: "Consertar Impressora da Tia (HP)", effort: "6 Horas & 1 Exorcismo", pay: "1 Pudim Caseiro", roi: 50, cat: "tech" },
        { task: "Criar NFT do Gado Nelore", effort: "12 Horas & 3 Energéticos", pay: "0.001 Ethereum", roi: 400, cat: "dev" },
        { task: "Code Review de Estagiário", effort: "1 Hora & Zero Esperança", pay: "1 Desenho de Gatinho", roi: 10, cat: "chaos" },
        { task: "Achar Bug Crítico (3 AM)", effort: "5 Horas & 1 Tela Azul", pay: "O Sol Nascer", roi: 1500, cat: "lendario" },
        { task: "Tosa Estética em Poodle", effort: "3 Horas & 1 Mordida", pay: "5 Lambidas Sinceras", roi: 100, cat: "adm" },
        { task: "App Mobile com Flutter", effort: "80 Horas & 7 Daily Scrums", pay: "Contrato Futuro ('Exposure')", roi: -1200, cat: "prejuizo" },
        { task: "Trocar Senha do Servidor", effort: "5 Minutos & 1 Riso", pay: "Ego Inflado", roi: 50, cat: "tech" },
        { task: "Explicar API para a Avó", effort: "2 Horas & Exemplo de Pão", pay: "Abraço da Vó", roi: 2500, cat: "lendario" },
        { task: "Enfrentar Coice de Mula", effort: "30 Min & 1 Grito", pay: "Código Salvo", roi: 250, cat: "agro" },
        { task: "Formatar PC de Caloteiro", effort: "1 Hora & Justiça Divina", pay: "Vingança da Alma", roi: 777, cat: "chaos" },
        { task: "Daily Meeting Inútil", effort: "30 Min & 1 Susto", pay: "Nenhuma Conclusão", roi: -50, cat: "prejuizo" },
        { task: "Linux em Trator Velho", effort: "10 Horas & 1 Ferroada", pay: "Trator Roda (Milagre)", roi: 350, cat: "agro" },
        { task: "Curar Vaca (Tetanus)", effort: "1 Dia & 2 Dipironas", pay: "1 Arroba Queijo Canastra", roi: 600, cat: "adm" },
        { task: "Resolver Merge Conflict", effort: "2 Horas & Delete All", pay: "Solução Inesperada", roi: -100, cat: "dev" },
        { task: "Pastel de Feira & Caldo", effort: "15 Min & Foco Total", pay: "Felicidade Pura", roi: 5000, cat: "lendario" }
    ];

    const auditList = document.getElementById('audit-list');
    const auditTotalEl = document.getElementById('audit-total-score');
    const auditTabs = document.querySelectorAll('.audit-tab');

    function formatMoney(val) {
        return val > 0 ? `+${val} CC` : `${val} CC`;
    }

    function getCategoryClass(cat) {
        const map = {
            'adm': 'cat-adm', 'dev': 'cat-dev', 'agro': 'cat-agro', 
            'chaos': 'cat-chaos', 'tech': 'cat-tech', 'lendario': 'cat-chaos', 'prejuizo': 'cat-chaos'
        };
        return map[cat] || 'cat-tech';
    }

    function getRoiClass(val) {
        if(val >= 1000) return 'roi-legend';
        if(val > 0) return 'roi-pos';
        return 'roi-neg';
    }

    function getStampText(roi) {
        if(roi >= 1000) return "LENDÁRIO";
        if(roi > 0) return "APROVADO";
        if(roi < -500) return "FALÊNCIA";
        return "PREJUÍZO";
    }

    function getStampColor(roi) {
        if(roi >= 1000) return "color: #9c27b0; border-color: #9c27b0;";
        if(roi > 0) return "color: #1b5e20; border-color: #1b5e20;";
        return "color: #b71c1c; border-color: #b71c1c;";
    }

    function renderAudit(filter = 'all') {
        if(!auditList) return;
        auditList.innerHTML = '';
        let totalScore = 0;
        let delay = 0;

        const filteredData = auditData.filter(item => {
            if(filter === 'all') return true;
            if(filter === 'lucro') return item.roi > 0;
            if(filter === 'prejuizo') return item.roi < 0;
            if(filter === 'lendario') return item.roi >= 1000;
            return true;
        });

        filteredData.forEach(item => {
            totalScore += item.roi;
            
            const row = document.createElement('div');
            row.className = 'audit-row';
            row.style.animation = `fadeIn 0.5s ease forwards ${delay}s`;
            row.style.opacity = '0'; // Start hidden for animation

            const roiClass = getRoiClass(item.roi);
            const catClass = getCategoryClass(item.cat);

            // Hidden Stamp Element
            const stampHTML = `<div class="row-stamp" style="${getStampColor(item.roi)}">${getStampText(item.roi)}</div>`;

            row.innerHTML = `
                <div class="ar-task">
                    <span class="cat-badge ${catClass}">${item.cat.toUpperCase()}</span>
                    ${item.task}
                </div>
                <div class="ar-effort">${item.effort}</div>
                <div class="ar-pay">${item.pay}</div>
                <div class="ar-roi ${roiClass}">${formatMoney(item.roi)}</div>
                ${stampHTML}
            `;

            // Add simple click interaction for stamp visual
            row.addEventListener('mousedown', () => {
                const stamp = row.querySelector('.row-stamp');
                stamp.style.opacity = '1';
                stamp.style.transform = 'translate(-50%, -50%) rotate(-15deg) scale(1)';
            });

            row.addEventListener('mouseup', () => {
                setTimeout(() => {
                    const stamp = row.querySelector('.row-stamp');
                    stamp.style.opacity = '0';
                    stamp.style.transform = 'translate(-50%, -50%) rotate(-15deg) scale(2)';
                }, 1000);
            });

            auditList.appendChild(row);
            delay += 0.05;
        });

        // Animate Total Score
        animateValue(auditTotalEl, totalScore);
    }

    function animateValue(obj, end) {
        let startTimestamp = null;
        const duration = 1000;
        const start = 0; 

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            
            obj.innerHTML = current > 0 ? `+${current} CC` : `${current} CC`;
            obj.style.color = current >= 0 ? 'var(--ink-blue)' : 'var(--ink-red)';
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Tab Logic
    auditTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            auditTabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderAudit(btn.dataset.filter);
        });
    });

    // CSS Keyframes for row fade in
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(styleSheet);

    // Init
    const auditSection = document.getElementById('chaos-audit');
    if(auditSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    renderAudit('all');
                    observer.disconnect();
                }
            });
        }, { threshold: 0.1 });
        observer.observe(auditSection);
    }
});


    /* --- FEIRA DO MESTRE LOGIC (APPEND TO MAIN SCRIPT) --- */
    
    const productsData = [
        // Corredor 1: TI & POG
        { id: 101, name: "POG 3000 (Kit Completo)", price: 150.00, curr: "BRL", cat: "Gambiarra", weight: 2.5, icon: "🛠️", desc: "Fita Isolante, Arame e Pêndulo p/ div." },
        { id: 102, name: "Download de RAM (128GB)", price: 2, curr: "QC", cat: "Absurdo", weight: 0.1, icon: "💾", desc: "Arquivo .zip que trava o PC." },
        { id: 103, name: "Cabo Rede Suturado", price: 49.99, curr: "BRL", cat: "Tech", weight: 0.2, icon: "🧵", desc: "Costurado com linha cirúrgica." },
        { id: 104, name: "Kernel Limpo (Menta)", price: 3, curr: "QC", cat: "Dev", weight: 0.0, icon: "🐧", desc: "Ressuscita PCs mortos." },
        { id: 105, name: "Vacina Anti-Escopo", price: 1, curr: "ARR", cat: "Prejuízo", weight: 0.5, icon: "💉", desc: "Dura 3 meses contra gerentes." },

        // Corredor 2: Adm & Agro
        { id: 201, name: "Soro (Limpa Cache)", price: 29.90, curr: "BRL", cat: "Híbrido", weight: 1.0, icon: "💧", desc: "P/ animal e hard refresh." },
        { id: 202, name: "Dipirona Híbrida", price: 1, curr: "QC", cat: "Essencial", weight: 0.1, icon: "💊", desc: "P/ dor de cabeça e casco." },
        { id: 203, name: "Sêmen de Touro (Lógica)", price: 0.01, curr: "BTC", cat: "AgroTech", weight: 0.5, icon: "🧬", desc: "Otimiza gado e SQL." },
        { id: 204, name: "Manual do Mugido", price: 19.10, curr: "BRL", cat: "Adm", weight: 0.3, icon: "📖", desc: "Tradução bovina instantânea." },
        { id: 205, name: "Ração 500ms (Low Latency)", price: 5, curr: "QC", cat: "Agro", weight: 20.0, icon: "🌾", desc: "Alto desempenho p/ bichos." },

        // Corredor 3: Caos
        { id: 301, name: "Café (Força do Ódio)", price: 39.90, curr: "BRL", cat: "Caos", weight: 0.5, icon: "☕", desc: "Overclock cerebral imediato." },
        { id: 302, name: "Pão de Queijo.zip", price: 2, curr: "QC", cat: "Minas", weight: 1.0, icon: "🥯", desc: "Garante 90% do cache mental." },
        { id: 303, name: "Licença Zero Sono", price: 1, curr: "ARR", cat: "Caos", weight: 0.0, icon: "👁️", desc: "Operar 72h sem descanso." },
        { id: 304, name: "Vingança da Alma", price: 777.00, curr: "BRL", cat: "Justiça", weight: 0.0, icon: "☠️", desc: "Formatação remota de caloteiro." },
        { id: 305, name: "NFT 3 Libertadores (Verificado)", price: 0.005, curr: "ETH", cat: "Absurdo", weight: 0.0, icon: "🏆", desc: "O Corinthians não pode ter." },

        // Corredor 4: Palmeiras
        { id: 401, name: "Manto Do Verdão (Prod)", price: 19.10, curr: "BRL", cat: "Essencial", weight: 0.3, icon: "💚", desc: "Aumenta resiliência no deploy." },
        { id: 402, name: "VAR Palmeirense", price: 1, curr: "ARR", cat: "Dev", weight: 15.0, icon: "🖥️", desc: "Prova que não foi pênalti." },
        { id: 403, name: "Escudo Anti-Rival", price: 5.00, curr: "BRL", cat: "Fanatismo", weight: 0.1, icon: "🛡️", desc: "Repele packets corinthianos." },
        { id: 404, name: "Pacote Luto Oficial", price: 191.00, curr: "BRL", cat: "Caos", weight: 0.0, icon: "⚰️", desc: "Atestado p/ dia de derrota." },
        { id: 405, name: "Kit Anti-Corinthians 404", price: 2, curr: "QC", cat: "Dev", weight: 0.2, icon: "🚫", desc: "Site verde e branco p/ rival." }
    ];

    // State
    let cart = [];
    const MAX_WEIGHT = 20.0; // kg

    // Elements
    const cartContainer = document.getElementById('cart-items-container');
    const weightFill = document.getElementById('weight-fill');
    const weightDisplay = document.getElementById('cart-weight-display');
    const cartAlert = document.getElementById('cart-alert');
    const cartTotals = document.getElementById('cart-totals');
    const cartUi = document.querySelector('.wheelbarrow-ui');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeReceipt = document.getElementById('close-checkout');

    // Renders Products into Aisles
    function renderMarket() {
        const aisles = {
            1: document.getElementById('aisle-1'),
            2: document.getElementById('aisle-2'),
            3: document.getElementById('aisle-3'),
            4: document.getElementById('aisle-4')
        };

        productsData.forEach(prod => {
            const corridor = Math.floor(prod.id / 100); // 101 -> 1, 201 -> 2
            const container = aisles[corridor];
            
            if(container) {
                const card = document.createElement('div');
                card.className = 'prod-card';
                card.innerHTML = `
                    <div class="prod-badge">${prod.cat}</div>
                    <div class="prod-icon">${prod.icon}</div>
                    <div class="prod-name">${prod.name}</div>
                    <div class="prod-desc">${prod.desc}</div>
                    <div class="prod-price">${formatPrice(prod.price, prod.curr)}</div>
                    <button class="btn-buy" data-id="${prod.id}">COMPRAR</button>
                `;
                
                // Find button and attach event
                const btn = card.querySelector('.btn-buy');
                btn.addEventListener('click', (e) => addToCart(prod, e));
                
                container.appendChild(card);
            }
        });
    }

    function formatPrice(val, curr) {
        if (curr === 'BRL') return `R$ ${val.toFixed(2).replace('.', ',')}`;
        if (curr === 'QC') return `${val} QC 🧀`;
        if (curr === 'ARR') return `${val} @ 🐮`;
        if (curr === 'BTC') return `${val} BTC ₿`;
        if (curr === 'ETH') return `${val} ETH Ξ`;
        return val;
    }

    function addToCart(prod, event) {
        // Calculate projected weight
        const currentWeight = cart.reduce((acc, item) => acc + item.weight, 0);
        if (currentWeight + prod.weight > MAX_WEIGHT + 5) { // Allow small overflow but block massive
             alert("A MULA EMPANCOU! TIRA PESO!");
             return;
        }

        // Animation
        const btn = event.target;
        const rect = btn.getBoundingClientRect();
        const cartRect = cartUi.getBoundingClientRect();
        
        // Create flying element
        const flyer = document.createElement('div');
        flyer.className = 'flying-item';
        flyer.textContent = prod.icon;
        flyer.style.left = `${rect.left + rect.width/2}px`;
        flyer.style.top = `${rect.top}px`;
        document.body.appendChild(flyer);

        // Fly to cart
        setTimeout(() => {
            const targetX = cartRect.left + cartRect.width / 2;
            const targetY = cartRect.top + 50;
            const deltaX = targetX - (rect.left + rect.width/2);
            const deltaY = targetY - rect.top;
            
            flyer.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.5)`;
            flyer.style.opacity = '0';
        }, 50);

        // Cleanup flyer
        setTimeout(() => {
            flyer.remove();
            // Add logic
            cart.push(prod);
            updateCartUI();
            
            // Visual shake
            cartUi.classList.add('shake-anim'); // Assume CSS class for shake
            setTimeout(() => cartUi.classList.remove('shake-anim'), 300);
        }, 800);
    }

    function updateCartUI() {
        if (!cartContainer) return;
        
        // 1. Items List
        cartContainer.innerHTML = '';
        if (cart.length === 0) {
            cartContainer.innerHTML = '<div class="empty-cart-msg">O carrinho está vazio. Encha de tralha!</div>';
        } else {
            cart.forEach(item => {
                const row = document.createElement('div');
                row.className = 'cart-item-row';
                row.innerHTML = `<span>${item.icon} ${item.name}</span> <span>${formatPrice(item.price, item.curr)}</span>`;
                cartContainer.appendChild(row);
            });
            // Scroll to bottom
            cartContainer.scrollTop = cartContainer.scrollHeight;
        }

        // 2. Weight Logic
        const totalWeight = cart.reduce((acc, item) => acc + item.weight, 0);
        const weightPercent = Math.min((totalWeight / MAX_WEIGHT) * 100, 100);
        
        weightDisplay.textContent = `${totalWeight.toFixed(1)}kg / ${MAX_WEIGHT}kg`;
        weightFill.style.width = `${weightPercent}%`;
        
        if (totalWeight > MAX_WEIGHT) {
            weightFill.className = 'weight-fill danger';
            cartUi.classList.add('overload');
            cartAlert.classList.remove('hidden');
        } else if (totalWeight > MAX_WEIGHT * 0.8) {
            weightFill.className = 'weight-fill warning';
            cartUi.classList.remove('overload');
            cartAlert.classList.add('hidden');
        } else {
            weightFill.className = 'weight-fill';
            cartUi.classList.remove('overload');
            cartAlert.classList.add('hidden');
        }

        // 3. Totals Logic
        const totals = { BRL: 0, QC: 0, ARR: 0, CRYPTO: 0 };
        
        cart.forEach(item => {
            if(item.curr === 'BRL') totals.BRL += item.price;
            else if(item.curr === 'QC') totals.QC += item.price;
            else if(item.curr === 'ARR') totals.ARR += item.price;
            else totals.CRYPTO += item.price; // Simplification
        });

        let totalStr = "";
        if(totals.BRL > 0) totalStr += `R$ ${totals.BRL.toFixed(2).replace('.',',')}<br>`;
        if(totals.QC > 0) totalStr += `+ ${totals.QC} Queijos<br>`;
        if(totals.ARR > 0) totalStr += `+ ${totals.ARR} Arrobas<br>`;
        if(totals.CRYPTO > 0) totalStr += `+ ${totals.CRYPTO.toFixed(4)} Crypto`;
        
        if(totalStr === "") totalStr = "R$ 0,00";
        
        cartTotals.innerHTML = `<small>Total a Pagar:</small><div class="total-line">${totalStr}</div>`;
    }

    // Checkout Interaction
    if(checkoutBtn && checkoutModal) {
        checkoutBtn.addEventListener('click', () => {
            if(cart.length === 0) {
                alert("Comprar vento? Adicione itens!");
                return;
            }
            checkoutModal.classList.remove('hidden');
        });

        if(closeReceipt) {
            closeReceipt.addEventListener('click', () => {
                checkoutModal.classList.add('hidden');
                // Reset Cart
                cart = [];
                updateCartUI();
                alert("O Mestre agradece a preferência. Volte sempre!");
            });
        }
    }

    // Init Market
    renderMarket();

    
    /* --- ARQUIVOS PERDIDOS (FILE MANAGER LOGIC) --- */
    
    // Mock Data Structure
    const fileSystem = {
        "root": [
            { id: "f1", name: "01-PROJETOS_FINAIS", type: "folder", date: "12/11/2025", size: "1.2 GB", desc: "Pasta vazia ou corrompida. Contém sonhos." },
            { id: "f2", name: "02-NAO_FUNCIONOU", type: "folder", date: "18/09/2024", size: "4.5 GB", desc: "Arquivo morto de ideias falhas." },
            { id: "f3", name: "03-VIDA_RURAL", type: "folder", date: "05/05/2025", size: "800 MB", desc: "Fotos de gado e backups de ração." },
            { id: "f4", name: "04-SEGREDO_DEV", type: "folder", date: "01/04/2023", size: "12 MB", desc: "A verdade nua e crua sobre o Front-end." },
            { id: "a1", name: "backup_final_agora_vai_v1.zip", type: "zip", date: "03/03/2024", size: "500 MB", desc: "O código original. Foi perdido 3 vezes." },
            { id: "a2", name: "readme_leia_antes_de_morrer.txt", type: "txt", date: "01/01/2020", size: "1 KB", desc: "Instruções: Não use VIM. Beba café." }
        ],
        "f1": [], // Empty
        "f2": [
            { id: "f2_1", name: "projeto_NFT_do_pombo.js", type: "js", date: "05/01/2024", size: "2 KB", desc: "O pombo fugiu com a private key." },
            { id: "f2_2", name: "e_commerce_churrasco_java.jar", type: "jar", date: "12/07/2023", size: "150 MB", desc: "Trava só de olhar. Java puro." },
            { id: "f2_3", name: "layout_clean_sem_pog.css", type: "css", date: "20/10/2024", size: "0 KB", desc: "Arquivo vazio. Impossível criar sem POG." },
            { id: "f2_4", name: "lista_caloteiros.xlsx", type: "xls", date: "01/05/2025", size: "2 GB", desc: "O maior Big Data do sistema." },
            { id: "f2_5", name: "bug_fantasma_2024.log", type: "log", date: "05/03/2024", size: "50 MB", desc: "Aparece só quando o chefe olha." },
            { id: "f2_6", name: "senha_servidor_nao_abrir.txt", type: "txt", date: "11/11/2023", size: "1 KB", desc: "Senha real: 123456." }
        ],
        "f3": [
            { id: "f3_1", name: "foto_vaca_formatando.jpg", type: "jpg", date: "18/06/2025", size: "3 MB", desc: "A vaca foi mais útil que o suporte." },
            { id: "f3_2", name: "manual_medico_macgyver.pdf", type: "pdf", date: "01/04/2023", size: "10 MB", desc: "Sutura com arame e fita isolante." },
            { id: "f3_3", name: "melhor_pastagem_sql_v2.db", type: "db", date: "20/07/2025", size: "500 MB", desc: "SELECT * FROM pasto WHERE grama = 'verde'" },
            { id: "f3_4", name: "playlist_sertanejo_deploy.m3u", type: "m3u", date: "05/08/2025", size: "5 KB", desc: "Essencial para deploy em produção." },
            { id: "f3_5", name: "calculo_arrobas.xls", type: "xls", date: "03/01/2025", size: "50 KB", desc: "O único Excel que importa. Não toque." },
            { id: "f3_6", name: "rastreio_cavalo_fugitivo.gpx", type: "gpx", date: "15/09/2025", size: "1 MB", desc: "Cavalo ativou modo Go Horse. 50km/h." }
        ],
        "f4": [
            { id: "f4_1", name: "front_end_nao_e_design.txt", type: "txt", date: "10/10/2024", size: "2 KB", desc: "A maior mentira contada aos clientes." },
            { id: "f4_2", name: "console_log_nao_e_teste.html", type: "html", date: "19/01/2025", size: "4 KB", desc: "Único teste confiável: console.log('chegou aqui')." },
            { id: "f4_3", name: "github_codigos_copiados.link", type: "link", date: "01/01/2025", size: "1 KB", desc: "Link direto pro Stack Overflow." },
            { id: "f4_4", name: "por_que_nao_uso_react.md", type: "md", date: "20/05/2025", size: "15 KB", desc: "Manifesto de amor ao POG." },
            { id: "f4_5", name: "desculpa_pro_prazo.wav", type: "wav", date: "25/11/2025", size: "5 MB", desc: "Áudio de voz rouca fingindo gripe." },
            { id: "f4_6", name: "corinthians_sem_libertadores.py", type: "py", date: "08/02/2026", size: "1 KB", desc: "Script que prova matematicamente a verdade." }
        ]
    };

    const iconsMap = {
        folder: 'https://win98icons.alexmeub.com/icons/png/directory_closed-0.png',
        zip: 'https://win98icons.alexmeub.com/icons/png/zip_file-0.png',
        txt: 'https://win98icons.alexmeub.com/icons/png/notepad_file-0.png',
        js: 'https://win98icons.alexmeub.com/icons/png/script_file-0.png',
        jar: 'https://win98icons.alexmeub.com/icons/png/java-0.png',
        css: 'https://win98icons.alexmeub.com/icons/png/settings_gear-0.png',
        xls: 'https://win98icons.alexmeub.com/icons/png/chart1-0.png',
        log: 'https://win98icons.alexmeub.com/icons/png/text_file-0.png',
        jpg: 'https://win98icons.alexmeub.com/icons/png/image_landscape-0.png',
        pdf: 'https://win98icons.alexmeub.com/icons/png/chm-0.png',
        db: 'https://win98icons.alexmeub.com/icons/png/database-0.png',
        m3u: 'https://win98icons.alexmeub.com/icons/png/cd_audio_cd-0.png',
        gpx: 'https://win98icons.alexmeub.com/icons/png/world-0.png',
        html: 'https://win98icons.alexmeub.com/icons/png/html-0.png',
        link: 'https://win98icons.alexmeub.com/icons/png/url1-0.png',
        md: 'https://win98icons.alexmeub.com/icons/png/file_lines-0.png',
        wav: 'https://win98icons.alexmeub.com/icons/png/audio_file-0.png',
        py: 'https://win98icons.alexmeub.com/icons/png/console_prompt-0.png'
    };

    // Elements
    const fmTableBody = document.getElementById('fm-file-list');
    const fmAddressBar = document.getElementById('fm-address-bar');
    const fmUpBtn = document.getElementById('fm-up-btn');
    const fmStatusCount = document.getElementById('fm-status-count');
    const fmSidebarInfo = document.getElementById('fm-sidebar-info');
    
    // Modal Elements
    const retroDialog = document.getElementById('retro-dialog');
    const retroTitle = document.getElementById('retro-dialog-title');
    const retroMsg = document.getElementById('retro-dialog-msg');
    const retroIcon = document.getElementById('retro-dialog-icon');
    const btnRetroOk = document.getElementById('btn-retro-ok');
    const btnRetroClose = document.getElementById('close-retro-dialog');

    let currentPath = ['root']; // Stack of folder IDs
    let currentPathNames = ['C:\\RAFAEL_M']; // Display path

    function getIcon(type) {
        return iconsMap[type] || iconsMap['txt'];
    }

    function renderFiles(folderId) {
        if(!fmTableBody) return;
        fmTableBody.innerHTML = '';
        
        const items = fileSystem[folderId] || [];
        
        if(items.length === 0 && folderId !== 'root') {
            // Empty folder feedback
            const tr = document.createElement('tr');
            tr.innerHTML = `<td colspan="4" style="text-align:center; padding:20px; color:#666;">(Pasta Vazia ou Corrompida)</td>`;
            fmTableBody.appendChild(tr);
        } else {
            items.forEach(item => {
                const tr = document.createElement('tr');
                tr.className = 'fm-row';
                tr.innerHTML = `
                    <td><img src="${getIcon(item.type)}" class="fm-icon">${item.name}</td>
                    <td>${item.type.toUpperCase()}</td>
                    <td>${item.size}</td>
                    <td>${item.date}</td>
                `;
                
                // Click Selection
                tr.addEventListener('click', (e) => {
                    // Deselect all
                    document.querySelectorAll('.fm-row').forEach(row => row.classList.remove('selected'));
                    // Select this
                    tr.classList.add('selected');
                    // Update Sidebar
                    fmSidebarInfo.innerHTML = `<strong>${item.name}</strong><br>${item.desc}`;
                    
                    // If double click or distinct click action needed? 
                    // Let's use single click to select, but we need action trigger.
                    // Let's add a slight delay check for double click or just trigger on row click?
                    // Classic windows: Single select, Double open.
                });

                // Double Click to Open
                tr.addEventListener('dblclick', () => {
                    if(item.type === 'folder') {
                        openFolder(item.id, item.name);
                    } else {
                        openFileAction(item);
                    }
                });

                fmTableBody.appendChild(tr);
            });
        }

        // Update UI
        fmAddressBar.value = currentPathNames.join('\\') + '\\';
        fmStatusCount.textContent = `${items.length} objeto(s)`;
        fmUpBtn.disabled = currentPath.length === 1;
    }

    function openFolder(id, name) {
        currentPath.push(id);
        currentPathNames.push(name);
        renderFiles(id);
        fmSidebarInfo.innerHTML = "<strong>Selecione um item</strong><br>para ver a descrição.";
    }

    function goUp() {
        if(currentPath.length > 1) {
            currentPath.pop();
            currentPathNames.pop();
            renderFiles(currentPath[currentPath.length - 1]);
            fmSidebarInfo.innerHTML = "<strong>Selecione um item</strong><br>para ver a descrição.";
        }
    }

    function openFileAction(item) {
        let title = "Sistema";
        let msg = "";
        let icon = "https://win98icons.alexmeub.com/icons/png/msg_information-0.png";

        switch(item.type) {
            case 'jar':
            case 'exe':
                title = "Erro Fatal";
                msg = "A máquina recusou a execução deste arquivo. Motivo: Complexidade excessiva ou preguiça do processador.";
                icon = "https://win98icons.alexmeub.com/icons/png/msg_error-0.png";
                break;
            case 'zip':
                title = "WinZip (Trial)";
                msg = "Extraindo arquivos... Erro: O arquivo está corrompido ou foi deletado por um gato.";
                icon = "https://win98icons.alexmeub.com/icons/png/msg_warning-0.png";
                break;
            case 'wav':
            case 'm3u':
                title = "Media Player";
                msg = "Reproduzindo áudio mentalmente... (Imagine uma moda de viola tocando agora).";
                break;
            case 'xls':
            case 'xlsx':
                title = "Excel 97";
                msg = "Abrindo planilha... CUIDADO: Alterar uma célula pode quebrar a economia da fazenda.";
                break;
            case 'py':
            case 'js':
                title = "Compilador";
                msg = "Executando script... Resultado: 'Hello World' (e um erro na linha 32).";
                break;
            case 'jpg':
                title = "Visualizador de Imagens";
                msg = "Imagem carregada na memória. É uma bela foto. Acredite em mim.";
                break;
            default:
                title = "Bloco de Notas";
                msg = item.desc; // Show the description as the file content
        }

        showRetroDialog(title, msg, icon);
    }

    function showRetroDialog(title, msg, iconSrc) {
        if(retroDialog) {
            retroTitle.textContent = title;
            retroMsg.textContent = msg;
            retroIcon.src = iconSrc;
            retroDialog.classList.remove('hidden');
        }
    }

    function closeRetroDialog() {
        if(retroDialog) retroDialog.classList.add('hidden');
    }

    // Listeners
    if(fmUpBtn) fmUpBtn.addEventListener('click', goUp);
    if(btnRetroOk) btnRetroOk.addEventListener('click', closeRetroDialog);
    if(btnRetroClose) btnRetroClose.addEventListener('click', closeRetroDialog);

    // Initialize
    if(fmTableBody) renderFiles('root');

    
/* --- LÓGICA DO ATESTADO DE COMPARECIMENTO (V4 - Sem Botão de Download) --- */

    const attestBtn = document.getElementById('attest-btn');
    const attestNameInput = document.getElementById('attest-name-input');
    const attestModalOverlay = document.getElementById('attestation-modal-overlay');
    const attestNameDisplay = document.getElementById('attest-name-display');
    const attestDateDisplay = document.getElementById('attest-date-display');
    const attestCloseBtn = document.getElementById('attest-close-btn');
    // REMOVIDO: const attestDownloadBtn = document.getElementById('attest-download-btn');
    
    // Adiciona o estilo de assinatura manuscrita (fallback simples, para garantir que as assinaturas sejam visíveis na impressão)
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        /* Estilo para a impressão */
        @media print {
            body * {
                visibility: hidden;
            }
            #attestation-modal-overlay, #attestation-modal-overlay * {
                visibility: visible;
            }
            #attestation-modal-overlay {
                position: static !important;
                display: block !important;
                background: none !important;
                padding: 0;
            }
            .modal-content.small-modal {
                box-shadow: none !important;
                border: none !important;
                width: 100%;
                max-width: 100%;
                margin: 0;
                transform: none;
            }
            .attest-signature {
                font-family: 'Architects Daughter', cursive !important;
            }
            /* Esconde botões do modal na impressão */
            #attest-close-btn {
                display: none !important;
            }
        }
    `;
    document.head.appendChild(styleTag);


    if (attestBtn && attestModalOverlay) {
        
        // 1. Abrir Modal e Preencher Dados
        attestBtn.addEventListener('click', () => {
            const userName = attestNameInput.value.trim();
            
            if (userName === "") {
                attestNameInput.style.borderColor = "var(--danger)";
                attestNameInput.placeholder = "DIGITE SEU NOME!";
                setTimeout(() => {
                    attestNameInput.style.borderColor = "#555";
                    attestNameInput.placeholder = "Seu Nome Completo";
                }, 1500);
                return;
            }

            // Set Data
            attestNameDisplay.textContent = userName.toUpperCase();
            attestDateDisplay.textContent = new Date().toLocaleDateString('pt-BR');
            
            // Show Modal
            attestModalOverlay.classList.add('active');
            attestNameInput.value = ""; 
        });

        // 2. Fechar Modal
        attestCloseBtn.addEventListener('click', () => {
            attestModalOverlay.classList.remove('active');
        });
        
        attestModalOverlay.addEventListener('click', (e) => {
            if (e.target === attestModalOverlay) {
                attestModalOverlay.classList.remove('active');
            }
        });
        
        // Não há mais listener de download, pois o usuário usará o Ctrl+P.
        
        // Listeners para a impressão funcionar corretamente com o modal
        const printMediaQuery = window.matchMedia('print');
        printMediaQuery.addListener((mql) => {
            if (!mql.matches) {
                // Após a impressão, removemos a sobreposição
                attestModalOverlay.classList.remove('active');
            }
        });
    }

// --- LÓGICA DO LINK "COMO SAIR DAQUI" (CHUVA E CAFÉ) ---

const linkSair = document.getElementById('link-sair-aqui'); // Certifique-se que o ID do seu link é 'link-sair-aqui'
const rainContainer = document.getElementById('rain-container');

if (linkSair && rainContainer) {
    linkSair.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link

        // 1. Ativa a chuva
        rainContainer.style.display = 'block';
        const numDrops = 100; // Quantidade de gotas
        for (let i = 0; i < numDrops; i++) {
            const rainDrop = document.createElement('div');
            rainDrop.classList.add('rain');
            rainDrop.style.left = `${Math.random() * 100}vw`;
            rainDrop.style.animationDelay = `${Math.random() * -5}s`; // Atraso negativo para algumas gotas já estarem caindo
            rainDrop.style.animationDuration = `${Math.random() * 0.5 + 0.75}s`; // Duração da animação
            rainDrop.style.opacity = Math.random();
            rainContainer.appendChild(rainDrop);
        }

        // 2. Mostra a mensagem da chuva e do café
        const rainAlertModal = document.createElement('div');
        rainAlertModal.classList.add('rain-alert-modal');
        rainAlertModal.innerHTML = `
            <h3>Ops! Deu Temporal! </h3>
            <p>O Mestre informa que começou a chover muito forte aqui na fazenda. É perigoso sair agora!</p>
            <p>Por que você não fica mais um pouco, espera a chuva passar e toma um cafezinho fresco com pão de queijo?</p>
            <button id="fechar-chuva-modal">Ok, vou esperar.</button>
        `;
        document.body.appendChild(rainAlertModal);

        // Ativa a transição do modal
        setTimeout(() => {
            rainAlertModal.classList.add('active');
        }, 50); // Pequeno delay para a animação CSS

        // Lógica para fechar o modal
        const fecharChuvaBtn = document.getElementById('fechar-chuva-modal');
        fecharChuvaBtn.addEventListener('click', () => {
            rainAlertModal.classList.remove('active');
            setTimeout(() => {
                rainAlertModal.remove(); // Remove o modal do DOM
                
                // Desativa a chuva após fechar o modal
                rainContainer.style.display = 'none';
                while (rainContainer.firstChild) {
                    rainContainer.removeChild(rainContainer.firstChild); // Remove as gotas
                }
            }, 500); // Espera a transição do fade out
        });
    });
}
   



// --- LÓGICA DO LINK "RECEITA DE PÃO DE QUEIJO" (MENSAGEM ÚNICA) ---

const linkReceita = document.getElementById('link-receita-pq');

if (linkReceita) {
    linkReceita.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link

        const titulo = "⚠️ ATENÇÃO: ARQUIVO CORROMPIDO (Erro Felino)";
        
        // Mensagem divertida e caótica
        const mensagem = `
            O Mestre Rafael lamenta informar, mas o Gato Caramelo usou a receita original do Pão de Queijo como "areia".
           
            
        `;

        // Assumindo que a função openModal(title, body) existe no seu script.js, ela será chamada:
        openModal(titulo, mensagem);
    });
}

// --- LÓGICA DA ANIMAÇÃO DE ENTRADA (SHARED ELEMENT) ---
    
    const loader = document.getElementById('intro-loader');
    const loaderBg = document.querySelector('.loader-bg');
    const introWrapper = document.querySelector('.intro-logo-wrapper');
    const introText = document.querySelector('.intro-text');
    
    // Elemento alvo final (O "RM." na navbar)
    const finalLogoElement = document.querySelector('.logo .initials');
    const logoTrigger = document.getElementById('logo-trigger'); // O container do logo na nav

    // Bloqueia scroll
    document.body.classList.add('loading-locked');
    
    // Esconde o logo da navbar temporariamente
    if(logoTrigger) logoTrigger.classList.add('hidden-initially');

    // Espera a página carregar completamente (fontes, layout)
    window.addEventListener('load', () => {
        // Tempo da animação de desenho (2.5s) + preenchimento (0.5s) + um respiro
        const animationDelay = 3200; 

        setTimeout(() => {
            performSharedElementTransition();
        }, animationDelay);
    });

    function performSharedElementTransition() {
        if (!introWrapper || !finalLogoElement) return;

        // 1. Pegar coordenadas do Elemento Inicial (O logo grande no centro)
        const startRect = introWrapper.getBoundingClientRect();

        // 2. Pegar coordenadas do Elemento Final (O logo na navbar)
        // Precisamos garantir que o elemento final esteja visível para o cálculo, mas invisível para o olho
        // Como ele está com opacity: 0 via classe hidden-initially, o getBoundingClientRect funciona.
        const finalRect = finalLogoElement.getBoundingClientRect();

        // 3. Calcular a diferença de escala (Scale)
        // Usamos a altura como referência principal para texto
        // Nota: O SVG tem viewBox, então o cálculo é aproximado visualmente. 
        // Vamos calcular baseado na altura visual renderizada.
        
        // Ajuste fino: O SVG tem padding interno, o texto real é menor que a box.
        // Vamos usar uma escala baseada na proporção desejada.
        const scale = finalRect.height / startRect.height; 
        
        // 4. Calcular a diferença de Posição (Translate)
        // Precisamos compensar o fato de que ao escalar, o elemento encolhe para o centro.
        const startCenterX = startRect.left + startRect.width / 2;
        const startCenterY = startRect.top + startRect.height / 2;

        const finalCenterX = finalRect.left + finalRect.width / 2;
        const finalCenterY = finalRect.top + finalRect.height / 2;

        const deltaX = finalCenterX - startCenterX;
        const deltaY = finalCenterY - startCenterY;

        // 5. Aplicar a transição
        introWrapper.style.transition = 'transform 1s cubic-bezier(0.77, 0, 0.175, 1)';
        introWrapper.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;

        // 6. Fade out no fundo branco simultaneamente
        loader.classList.add('loader-finished');

        // 7. Limpeza pós-transição
        setTimeout(() => {
            // Mostra o logo real
            if(logoTrigger) {
                logoTrigger.classList.remove('hidden-initially');
                // Pequena animação de fade in para garantir suavidade
                logoTrigger.style.transition = 'opacity 0.2s'; 
                logoTrigger.style.opacity = '1';
            }

            // Remove o loader do DOM
            loader.style.display = 'none';
            
            // Libera o scroll
            document.body.classList.remove('loading-locked');

        }, 1000); // 1s é o tempo da transição do transform
    }


// --- CURSO DO MESTRE LOGIC (NEW SECTION) ---
    
    // 1. Accordion Logic for Curriculum
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');
            
            // Toggle active class
            item.classList.toggle('active');
            
            // Toggle height
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }
            
            // Optional: Close others (Accordion behavior) - uncomment if desired
            /*
            accordionHeaders.forEach(otherHeader => {
                if(otherHeader !== header) {
                    const otherItem = otherHeader.parentElement;
                    const otherContent = otherItem.querySelector('.accordion-content');
                    otherItem.classList.remove('active');
                    otherContent.style.maxHeight = 0;
                }
            });
            */
        });
    });

    // 2. Loot Box Logic
    const lootBoxTrigger = document.getElementById('lootbox-trigger');
    const lootDesc = document.getElementById('loot-desc');
    const lootItems = document.querySelectorAll('.loot-item');
    const itemDescriptions = {
        'l1': 'Teclado Blindado: Mecânico, barulhento e à prova de coice.',
        'l2': 'Jaleco Híbrido: Bolsos para estetoscópio e SSDs.',
        'l3': 'Caneca Bíblia Java: 1 Litro. Serve como arma de defesa pessoal.',
        'l4': 'Vade Mecum do Gambiarreiro: Capa dura. Contém datasheet de Intel 486.',
        'l5': 'Amuleto de São Jorge: +50% Luck em Deploys de Sexta-feira.',
        'l6': 'Debug Duck (Versão Vaca): Para explicar o código até a vaca entender.',
        'l7': 'Cabo RJ45 de Aço: Aguenta pisão de boi e mordida de cachorro.',
        'l10': 'Queijo Canastra: Combustível sólido. Aumenta o foco em 200%.',
        'l11': 'Café (Combustível): Combustível líquido. Aumenta a ansiedade e a velocidade.'
    };

    if(lootBoxTrigger && lootDesc) {
        lootBoxTrigger.addEventListener('click', () => {
            // Toggle Open State
            lootBoxTrigger.classList.toggle('opened');
            
            if(lootBoxTrigger.classList.contains('opened')) {
                // Play Sound Effect (Visual text for now)
                lootDesc.textContent = "ITENS DESBLOQUEADOS: ISSO É O QUE VOCÊ IRÁ RECEBER AO ADQUIRIR O CURSO!";
                lootDesc.style.color = "var(--gold)";
                lootDesc.style.borderColor = "var(--gold)";
            } else {
                lootDesc.textContent = "Clique na caixa para receber seus equipamentos.";
                lootDesc.style.color = "#aaa";
                lootDesc.style.borderColor = "#555";
            }
        });

        // Hover interaction for individual items
        lootItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                if(lootBoxTrigger.classList.contains('opened')) {
                    // Get class list to identify item (l1, l2, etc)
                    const classList = item.classList;
                    let key = '';
                    if(classList.contains('l1')) key = 'l1';
                    if(classList.contains('l2')) key = 'l2';
                    if(classList.contains('l3')) key = 'l3';
                    if(classList.contains('l4')) key = 'l4';
                    if(classList.contains('l5')) key = 'l5';
                    if(classList.contains('l6')) key = 'l6';
                    if(classList.contains('l7')) key = 'l7';
                    if(classList.contains('l10')) key = 'l10';
                    if(classList.contains('l11')) key = 'l11';
                    
                    if(key && itemDescriptions[key]) {
                        lootDesc.textContent = itemDescriptions[key];
                        lootDesc.style.color = "var(--accent-lime)";
                    }
                }
            });
        });
    }

    // 3. Fake Enroll Button (Modo Carregamento Infinito)
    const btnBuyCourse = document.querySelector('.btn-buy-course');
    if(btnBuyCourse) {
        btnBuyCourse.addEventListener('click', () => {
            // Muda o texto para Carregando (com um ícone girando pra ficar chique)
            btnBuyCourse.innerHTML = '<i class="fas fa-spinner fa-spin"></i> CARREGANDO...';
            
            // Desabilita o botão
            btnBuyCourse.disabled = true;
            
            // Muda a cor para cinza (parecer desabilitado)
            btnBuyCourse.style.background = "#333";
            btnBuyCourse.style.cursor = "wait"; // Muda o cursor para "aguardando"
            
            // Removi o setTimeout, então ele vai ficar assim para sempre 
            // (ou até a pessoa desistir e recarregar a página).
        });
    }
    
// --- EFEITO DE DIGITAÇÃO DO MANIFESTO ---
    
    const manifestoSection = document.querySelector('.manifesto-terminal');
    const paragraphs = document.querySelectorAll('.manifesto-text');
    
    // Configuração de velocidade (quanto menor, mais rápido)
    const typeSpeed = 35; 

    // Função que digita um elemento preservando tags HTML
    function typeWriter(element, text, callback) {
        let i = 0;
        element.innerHTML = "";
        element.classList.add('visible'); // Torna visível
        element.classList.add('typing-cursor'); // Adiciona cursor

        function type() {
            if (i < text.length) {
                // Se encontrar uma tag HTML (<...), adiciona ela inteira de uma vez
                if (text.charAt(i) === '<') {
                    let tagEnd = text.indexOf('>', i);
                    element.innerHTML += text.substring(i, tagEnd + 1);
                    i = tagEnd + 1;
                    type(); // Chama recursivamente sem delay para tags
                } else {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, typeSpeed);
                }
            } else {
                // Terminou de digitar este parágrafo
                element.classList.remove('typing-cursor'); // Remove cursor
                if (callback) callback(); // Chama o próximo
            }
        }
        type();
    }

    // Função para gerenciar a fila de parágrafos
    function startManifestoTyping() {
        // Armazena o conteúdo original e limpa os parágrafos
        const contents = [];
        paragraphs.forEach(p => {
            contents.push(p.innerHTML);
            p.innerHTML = "";
        });

        // Função recursiva para digitar um parágrafo por vez
        function processParagraph(index) {
            if (index < paragraphs.length) {
                // Adiciona o cursor no parágrafo atual
                paragraphs[index].classList.add('typing-cursor');
                
                typeWriter(paragraphs[index], contents[index], () => {
                    processParagraph(index + 1);
                });
            }
        }

        // Começa o processo
        processParagraph(0);
    }

    // Observer para disparar apenas quando aparecer na tela
    let manifestoStarted = false;
    
    if(manifestoSection) {
        const observerManifesto = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !manifestoStarted) {
                    manifestoStarted = true;
                    startManifestoTyping();
                    observerManifesto.disconnect(); // Só roda uma vez
                }
            });
        }, { threshold: 0.3 }); // Começa quando 30% da seção estiver visível

        observerManifesto.observe(manifestoSection);
    }

function performSharedElementTransition() {
        if (!introWrapper || !finalLogoElement) return;

        // 1. Pegar coordenadas do Elemento Inicial (O logo grande no centro)
        const startRect = introWrapper.getBoundingClientRect();

        // 2. Pegar coordenadas do Elemento Final (O logo na navbar)
        // Precisamos garantir que o elemento final esteja visível para o cálculo, mas invisível para o olho
        // Como ele está com opacity: 0 via classe hidden-initially, o getBoundingClientRect funciona.
        const finalRect = finalLogoElement.getBoundingClientRect();

        // 3. Calcular a diferença de escala (Scale)
        // Usamos a altura como referência principal para texto
        // Nota: O SVG tem viewBox, então o cálculo é aproximado visualmente. 
        // Vamos calcular baseado na altura visual renderizada.
        
        // Ajuste fino: O SVG tem padding interno, o texto real é menor que a box.
        // Vamos usar uma escala baseada na proporção desejada.
        const scale = finalRect.height / startRect.height; 
        
        // 4. Calcular a diferença de Posição (Translate)
        // Precisamos compensar o fato de que ao escalar, o elemento encolhe para o centro.
        const startCenterX = startRect.left + startRect.width / 2;
        const startCenterY = startRect.top + startRect.height / 2;

        const finalCenterX = finalRect.left + finalRect.width / 2;
        const finalCenterY = finalRect.top + finalRect.height / 2;

        const deltaX = finalCenterX - startCenterX;
        const deltaY = finalCenterY - startCenterY;

        // 5. Aplicar a transição
        introWrapper.style.transition = 'transform 1s cubic-bezier(0.77, 0, 0.175, 1)';
        introWrapper.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;

        // 6. Fade out no fundo branco simultaneamente
        loader.classList.add('loader-finished');

        // 7. Limpeza pós-transição
        setTimeout(() => {
            // Mostra o logo real
            if(logoTrigger) {
                logoTrigger.classList.remove('hidden-initially');
                // Pequena animação de fade in para garantir suavidade
                logoTrigger.style.transition = 'opacity 0.2s'; 
                logoTrigger.style.opacity = '1';
            }

            // Remove o loader do DOM
            loader.style.display = 'none';
            
            // Libera o scroll
            document.body.classList.remove('loading-locked');

            // --- NOVO: CHECK DE EXPERIÊNCIA MOBILE ---
            // Verifica se a largura da tela é menor que 1024px (Tablets e Celulares)
            if (window.innerWidth < 1024) {
                const mobileWarning = document.getElementById('desktop-warning');
                const mwBtn = document.getElementById('mw-close-btn');
                
                if (mobileWarning && mwBtn) {
                    // Pequeno delay para não ser abrupto após a transição do logo
                    setTimeout(() => {
                        mobileWarning.classList.remove('hidden');
                        // Força reflow para ativar transição CSS
                        void mobileWarning.offsetWidth; 
                        mobileWarning.classList.add('active');
                        // Trava scroll novamente para garantir atenção
                        document.body.style.overflow = 'hidden';
                    }, 500);

                    // Lógica do Botão
                    mwBtn.addEventListener('click', () => {
                        mobileWarning.classList.remove('active');
                        document.body.style.overflow = ''; // Libera scroll
                        
                        setTimeout(() => {
                            mobileWarning.classList.add('hidden');
                        }, 500); // Espera a transição de fade out
                    });
                }
            }

        }, 1000); // 1s é o tempo da transição do transform
    }

// --- XP NAVBAR LOGIC (The Highlighter) ---
    const xpTrigger = document.getElementById('xp-trigger');
    const xpMenuOverlay = document.getElementById('xp-menu-overlay');
    const xpCloseBtn = document.getElementById('xp-close-btn');
    const xpLinks = document.querySelectorAll('.xp-link');

    if (xpTrigger && xpMenuOverlay) {
        
        // Abrir Menu
        xpTrigger.addEventListener('click', () => {
            // Animação de clique no botão antes de abrir
            xpTrigger.style.transform = "scale(0.9)";
            
            setTimeout(() => {
                xpTrigger.style.transform = "scale(1)";
                xpMenuOverlay.classList.add('active');
                document.body.style.overflow = "hidden"; // Bloqueia scroll do site
            }, 150);
        });

        // Fechar Menu
        const closeMenu = () => {
            xpMenuOverlay.classList.remove('active');
            document.body.style.overflow = ""; // Libera scroll
        };

        if (xpCloseBtn) {
            xpCloseBtn.addEventListener('click', closeMenu);
        }

        // Fechar ao clicar em um link
        xpLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Efeito visual ao clicar no link
                link.style.color = "var(--accent-lime)";
                setTimeout(closeMenu, 300); // Pequeno delay para ver o feedback
            });
        });

        // Fechar com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && xpMenuOverlay.classList.contains('active')) {
                closeMenu();
            }
        });
    }

// --- DATA SOURCE & INITIALIZATIONS (Keep existing logic) ---
    // [Omitting generic headlines/testimonials data for brevity, assume they exist as per original file]
    // ... [Original marquee, slider, cursor, scroll reveal code stays here] ...

    /* --- 1. ASTRONAUTA (ZERO GRAVITY) --- */
    const visualIcon = document.querySelector('.visual-icon');
    let cowInterval;

    // Create Modal HTML for Astronaut Alert
    const mestreModalHTML = `
        <div id="mestre-alert" class="mestre-alert-modal">
            <div class="mestre-alert-icon"></div>
            <h3>🚨 ALERTA DO MESTRE FAZENDEIRO</h3>
            <p>Eita! A gravidade desligou e as vacas foram pro brejo... espacial! <br></p>
            <button id="close-mestre-alert" class="btn-primary">ENTENDIDO</button>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', mestreModalHTML);
    const mestreAlert = document.getElementById('mestre-alert');
    const closeMestreBtn = document.getElementById('close-mestre-alert');

    if (closeMestreBtn) {
        closeMestreBtn.addEventListener('click', () => {
            mestreAlert.classList.remove('active');
        });
    }
    
    if (visualIcon) {
        visualIcon.style.cursor = "pointer";
        visualIcon.title = "Não clique no astronauta... (Perigo de Gravidade Zero)";

        visualIcon.addEventListener('click', () => {
            const body = document.body;
            body.classList.toggle('zero-gravity');

            if (body.classList.contains('zero-gravity')) {
                // Activate Zero Gravity
                
                // Show Alert
                setTimeout(() => mestreAlert.classList.add('active'), 500);

                // Start Cow Invasion Loop
                cowInterval = setInterval(() => {
                    const cow = document.createElement('div');
                    cow.textContent = "🐄";
                    cow.className = "cow-invasion";
                    
                    // Random Start Position
                    const startX = Math.random() * window.innerWidth;
                    const startY = Math.random() > 0.5 ? -50 : window.innerHeight + 50;
                    
                    cow.style.left = `${startX}px`;
                    cow.style.top = `${startY}px`;
                    
                    // Set CSS Variables for trajectory
                    const destX = (Math.random() - 0.5) * 200 + "vw";
                    const destY = (Math.random() - 0.5) * 200 + "vh";
                    const rotation = Math.random() * 720 + "deg";
                    
                    cow.style.setProperty('--tx', destX);
                    cow.style.setProperty('--ty', destY);
                    cow.style.setProperty('--r', rotation);
                    
                    // Randomize duration and size
                    cow.style.animationDuration = (Math.random() * 10 + 10) + "s";
                    cow.style.fontSize = (Math.random() * 2 + 1) + "rem";

                    document.body.appendChild(cow);

                    // Cleanup
                    setTimeout(() => cow.remove(), 20000);
                }, 800); // New cow every 800ms

            } else {
                // Deactivate
                mestreAlert.classList.remove('active');
                clearInterval(cowInterval);
                document.querySelectorAll('.cow-invasion').forEach(c => c.remove());
            }
        });
    }

    /* --- 2. RODAPÉ HACKER (CHEAT LIST) --- */
    const footerCopyright = document.querySelector('.footer-bottom p');
    
    if (footerCopyright) {
        // Change cursor via CSS is handled, verify content
        const tooltip = document.createElement('div');
        tooltip.className = 'hacker-tooltip';
        
        // List of 10 codes as requested
        tooltip.innerHTML = `
            <div class="ht-title">⚠️ LISTA DE CHEATS VAZADA</div>
            <ul class="ht-list">
                <li>MIMOSA (Minigame)</li>
                <li>HESOYAM (Riqueza?)</li>
                <li>AEZAKMI (Sem Bugs?)</li>
                <li>BAGUVIX (Imortal)</li>
                <li>ROCKETMAN (Jetpack)</li>
                <li>FULLCLIP (Munição)</li>
                <li>UZUMYMW (Armas)</li>
                <li>PROFESSIONAL (Skill)</li>
                <li>KANGAROO (Pulo)</li>
                <li>BUFFMEUP (Músculo)</li>
            </ul>
            <div style="margin-top:10px; font-size:0.7rem; color:#fff; border-top:1px dashed #0f0; padding-top:5px;">
                ⚠️ APENAS UM FUNCIONA. O RESTO É Lenda Urbana.
            </div>
        `;
        footerCopyright.appendChild(tooltip);
    }

    /* --- 3. CHEAT CODE ENGINE & FLAPPY COW --- */
    let keyBuffer = "";
    const cheatTimeout = 2000; 
    let lastKeyTime = Date.now();

    // Cheat Codes Definition
    const CHEATS = {
        'MIMOSA': { action: 'GAME', msg: 'TRAPAÇA ATIVADA: VOO BOVINO' },
        'HESOYAM': { action: 'FAKE', msg: 'ERRO: CONTA BANCÁRIA CONTINUA ZERADA' },
        'AEZAKMI': { action: 'FAKE', msg: 'ERRO: OS BUGS AINDA TE PERSEGUEM' },
        'BAGUVIX': { action: 'FAKE', msg: 'VOCÊ NÃO É IMORTAL, TOME CAFÉ.' },
        'ROCKETMAN': { action: 'FAKE', msg: 'JETPACK NÃO ENCONTRADA. USE O TRATOR.' },
        'FULLCLIP': { action: 'FAKE', msg: 'MUNIÇÃO DE CAFÉ INFINITA... TALVEZ.' }
    };

    document.addEventListener('keydown', (e) => {
        const currentTime = Date.now();
        
        // Input handling
        if (currentTime - lastKeyTime > cheatTimeout) {
            keyBuffer = "";
        }
        lastKeyTime = currentTime;

        // Filter letters
        if (/^[a-zA-Z]$/.test(e.key)) {
            const char = e.key.toUpperCase();
            keyBuffer += char;
            
            // GTA Style Floating Letter
            showFloatingLetter(char);
            
            // Check Cheats
            checkCheats();
        }
    });

    function showFloatingLetter(char) {
        // Remove existing to prevent clutter if typing fast? No, GTA stacks them.
        // Actually GTA replaces the previous text or appends.
        // Request says: "Mostre as letras digitadas flutuando no centro da tela".
        // Let's replace the center char to avoid mess.
        
        const existing = document.querySelector('.floating-char');
        if(existing) existing.remove();

        const el = document.createElement('div');
        el.className = 'floating-char';
        el.textContent = char;
        document.body.appendChild(el);

        // CSS animation handles fade out
        setTimeout(() => el.remove(), 2000);
    }

    function showCheatFeedback(text, isError = false) {
        const feedback = document.createElement('div');
        feedback.className = isError ? 'cheat-feedback error' : 'cheat-feedback';
        feedback.textContent = text;
        document.body.appendChild(feedback);
        
        // Simulate Sound (Visual only as per 'No external libs', can use Audio API but keeping simple)
        // console.log(isError ? "Sound: Error" : "Sound: Success");

        setTimeout(() => feedback.remove(), 4000);
    }

    function checkCheats() {
        for (const [code, data] of Object.entries(CHEATS)) {
            if (keyBuffer.includes(code)) {
                keyBuffer = ""; // Reset
                if (data.action === 'GAME') {
                    showCheatFeedback(data.msg);
                    openFlappyGame();
                } else {
                    showCheatFeedback(data.msg, true);
                }
                return;
            }
        }
    }

    /* --- FLAPPY COW MINIGAME --- */
    
    // Inject Modal HTML
    const gameHTML = `
        <div id="game-modal" class="game-modal-overlay">
            <div class="game-window">
                <div class="game-header">
                    <span>MIMOSA_FLIGHT.EXE - Windows 98</span>
                    <button id="close-game" class="game-close">X</button>
                </div>
                <canvas id="flappy-canvas" width="320" height="400"></canvas>
                <div class="game-instructions">
                    [ESPAÇO] ou [CLIQUE] para Voar<br>
                    Cuidado com os Servidores e Cercas!
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', gameHTML);

    const gameModal = document.getElementById('game-modal');
    const closeGameBtn = document.getElementById('close-game');
    const canvas = document.getElementById('flappy-canvas');
    const ctx = canvas.getContext('2d');

    let gameLoopId;
    let gameActive = false;
    let frames = 0;

    // Game Objects
    const cow = {
        x: 50,
        y: 150,
        w: 30,
        h: 30,
        velocity: 0,
        gravity: 0.25,
        jump: 4.5,
        draw: function() {
            ctx.font = "28px Arial";
            ctx.fillText("🐄", this.x, this.y + 25);
        },
        update: function() {
            this.velocity += this.gravity;
            this.y += this.velocity;

            if (this.y + this.h >= canvas.height) { // Floor
                this.y = canvas.height - this.h;
                gameOver("VACA FOI PRO BREJO!");
            }
            if (this.y < 0) { // Ceiling
                this.y = 0;
                this.velocity = 0;
            }
        },
        flap: function() {
            this.velocity = -this.jump;
        }
    };

    const obstacles = {
        items: [],
        w: 50,
        dx: 2,
        gap: 130,
        draw: function() {
            for(let i=0; i<this.items.length; i++) {
                let p = this.items[i];
                
                // TOP OBSTACLE: Server Rack
                ctx.fillStyle = "#222"; 
                ctx.fillRect(p.x, 0, this.w, p.top);
                // Server details (LEDs)
                for(let j=10; j < p.top; j+=20) {
                    ctx.fillStyle = (frames % 20 < 10) ? "#0f0" : "#050"; // Blinking green
                    ctx.fillRect(p.x + 5, j, 5, 5);
                    ctx.fillStyle = (Math.random() > 0.9) ? "#f00" : "#500"; // Random red blink
                    ctx.fillRect(p.x + 15, j, 5, 5);
                }
                // Label
                ctx.fillStyle = "#fff";
                ctx.font = "10px monospace";
                ctx.fillText("SERVER", p.x + 5, p.top - 5);

                // BOTTOM OBSTACLE: Fence
                ctx.fillStyle = "#5d4037"; // Wood post
                ctx.fillRect(p.x + 15, canvas.height - p.bottom, 20, p.bottom); // Post in middle
                
                // Barbed wires horizontal
                ctx.strokeStyle = "#silver";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(p.x, canvas.height - p.bottom + 20);
                ctx.lineTo(p.x + this.w, canvas.height - p.bottom + 20);
                ctx.moveTo(p.x, canvas.height - p.bottom + 50);
                ctx.lineTo(p.x + this.w, canvas.height - p.bottom + 50);
                ctx.stroke();
            }
        },
        update: function() {
            if (frames % 120 === 0) {
                let topHeight = Math.random() * (canvas.height - this.gap - 60) + 30; 
                let bottomHeight = canvas.height - this.gap - topHeight;
                this.items.push({ x: canvas.width, top: topHeight, bottom: bottomHeight });
            }

            for(let i=0; i<this.items.length; i++) {
                let p = this.items[i];
                p.x -= this.dx;

                // Collision
                // Bounding box approximation
                if (cow.x + cow.w - 5 > p.x && cow.x + 5 < p.x + this.w) {
                    if (cow.y + 5 < p.top || cow.y + cow.h - 5 > canvas.height - p.bottom) {
                        gameOver("SERVIDOR CAIU!");
                    }
                }

                if (p.x + this.w < 0) {
                    this.items.shift();
                    score.value++;
                }
            }
        }
    };

    const score = {
        value: 0,
        draw: function() {
            ctx.fillStyle = "#FFF";
            ctx.strokeStyle = "#000";
            ctx.lineWidth = 4;
            ctx.font = "40px Impact";
            ctx.strokeText(this.value, canvas.width/2 - 10, 50);
            ctx.fillText(this.value, canvas.width/2 - 10, 50);
        }
    };

    function resetGame() {
        cow.y = 150;
        cow.velocity = 0;
        obstacles.items = [];
        score.value = 0;
        frames = 0;
        gameActive = true;
        loop();
    }

    function gameOver(msg) {
        gameActive = false;
        ctx.fillStyle = "rgba(0,0,0,0.7)";
        ctx.fillRect(0,0,canvas.width, canvas.height);
        
        ctx.fillStyle = "red";
        ctx.font = "30px Impact";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2 - 20);
        
        ctx.fillStyle = "#fff";
        ctx.font = "16px monospace";
        ctx.fillText(msg, canvas.width/2, canvas.height/2 + 20);
        ctx.fillText("Press SPACE to Restart", canvas.width/2, canvas.height/2 + 50);
    }

    function loop() {
        if (!gameActive) return;

        // Background Sky
        ctx.fillStyle = "#87CEEB";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Ground
        ctx.fillStyle = "#4caf50";
        ctx.fillRect(0, canvas.height - 10, canvas.width, 10);

        obstacles.update();
        obstacles.draw();
        
        cow.update();
        cow.draw();
        
        score.draw();

        frames++;
        gameLoopId = requestAnimationFrame(loop);
    }

    function openFlappyGame() {
        gameModal.classList.add('active');
        resetGame();
    }

    // Input Handling
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && gameModal.classList.contains('active')) {
            e.preventDefault();
            if (gameActive) cow.flap();
            else resetGame();
        }
        if (e.key === 'Escape') {
            gameModal.classList.remove('active');
            gameActive = false;
        }
    });

    canvas.addEventListener('mousedown', (e) => {
        e.preventDefault();
        if (gameActive) cow.flap();
        else resetGame();
    });

    if (closeGameBtn) {
        closeGameBtn.addEventListener('click', () => {
            gameModal.classList.remove('active');
            gameActive = false;
            cancelAnimationFrame(gameLoopId);
        });
    }

// ... [EXISTING JS CODE] ...

    /* --- MULTIVERSE OF VISUALIZATIONS LOGIC --- */
    
    // Elements
    const body = document.body;
    const multiverseBtn = document.getElementById('multiverse-btn');
    const multiverseMenu = document.getElementById('multiverse-menu');
    const closeMultiverseBtn = document.getElementById('close-multiverse');
    const modeButtons = document.querySelectorAll('.mode-card');
    
    // Overlay Elements
    const flashOverlay = document.getElementById('flashlight-overlay');
    const vhsOverlay = document.getElementById('vhs-overlay');
    const vhsTime = document.getElementById('vhs-time');
    const matrixCanvas = document.getElementById('matrix-canvas');
    const toast = document.getElementById('multiverse-toast');
    
    // State
    let currentMode = null;
    let matrixInterval;
    let vhsInterval;
    let nightInterval;

    // Toast Function
    function showToast(msg, icon = "✅") {
        if (!toast) return;
        toast.querySelector('.toast-icon').textContent = icon;
        toast.querySelector('.toast-msg').textContent = msg;
        toast.classList.remove('hidden');
        
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }

    // Toggle Menu
    if (multiverseBtn && multiverseMenu) {
        multiverseBtn.addEventListener('click', () => {
            multiverseMenu.classList.remove('hidden');
        });
        
        if (closeMultiverseBtn) {
            closeMultiverseBtn.addEventListener('click', () => {
                multiverseMenu.classList.add('hidden');
            });
        }
        
        // Close on background click
        multiverseMenu.addEventListener('click', (e) => {
            if(e.target === multiverseMenu) multiverseMenu.classList.add('hidden');
        });
    }

    // --- MODE ACTIVATION LOGIC ---
    
    function activateMode(mode) {
        // 1. Reset everything first
        body.className = ''; // Remove all mode classes (and utilities, be careful)
        // Add back 'loading-locked' if needed or other base classes? 
        // Better: Remove only classes starting with 'mode-'
        body.classList.forEach(cls => {
            if (cls.startsWith('mode-')) body.classList.remove(cls);
        });
        
        // Hide Overlays
        flashOverlay.classList.add('hidden');
        vhsOverlay.classList.add('hidden');
        matrixCanvas.classList.add('hidden');
        
        // Stop Intervals
        if (matrixInterval) clearInterval(matrixInterval);
        if (vhsInterval) clearInterval(vhsInterval);
        if (nightInterval) clearInterval(nightInterval);
        
        // Remove Event Listeners (Night mode)
        document.removeEventListener('mousemove', moveFlashlight);

        // 2. Apply New Mode
        if (mode === 'reset') {
            showToast("Realidade Restaurada", "🔄");
            currentMode = null;
            return;
        }

        body.classList.add(`mode-${mode}`);
        currentMode = mode;
        multiverseMenu.classList.add('hidden'); // Close menu

        // 3. Mode Specific Logic
        switch (mode) {
            case 'night':
                initNightMode();
                showToast("Cuidado com o Bug-Papão...", "🔦");
                break;
            case '1914':
                showToast("Aqui é Verdão", "Verdão");
                break;
            case 'matrix':
                initMatrixMode();
                showToast("Entrando na Mainframe...", "📟");
                break;
            case 'glitch':
                showToast("SISTEMA INSTÁVEL", "😵");
                break;
            case 'dog':
                showToast("Au au! (Modo Ativado)", "🐶");
                break;
            case 'win95':
                showToast("Bem-vindo ao Windows 95", "💾");
                break;
            case 'caffeine':
                showToast("120 BPM! VAMODALE!", "☕");
                break;
            case 'thermal':
                showToast("Escaneando Inflamações...", "🌡️");
                break;
            case 'ascii':
                showToast("Renderização Gráfica: OFF", "🔡");
                break;
            case 'blueprint':
                showToast("Visualizando DOM", "📐");
                break;
            case 'vhs':
                initVHSMode();
                showToast("Injetando Fita...", "📼");
                break;
            case 'sketch':
                showToast("Modo Rascunho Ativado", "📝");
                break;
        }
    }

    // --- MODE SPECIFIC FUNCTIONS ---

    // 1. NIGHT MODE (Flashlight)
    function moveFlashlight(e) {
        const x = e.clientX;
        const y = e.clientY;
        flashOverlay.style.setProperty('--x', x + 'px');
        flashOverlay.style.setProperty('--y', y + 'px');
    }

    function initNightMode() {
        flashOverlay.classList.remove('hidden');
        document.addEventListener('mousemove', moveFlashlight);
        
        // Random Spooky Eyes Logic
        nightInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                const eye = document.createElement('div');
                eye.className = 'spooky-eye';
                eye.textContent = '👀';
                eye.style.left = Math.random() * window.innerWidth + 'px';
                eye.style.top = Math.random() * window.innerHeight + 'px';
                document.body.appendChild(eye);
                
                // If flashlight is near, hide eye
                // (Simplified: just fade in and out)
                setTimeout(() => eye.classList.add('revealed'), 100);
                setTimeout(() => {
                    eye.classList.remove('revealed');
                    setTimeout(() => eye.remove(), 500);
                }, 2000);
            }
        }, 3000);
    }

    // 2. MATRIX MODE (Canvas Rain)
    function initMatrixMode() {
        matrixCanvas.classList.remove('hidden');
        const ctx = matrixCanvas.getContext('2d');
        
        // Resize
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        
        const chars = "01🐄🚜🌽☕";
        const fontSize = 16;
        const columns = matrixCanvas.width / fontSize;
        const drops = [];
        
        for (let x = 0; x < columns; x++) drops[x] = 1;

        function drawMatrix() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            
            ctx.fillStyle = "#0F0";
            ctx.font = fontSize + "px monospace";
            
            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        matrixInterval = setInterval(drawMatrix, 50);
    }

    // 3. VHS MODE (Timer)
    function initVHSMode() {
        vhsOverlay.classList.remove('hidden');
        
        function updateTime() {
            const now = new Date();
            if(vhsTime) vhsTime.textContent = now.toLocaleTimeString();
        }
        
        vhsInterval = setInterval(updateTime, 1000);
        updateTime();
    }

    // Attach Click Listeners
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.getAttribute('data-mode');
            activateMode(mode);
        });
    });

// ... [END OF SCRIPT] ...

    

// --- LÓGICA DO CARROSSEL INFINITO ---
    const scrollers = document.querySelectorAll(".marquee-row");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            // Seleciona a trilha interna
            const scrollerInner = scroller.querySelector(".marquee-track");
            
            // Pega o conteúdo original (array de filhos)
            const scrollerContent = Array.from(scrollerInner.children);

            // Para cada item, cria um clone e adiciona ao final
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                // Opcional: marcar como clone se precisar estilizar diferente
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }


   // --- LÓGICA DO CARROSSEL DA FEIRA DO MESTRE ---
    const aisleTrack = document.getElementById('aisle-track');
    const aisleNext = document.getElementById('aisle-next');
    const aislePrev = document.getElementById('aisle-prev');
    const aisleTabs = document.querySelectorAll('.aisle-tab');
    let currentAisle = 0;
    const totalAisles = 4;

    function updateAisleCarousel() {
        // Move o track para a esquerda (negativo) baseado no índice atual
        // 0 = 0%, 1 = -100%, 2 = -200%
        aisleTrack.style.transform = `translateX(-${currentAisle * 100}%)`;

        // Atualiza estado dos botões
        if (aislePrev) aislePrev.classList.toggle('disabled', currentAisle === 0);
        if (aisleNext) aisleNext.classList.toggle('disabled', currentAisle === totalAisles - 1);

        // Atualiza abas
        aisleTabs.forEach((tab, index) => {
            if (parseInt(tab.dataset.target) === currentAisle) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

    if (aisleNext && aislePrev) {
        aisleNext.addEventListener('click', () => {
            if (currentAisle < totalAisles - 1) {
                currentAisle++;
                updateAisleCarousel();
            }
        });

        aislePrev.addEventListener('click', () => {
            if (currentAisle > 0) {
                currentAisle--;
                updateAisleCarousel();
            }
        });

        // Clique nas abas
        aisleTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                currentAisle = parseInt(tab.dataset.target);
                updateAisleCarousel();
            });
        });
    }
    
    // --- EASTER EGG: LÂMPADA DO RODAPÉ ---
    const footerLamp = document.getElementById('footer-lamp');
    
    if (footerLamp) {
        footerLamp.addEventListener('click', () => {
            // Alterna a classe 'lamp-on' no container principal
            footerLamp.classList.toggle('lamp-on');
            
            // Opcional: Adiciona um efeito sonoro de interruptor (se você quiser no futuro)
            // const clickSound = new Audio('path/to/switch-sound.mp3');
            // clickSound.play();
        });
    }

});

