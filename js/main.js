document.addEventListener('DOMContentLoaded', () => {
  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const ul = mainNav.querySelector('ul');
      ul.style.display = ul.style.display === 'block' ? '' : 'block';
    });
  }

  // slider
  const slides = document.getElementById('slides');
  if (slides) {
    let idx = 0;
    const imgs = slides.querySelectorAll('img');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    function show(i) {
      idx = (i + imgs.length) % imgs.length;
      slides.style.transform = `translateX(-${idx * 100}%)`;
    }
    prev?.addEventListener('click', () => show(idx - 1));
    next?.addEventListener('click', () => show(idx + 1));
    setInterval(() => show(idx + 1), 5000);
  }

  // footer year
  document.querySelectorAll('#year').forEach(el =>
    el.textContent = new Date().getFullYear()
  );

  // contact form validation
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const msg = document.getElementById('message');
      const out = document.getElementById('formMsg');

      if (!name.value.trim() || !email.checkValidity() || !msg.value.trim()) {
        out.textContent = 'Please fill all fields with a valid email.';
      } else {
        out.textContent = 'Thank you! Your message has been sent.';
        form.reset();
      }
    });
  }
});
