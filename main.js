document.addEventListener('DOMContentLoaded', function () {

  // Año actual en el footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Resaltar enlace activo del navbar al hacer scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // Cerrar navbar en móvil al hacer clic en un enlace
  const navbarCollapse = document.getElementById('navbarNav');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  // Animación fade-in al hacer scroll
  const fadeElements = document.querySelectorAll(
    '.value-card, .activity-card, .about-card'
  );

  fadeElements.forEach(function (el) {
    el.classList.add('fade-in');
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });

});
