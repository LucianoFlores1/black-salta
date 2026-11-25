/**
 * Marca con `.is-in` los elementos `[data-reveal]` y `[data-reveal-stagger]` la primera vez que entran
 * en pantalla. En los grupos escalonados, cada hijo recibe su índice en `--i`.
 */
const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-stagger]');

document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
  Array.from(group.children).forEach((child, i) => (child as HTMLElement).style.setProperty('--i', String(i)));
});

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
  );
  targets.forEach((el) => io.observe(el));
} else {
  targets.forEach((el) => el.classList.add('is-in'));
}
