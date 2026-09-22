/**
 * Arogya Dental Clinic - Main JavaScript Logic
 * Falgunanda Chowk, Damak-1, Jhapa, Nepal
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileMenu = () => {
    mobileMenu.classList.remove('translate-x-full');
    mobileBackdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.add('translate-x-full');
    mobileBackdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 2. Set min date for Appointment Date picker to today
  const appointmentDateInput = document.getElementById('appointment-date');
  if (appointmentDateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    appointmentDateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  // 3. Quick Service Booking Buttons in Service Cards
  const bookServiceBtns = document.querySelectorAll('.book-service-btn');
  const serviceSelect = document.getElementById('service-select');
  const appointmentFormSection = document.getElementById('book-appointment');

  bookServiceBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service');
      if (serviceSelect && serviceName) {
        serviceSelect.value = serviceName;
      }
      if (appointmentFormSection) {
        appointmentFormSection.scrollIntoView({ behavior: 'smooth' });
        // Flash subtle highlight around form
        const formCard = document.getElementById('appointment-form-card');
        if (formCard) {
          formCard.classList.add('ring-4', 'ring-teal-400', 'transition-all', 'duration-300');
          setTimeout(() => {
            formCard.classList.remove('ring-4', 'ring-teal-400');
          }, 1200);
        }
        // Focus on name input
        const nameInput = document.getElementById('patient-name');
        if (nameInput) setTimeout(() => nameInput.focus(), 600);
      }
    });
  });

  // 4. Nepal Phone Validation Helper
  // Accepts standard 10-digit Nepal mobile numbers (starts with 97 or 98) with optional +977 prefix
  const nepalPhoneRegex = /^(?:(?:\+?977[- ]?)?)?(9[678]\d{8})$/;
  const phoneInput = document.getElementById('patient-phone');
  const phoneError = document.getElementById('phone-error');

  if (phoneInput && phoneError) {
    phoneInput.addEventListener('input', () => {
      const val = phoneInput.value.trim().replace(/[- ]/g, '');
      if (val.length > 0) {
        if (!nepalPhoneRegex.test(val)) {
          phoneError.classList.remove('hidden');
          phoneInput.classList.add('border-red-400', 'focus:ring-red-300');
        } else {
          phoneError.classList.add('hidden');
          phoneInput.classList.remove('border-red-400', 'focus:ring-red-300');
          phoneInput.classList.add('border-teal-500');
        }
      } else {
        phoneError.classList.add('hidden');
        phoneInput.classList.remove('border-red-400', 'border-teal-500');
      }
    });
  }

  // 5. Appointment Form Submission & Modal Handling
  const appointmentForm = document.getElementById('appointment-form');
  const confirmationModal = document.getElementById('confirmation-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalWhatsappBtn = document.getElementById('modal-whatsapp-btn');

  let currentBookingDetails = null;

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('patient-name').value.trim();
      const rawPhone = document.getElementById('patient-phone').value.trim();
      const email = document.getElementById('patient-email').value.trim();
      const date = document.getElementById('appointment-date').value;
      const slot = document.getElementById('appointment-slot').value;
      const service = document.getElementById('service-select').value;
      const notes = document.getElementById('patient-notes').value.trim();

      // Clean phone number
      const cleanPhone = rawPhone.replace(/[- ]/g, '');
      if (!nepalPhoneRegex.test(cleanPhone)) {
        if (phoneError) phoneError.classList.remove('hidden');
        if (phoneInput) {
          phoneInput.focus();
          phoneInput.classList.add('border-red-400');
        }
        alert('Please enter a valid 10-digit Nepal mobile number (e.g., 9801109099).');
        return;
      }

      // Generate Reference Code
      const refCode = 'ADC-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);

      currentBookingDetails = {
        refCode,
        name,
        phone: cleanPhone,
        email: email || 'Not provided',
        date,
        slot,
        service,
        notes: notes || 'None'
      };

      // Populate Modal Fields
      document.getElementById('modal-ref').textContent = refCode;
      document.getElementById('modal-name').textContent = name;
      document.getElementById('modal-phone').textContent = cleanPhone;
      document.getElementById('modal-date').textContent = date;
      document.getElementById('modal-slot').textContent = slot;
      document.getElementById('modal-service').textContent = service;
      document.getElementById('modal-notes').textContent = currentBookingDetails.notes;

      // Configure WhatsApp Send Button
      if (modalWhatsappBtn) {
        const message = `Hello Arogya Dental Clinic Damak,%0A%0AI would like to confirm my dental appointment booking:%0A- *Reference:* ${refCode}%0A- *Patient Name:* ${name}%0A- *Phone:* ${cleanPhone}%0A- *Service:* ${service}%0A- *Preferred Date:* ${date}%0A- *Time Slot:* ${slot}%0A- *Notes/Symptoms:* ${currentBookingDetails.notes}%0A%0APlease confirm my appointment schedule. Thank you!`;
        modalWhatsappBtn.href = `https://wa.me/9779801109099?text=${message}`;
      }

      // Open Modal
      if (confirmationModal) {
        confirmationModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }

      // Reset form
      appointmentForm.reset();
    });
  }

  const closeConfirmationModal = () => {
    if (confirmationModal) {
      confirmationModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  };

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeConfirmationModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeConfirmationModal);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeConfirmationModal();
      closeMobileMenu();
    }
  });

  // 6. Quick Contact Form Handler
  const quickContactForm = document.getElementById('quick-contact-form');
  if (quickContactForm) {
    quickContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const qName = document.getElementById('contact-name').value.trim();
      const qPhone = document.getElementById('contact-phone').value.trim();
      const qMessage = document.getElementById('contact-message').value.trim();

      if (!qName || !qPhone || !qMessage) {
        alert('Please fill out all required fields.');
        return;
      }

      const encodedMsg = `Hello Arogya Dental Clinic Damak,%0A%0AMy name is ${qName} (${qPhone}).%0A%0A*Inquiry:* ${qMessage}`;
      const whatsappUrl = `https://wa.me/9779801109099?text=${encodedMsg}`;

      // Open WhatsApp direct or give friendly alert
      const proceedWhatsapp = confirm(`Thank you, ${qName}! Would you like to send this query directly to the clinic via WhatsApp for instant reply?`);
      if (proceedWhatsapp) {
        window.open(whatsappUrl, '_blank');
      } else {
        alert(`Thank you ${qName}! Your inquiry has been noted. Our reception team will reach you at ${qPhone}.`);
      }

      quickContactForm.reset();
    });
  }

  // 7. Sticky Navbar Shadow on Scroll
  const mainNavbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainNavbar.classList.add('shadow-md', 'bg-white/95');
      mainNavbar.classList.remove('bg-white/90');
    } else {
      mainNavbar.classList.remove('shadow-md');
      mainNavbar.classList.add('bg-white/90');
    }
  });
});
