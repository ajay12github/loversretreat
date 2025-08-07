// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 8px 25px rgba(212, 166, 169, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 15px rgba(212, 166, 169, 0.1)';
    }
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const sectionTop = section.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Add click event listeners to nav links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Mobile hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// WhatsApp Popup functionality
function openWhatsAppPopup() {
    const popup = document.getElementById('whatsappPopup');
    if (popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeWhatsAppPopup() {
    const popup = document.getElementById('whatsappPopup');
    if (popup) {
        popup.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close popup when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const whatsappPopup = document.getElementById('whatsappPopup');
    if (whatsappPopup) {
        whatsappPopup.addEventListener('click', function(e) {
            if (e.target === whatsappPopup) {
                closeWhatsAppPopup();
            }
        });
    }
    
    const instagramPopup = document.getElementById('instagramPopup');
    if (instagramPopup) {
        instagramPopup.addEventListener('click', function(e) {
            if (e.target === instagramPopup) {
                closeInstagramPopup();
            }
        });
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeWhatsAppPopup();
        closeInstagramPopup();
    }
});

// WhatsApp redirect function
function redirectToWhatsApp() {
    // Replace 'xxxxxxxxxx' with your actual WhatsApp number (with country code, without + symbol)
    // Example: For +91 9876543210, use 919876543210
    const whatsappNumber = 'xxxxxxxxxx'; // Replace with your WhatsApp number
    const message = encodeURIComponent('Hi, I would like to book a room at Lover\'s Retreat. Could you please share the availability and confirm the booking?');
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Close the popup
    closeWhatsAppPopup();
}

// Instagram Popup functionality
function openInstagramPopup() {
    const popup = document.getElementById('instagramPopup');
    if (popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeInstagramPopup() {
    const popup = document.getElementById('instagramPopup');
    if (popup) {
        popup.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Instagram redirect function
function redirectToInstagram() {
    // Replace 'your_instagram_username' with your actual Instagram username
    const instagramUsername = 'loversretreat'; // Replace with your Instagram username
    const instagramURL = `https://www.instagram.com/${instagramUsername}`;
    
    // Open Instagram in a new tab
    window.open(instagramURL, '_blank');
    
    // Close the popup
    closeInstagramPopup();
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Validate form
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // You can integrate with a form service like Formspree, Netlify Forms, or send via WhatsApp
            // For now, we'll show a success message and redirect to WhatsApp
            alert('Thank you for your message! We\'ll redirect you to WhatsApp for quick response.');
            
            // Create WhatsApp message with form data
            const whatsappMessage = encodeURIComponent(`Hi, I'm ${name} (${email}). ${message}`);
            const whatsappNumber = '7073364286'; // Replace with your WhatsApp number
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Reset form
            this.reset();
        });
    }
});

// Pricing card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add subtle animation or effect if needed
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Intersection Observer for navbar highlight
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current nav link
                const currentNavLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (currentNavLink) {
                    currentNavLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Testimonials carousel (if you want to add auto-scroll functionality)
document.addEventListener('DOMContentLoaded', function() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    // Add stagger animation delays for testimonials
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 200}ms`;
    });
});

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Hero background parallax effect (subtle)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        const rate = scrolled * -0.5;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Button click animations
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Performance optimization - lazy load images
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }
});

// Scroll to top functionality (if needed)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add WhatsApp floating button (replaces scroll to top)
document.addEventListener('DOMContentLoaded', function() {
    // Create WhatsApp floating button
    const whatsappBtn = document.createElement('button');
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.className = 'whatsapp-float-btn';
    whatsappBtn.onclick = openWhatsAppPopup;
    whatsappBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: #25D366;
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        animation: pulse 2s infinite;
    `;
    
    // Add pulse animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% {
                box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }
            50% {
                box-shadow: 0 4px 20px rgba(37, 211, 102, 0.6), 0 0 0 10px rgba(37, 211, 102, 0.1);
            }
            100% {
                box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(whatsappBtn);
    
    // Show/hide WhatsApp button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            whatsappBtn.style.opacity = '1';
            whatsappBtn.style.visibility = 'visible';
        } else {
            whatsappBtn.style.opacity = '0';
            whatsappBtn.style.visibility = 'hidden';
        }
    });
    
    whatsappBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    whatsappBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Error handling for external resources
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.log('Image failed to load:', e.target.src);
        // You could set a fallback image here
        // e.target.src = 'path/to/fallback-image.jpg';
    }
});

// Console message for developers
console.log(`
🌹 Lover's Retreat Website 🌹
Created with love for couples seeking cozy escapes.

To customize this website:
1. Replace 'xxxxxxxxxx' in script.js with your WhatsApp number
2. Update the email address in the contact section
3. Add your own images to replace the placeholder URLs
4. Customize colors in the CSS :root variables

Need help? Feel free to reach out!
`);

// Additional utility functions
const utils = {
    // Smooth scroll to element
    scrollToElement: function(element, offset = 0) {
        const targetPosition = element.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    },
    
    // Debounce function for performance
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Format phone number for WhatsApp
    formatPhoneNumber: function(number) {
        // Remove all non-digit characters
        return number.replace(/\D/g, '');
    }
};

// Export utils for other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = utils;
}
