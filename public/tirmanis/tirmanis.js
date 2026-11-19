const root = document.documentElement;
const world = document.querySelector('.world');
const sections = [...document.querySelectorAll('main section')];
const rail = [...document.querySelectorAll('nav a')];
const percent = document.querySelector('output');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let pending = false;
function update() {
  pending = false;
  const height = innerHeight;
  const progress = Math.max(0, Math.min(1, scrollY / Math.max(1, root.scrollHeight - height)));
  root.classList.toggle('moving', !reduced.matches);
  // The same trunk and anchored ropes travel through the viewport together.
  const travel = world.offsetHeight - height + height * .12 - world.offsetWidth * .112;
  const camera = reduced.matches ? Math.round(progress * 3) / 3 : progress;
  root.style.setProperty('--lift', Math.round(camera * travel) + 'px');
  root.style.setProperty('--far', Math.round(camera * height * .09) + 'px');
  let nearest = 0, best = Infinity;
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const delta = (rect.top + rect.height / 2 - height / 2) / height;
    if (Math.abs(delta) < best) { best = Math.abs(delta); nearest = index; }
    const entrance = Math.max(0, Math.min(1, (delta - .12) * 2.3));
    const side = section.querySelector('.right') && innerWidth > 700 ? 1 : -1;
    section.style.setProperty('--slide', (side * entrance * 75) + 'px');
    section.style.setProperty('--photo-slide', (side * entrance * 28) + 'px');
    section.style.setProperty('--alpha', 1 - entrance);
  });
  rail.forEach((link, index) => link.setAttribute('aria-current', String(index === nearest)));
  percent.value = Math.round(progress * 100) + '%';
}
function schedule() { if (!pending) { pending = true; requestAnimationFrame(update); } }
addEventListener('scroll', schedule, { passive: true });
addEventListener('resize', schedule);
reduced.addEventListener('change', schedule);
update();
