
document.addEventListener('astro:page-load', () => {
  (document.querySelector('.hamburger') as HTMLElement).addEventListener('click', () => {
    (document.querySelector('.nav-links') as HTMLElement).classList.toggle('expanded');
  });
});