document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
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

  // Footer year
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Live Light/Dark mode demo — mirrors the in-app toggle
  var demo = document.querySelector('.mode-demo');
  if (demo) {
    var buttons = demo.querySelectorAll('.mode-toggle button');
    var images = demo.querySelectorAll('.phone-swap img');
    var label = demo.querySelector('.mode-label');
    var heading = demo.querySelector('.mode-copy h3');
    var body = demo.querySelector('.mode-copy p');

    var content = {
      light: {
        label: 'LIGHT MODE',
        heading: 'Fun, cute & meaningful',
        body: "Activities, games, and deep questions for wholesome bonding \u2014 the stuff you'll screenshot and send to your group chat."
      },
      dark: {
        label: 'DARK MODE',
        heading: 'Romantic & a little wild',
        body: 'Flirty challenges, intimate bedtime prompts, and bedroom plays \u2014 for after the lights go down.'
      }
    };

    function setMode(mode) {
      demo.setAttribute('data-mode-active', mode);
      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-mode') === mode ? 'true' : 'false');
      });
      images.forEach(function (img) {
        img.classList.toggle('active', img.getAttribute('data-mode') === mode);
      });
      if (label) label.textContent = content[mode].label;
      if (heading) heading.textContent = content[mode].heading;
      if (body) body.textContent = content[mode].body;
    }

    buttons.forEach(function (b) {
      b.addEventListener('click', function () { setMode(b.getAttribute('data-mode')); });
    });

    setMode('dark');
  }
});
