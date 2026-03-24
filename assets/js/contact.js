/* ============================================
   Contact Form Handler - Secure & Interactive
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // WhatsApp Contact Button
    const whatsappBtn = document.getElementById('whatsappContactBtn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            window.open('https://wa.me/919302163501?text=Hello%20Dev%2C%20I%20want%20to%20start%20investing%20and%20need%20expert%20guidance.', '_blank');
            
            // Show success feedback
            showToast('Redirecting to WhatsApp...');
        });
    }
    
    // Contact Form Submission
    const submitBtn = document.getElementById('submitContactBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            handleFormSubmission();
        });
    }
    
    // Real-time validation on input
    const nameInput = document.getElementById('contactName');
    const phoneInput = document.getElementById('contactPhone');
    const emailInput = document.getElementById('contactEmail');
    
    if (nameInput) {
        nameInput.addEventListener('input', () => validateName(nameInput.value));
    }
    
    if (phoneInput) {
        phoneInput.addEventListener('input', () => validatePhone(phoneInput.value));
    }
    
    if (emailInput) {
        emailInput.addEventListener('input', () => validateEmail(emailInput.value));
    }
    
    // Enter key submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                handleFormSubmission();
            }
        });
    }
});

/* ============================================
   Handle Form Submission
   ============================================ */
function handleFormSubmission() {
    const name = document.getElementById('contactName')?.value.trim() || '';
    const phone = document.getElementById('contactPhone')?.value.trim() || '';
    const email = document.getElementById('contactEmail')?.value.trim() || '';
    const interest = document.getElementById('contactInterest')?.value || '';
    const message = document.getElementById('contactMsg')?.value.trim() || '';
    
    // Validation
    let isValid = true;
    
    if (!validateName(name)) {
        showError('contactName', 'Please enter your full name (min 2 characters)');
        isValid = false;
    } else {
        clearError('contactName');
    }
    
    if (!validatePhone(phone)) {
        showError('contactPhone', 'Please enter a valid 10-digit mobile number');
        isValid = false;
    } else {
        clearError('contactPhone');
    }
    
    if (email && !validateEmail(email)) {
        showError('contactEmail', 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError('contactEmail');
    }
    
    if (!isValid) {
        showToast('Please fix the errors above', true);
        return;
    }
    
    // Send WhatsApp message
    sendWhatsAppMessage(name, phone, email, interest, message);
    
    // Reset form (optional)
    // document.getElementById('contactForm')?.reset();
}

/* ============================================
   Validate Name
   ============================================ */
function validateName(name) {
    if (!name) return false;
    const nameRegex = /^[a-zA-Z\s\u0600-\u06FF\u0900-\u097F\u4e00-\u9fa5]{2,50}$/;
    return nameRegex.test(name);
}

/* ============================================
   Validate Phone (Indian Mobile)
   ============================================ */
function validatePhone(phone) {
    if (!phone) return false;
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
}

/* ============================================
   Validate Email
   ============================================ */
function validateEmail(email) {
    if (!email) return true; // Email is optional
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    return emailRegex.test(email);
}

/* ============================================
   Show Error Message
   ============================================ */
function showError(inputId, message) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    input.style.borderColor = '#dc3545';
    
    const errorDiv = document.getElementById(`${inputId}Error`);
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }
}

/* ============================================
   Clear Error Message
   ============================================ */
function clearError(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        input.style.borderColor = '#eef2f6';
    }
    
    const errorDiv = document.getElementById(`${inputId}Error`);
    if (errorDiv) {
        errorDiv.style.display = 'none';
        errorDiv.textContent = '';
    }
}

/* ============================================
   Send WhatsApp Message
   ============================================ */
function sendWhatsAppMessage(name, phone, email, interest, message) {
    const phoneNumber = "919302163501";
    
    let whatsappMessage = `*NEW ENQUIRY FROM PORTFOLIO*%0A`;
    whatsappMessage += `%0A`;
    whatsappMessage += `*📋 Client Details:*%0A`;
    whatsappMessage += `*Name:* ${encodeURIComponent(name)}%0A`;
    whatsappMessage += `*Mobile:* ${encodeURIComponent(phone)}%0A`;
    
    if (email) {
        whatsappMessage += `*Email:* ${encodeURIComponent(email)}%0A`;
    }
    
    if (interest && interest !== '') {
        whatsappMessage += `*Interest:* ${encodeURIComponent(interest)}%0A`;
    }
    
    if (message) {
        whatsappMessage += `%0A*📝 Message:*%0A${encodeURIComponent(message)}%0A`;
    }
    
    whatsappMessage += `%0A*🔔 Action:* Requesting expert advice from Dev Sevaiwar (NJ Wealth Partner).`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
    
    // Show success message
    showToast('✓ Redirecting to WhatsApp...', false);
}

/* ============================================
   Show Toast Notification
   ============================================ */
function showToast(message, isError = false) {
    // Remove existing toast if any
    const existingToast = document.getElementById('customToast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.id = 'customToast';
    toast.innerHTML = `
        <i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Toast styles
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: ${isError ? '#dc3545' : '#10B981'};
        color: white;
        padding: 12px 24px;
        border-radius: 12px;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: 'Inter', sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideInRight 0.3s ease;
        cursor: pointer;
    `;
    
    // Add animation styles if not exists
    if (!document.getElementById('toastAnimations')) {
        const style = document.createElement('style');
        style.id = 'toastAnimations';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
    
    // Click to dismiss
    toast.addEventListener('click', () => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            toast.remove();
        }, 300);
    });
}