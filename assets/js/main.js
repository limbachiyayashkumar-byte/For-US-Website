// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.textContent = isOpen ? 'CLOSE' : 'MENU';
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.textContent = 'MENU';
      });
    });
  }

  // Hero venn overlap word-cycle — mirrors the in-app spin wheel
  var span = document.querySelector('.venn .overlap-text span');
  if (span) {
    var words = [
      'cook something new',
      'stargaze on the roof',
      'board game night',
      'try that café',
      'ten-minute dance break',
      'rewatch your first movie'
    ];
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) {
      var i = 0;
      setInterval(function () {
        span.style.opacity = 0;
        setTimeout(function () {
          i = (i + 1) % words.length;
          span.textContent = words[i];
          span.style.opacity = 1;
        }, 500);
      }, 2600);
    }
  }

  // Footer year
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
