// Nav scroll state
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 60) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Fade-in on scroll
const fadeTargets = document.querySelectorAll(
  '.intro__heading, .intro__body, .timeline__item, .site__copy, .site__images, .quote, .info-card, .closing__inner'
);
fadeTargets.forEach((el) => el.classList.add('fade-in'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);

fadeTargets.forEach((el) => io.observe(el));
