document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      });
    });
  }

  const chooseButtons = document.querySelectorAll('.choose-service');
  const serviceSelect = document.getElementById('service');

  chooseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const service = button.dataset.service;
      if (service && serviceSelect) {
        serviceSelect.value = service;
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (form && formStatus) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name')?.value.trim();
      formStatus.textContent = name
        ? `Merci ${name} ! Votre demande est bien prise en compte. Nous reviendrons vers vous rapidement.`
        : 'Merci ! Votre demande est bien prise en compte. Nous reviendrons vers vous rapidement.';
      form.reset();
    });
  }
});
