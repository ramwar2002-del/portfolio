/* ============================================
   Main JavaScript - Complete Interactive Features
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 80,
        easing: 'ease-in-out',
        disable: window.innerWidth < 768 ? true : false
    });
    
    // Load Header Component
    loadHeader();
    
    // Load Footer Component
    loadFooter();
    
    // Load Mutual Funds Data
    loadMutualFunds();
    
    // Load Testimonials Data
    loadTestimonials();
    
    // Initialize Counter Animation
    initCounters();
    
    // Initialize Testimonial Swiper
    initTestimonialSwiper();
    
    // Initialize Navbar Scroll Effect
    initNavbarScroll();
    
    // Initialize Smooth Scroll
    initSmoothScroll();
    
    // Initialize Navbar Active State
    initNavbarActive();
    
    // Add Fund Card Click Handlers
    initFundCardHandlers();
    
    // Add Service Card Interactions
    initServiceCards();
    
});

/* ============================================
   Load Header Component
   ============================================ */
function loadHeader() {
    const headerElement = document.getElementById('header');
    if (headerElement) {
        headerElement.innerHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <div class="logo" onclick="window.location.href='#home'">
                        <div class="logo-circle"><img src="images/profile/dev-profile.png" alt="Profile" class="profile-img"></div>
                        
                        <div>
                            <h1>Dev Sevaiwar</h1>
                            <p>Mutual Fund Advisor | NJ Wealth</p>
                        </div>
                    </div>
                    <div class="nav-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#funds">Funds</a>
                        <a href="#testimonials">Reviews</a>
                        <a href="#contact" class="nav-cta">Start Investing</a>
                    </div>
                </div>
            </nav>
        `;
    }
}

/* ============================================
   Load Footer Component
   ============================================ */
function loadFooter() {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.innerHTML = `
            <footer class="footer">
                <div class="footer-content">
                    <div>
                        <h3 style="color: white; margin-bottom: 16px;">Dev Sevaiwar</h3>
                        <p>Mutual Fund Advisor | NJ Wealth Partner</p>
                        <p>SEBI Registered | 5+ Years Experience</p>
                        <p>AMFI Certified | IRDA Licensed</p>
                    </div>
                    <div>
                        <h3 style="color: white; margin-bottom: 16px;">Quick Links</h3>
                        <p><a href="#home">Home</a></p>
                        <p><a href="#about">About</a></p>
                        <p><a href="#services">Services</a></p>
                        <p><a href="#funds">Mutual Funds</a></p>
                        <p><a href="#testimonials">Testimonials</a></p>
                        <p><a href="#contact">Contact</a></p>
                    </div>
                    <div>
                        <h3 style="color: white; margin-bottom: 16px;">Services</h3>
                        <p><a href="#services">Mutual Funds</a></p>
                        <p><a href="#services">Health Insurance</a></p>
                        <p><a href="#services">Loans</a></p>
                        <p><a href="#services">Stock Investments</a></p>
                    </div>
                    <div>
                        <h3 style="color: white; margin-bottom: 16px;">Connect With Me</h3>
                        <div class="social-links">
                            <a href="https://wa.me/919028303435" target="_blank" aria-label="WhatsApp">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://www.instagram.com/dev_sevaiwar/?hl=en" target="_blank" aria-label="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" target="_blank" aria-label="LinkedIn">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="mailto:devsevaiwar@gmail.com" aria-label="Email">
                                <i class="far fa-envelope"></i>
                            </a>
                        </div>
                        <p style="margin-top: 16px;">
                            <i class="fas fa-phone-alt"></i> +91 9028303435<br>
                            <i class="far fa-envelope"></i> devsevaiwar@gmail.com
                        </p>
                    </div>
                </div>
                <hr style="margin: 32px 0 20px; border-color: #2d3748;">
                <p style="text-align: center; font-size: 0.75rem;">
                    © 2024 Dev Sevaiwar - Mutual Fund Advisor, NJ Wealth. All rights reserved.
                </p>
                <p style="text-align: center; font-size: 0.7rem; margin-top: 8px;">
                    Mutual Fund investments are subject to market risks | Read all scheme related documents carefully
                </p>
            </footer>
        `;
    }
}

/* ============================================
   Load Mutual Funds Data
   ============================================ */
function loadMutualFunds() {
    const fundsGrid = document.getElementById('fundsGrid');
    if (!fundsGrid) return;
    
    const fundsData = [
        {
            name: "SBI Bluechip Fund",
            description: "Large Cap Fund",
            return: "14.2%",
            logo: "images/logos/sbi-logo.png",
            fallbackLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/SBI_logo.svg/1200px-SBI_logo.svg.png"
        },
        {
            name: "Nippon India Small Cap",
            description: "Small Cap Fund",
            return: "22.8%",
            logo: "images/logos/nippon-logo.png",
            fallbackLogo: "https://companieslogo.com/img/orig/NIPPON.NS_BIG-9c2b9d10.png"
        },
        {
            name: "HDFC Balanced Advantage",
            description: "Dynamic Asset Allocation",
            return: "11.5%",
            logo: "images/logos/hdfc-logo.png",
            fallbackLogo: "https://logoeps.com/wp-content/uploads/2014/02/HDFC-bank-logo-vector-01.png"
        },
        {
            name: "ICICI Pru Value Discovery",
            description: "Value Fund",
            return: "18.3%",
            logo: "images/logos/icici-logo.png",
            fallbackLogo: "https://logoeps.com/wp-content/uploads/2011/07/icici-bank-logo-vector.png"
        },
        {
            name: "Kotak Emerging Equity",
            description: "Mid Cap Fund",
            return: "16.7%",
            logo: "images/logos/kotak-logo.png",
            fallbackLogo: "https://logoeps.com/wp-content/uploads/2013/05/kotak-mahindra-bank-logo-vector.png"
        },
        {
            name: "Axis Growth Opportunities",
            description: "Large & Mid Cap",
            return: "13.9%",
            logo: "images/logos/axis-logo.png",
            fallbackLogo: "https://logoeps.com/wp-content/uploads/2012/06/axis-bank-logo-vector.png"
        }
    ];
    
    fundsGrid.innerHTML = fundsData.map((fund, index) => `
        <div class="fund-card" data-fund-name="${fund.name}" data-aos="fade-up" data-aos-delay="${index * 100}">
            <img src="${fund.logo}" 
                 alt="${fund.name}" 
                 class="fund-logo" 
                 onerror="this.src='${fund.fallbackLogo}'">
            <h3>${fund.name}</h3>
            <p>${fund.description}</p>
            <span class="fund-return">1Y Return: ${fund.return}</span>
        </div>
    `).join('');
}

/* ============================================
   Load Testimonials Data
   ============================================ */
function loadTestimonials() {
    const testimonialsWrapper = document.getElementById('testimonialsWrapper');
    if (!testimonialsWrapper) return;
    
    const testimonialsData = [
        {
            name: "Rajesh Kumar",
            initials: "RK",
            rating: 5,
            text: "Dev helped me plan my retirement portfolio. His expertise in mutual funds is outstanding. My investments have grown 25% in just 2 years! Highly recommended for anyone looking for genuine financial advice."
        },
        {
            name: "Priya Sharma",
            initials: "PS",
            rating: 5,
            text: "Started with just ₹500 SIP. Dev guided me through the process patiently and now I have a diversified portfolio. He explains everything in simple terms. Best financial advisor I've worked with!"
        },
        {
            name: "Amit Mehta",
            initials: "AM",
            rating: 5,
            text: "Professional, transparent, and always available. Dev's advice on health insurance saved my family during a medical emergency. Grateful for his timely guidance and support."
        },
        {
            name: "Sunita Nair",
            initials: "SN",
            rating: 5,
            text: "Best financial advisor I've ever met. He takes time to understand your goals and suggests the best options. My portfolio has shown consistent growth under his guidance."
        },
        {
            name: "Vikram Singh",
            initials: "VS",
            rating: 5,
            text: "Excellent service and timely advice. Dev is always available to answer queries and provides regular portfolio updates. Very satisfied with his services."
        },
        {
            name: "Neha Gupta",
            initials: "NG",
            rating: 5,
            text: "Very knowledgeable and patient advisor. Helped me understand mutual funds and start my investment journey. Highly trustworthy and professional."
        }
    ];
    
    const stars = '★'.repeat(5);
    
    testimonialsWrapper.innerHTML = testimonialsData.map(testimonial => `
        <div class="swiper-slide">
            <div class="testimonial-card">
                <div class="testimonial-avatar">${testimonial.initials}</div>
                <h3>${testimonial.name}</h3>
                <p style="color: #FF9900; margin: 8px 0;">${stars}</p>
                <p>"${testimonial.text}"</p>
            </div>
        </div>
    `).join('');
}

/* ============================================
   Initialize Counter Animation
   ============================================ */
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    };
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

/* ============================================
   Initialize Testimonial Swiper
   ============================================ */
function initTestimonialSwiper() {
    setTimeout(() => {
        if (typeof Swiper !== 'undefined') {
            new Swiper('.testimonials-swiper', {
                slidesPerView: 1,
                spaceBetween: 24,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                loop: true,
                speed: 800,
                effect: 'slide'
            });
        }
    }, 500);
}

/* ============================================
   Initialize Navbar Scroll Effect
   ============================================ */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ============================================
   Initialize Smooth Scroll
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#" || targetId === "") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
}

/* ============================================
   Initialize Navbar Active State
   ============================================ */
function initNavbarActive() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ============================================
   Initialize Fund Card Handlers
   ============================================ */
function initFundCardHandlers() {
    setTimeout(() => {
        const fundCards = document.querySelectorAll('.fund-card');
        fundCards.forEach(card => {
            card.addEventListener('click', () => {
                const fundName = card.getAttribute('data-fund-name') || 
                                card.querySelector('h3')?.innerText || 
                                'Mutual Fund';
                const message = `Hello Dev, I'm interested in ${encodeURIComponent(fundName)} fund. Please guide me with investment details.`;
                window.open(`https://wa.me/919302163501?text=${message}`, '_blank');
            });
        });
    }, 500);
}

/* ============================================
   Initialize Service Cards
   ============================================ */
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceName = card.querySelector('h3')?.innerText || 'Financial Service';
            const message = `Hello Dev, I'm interested in learning more about ${encodeURIComponent(serviceName)}. Please guide me.`;
            window.open(`https://wa.me/919028303435?text=${message}`, '_blank');
        });
    });
}

/* ============================================
   Console Log for Development
   ============================================ */
console.log('✅ Portfolio website loaded successfully');
console.log('📁 Assets loaded from structured folders');
console.log('🎨 Interactive features initialized');