// AI-Nexus — interaction layer
document.addEventListener('DOMContentLoaded', () => {

  /* Mobile nav toggle */
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link inside it is clicked
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Contact form — client-side validation + friendly status message.
     No backend is wired up; replace the submit handler with a real
     fetch() call to your form endpoint (Formspree, Netlify Forms, etc.)
     when you deploy. */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      status.classList.remove('success', 'error', 'is-visible');

      if (!name || !email || !message) {
        status.textContent = 'Please fill in your name, email, and message before sending.';
        status.classList.add('error', 'is-visible');
        return;
      }

      if (!emailPattern.test(email)) {
        status.textContent = 'That email address doesn\'t look right — please double check it.';
        status.classList.add('error', 'is-visible');
        return;
      }

      // Simulate a successful send. Swap this block for a real request
      // to your form backend before going live.
      status.textContent = 'Thanks, ' + name.split(' ')[0] + ' — your message is on its way to our team. We reply within two business days.';
      status.classList.add('success', 'is-visible');
      form.reset();
    });
  }

});
