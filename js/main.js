// =======================================
// EN: Footer year | SV: Årtal i sidfoten
// =======================================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear(); // Current year 


// EN: Add 'is-scrolled' when page is moved a bit (stronger navbar look)
// SV: Lägg till 'is-scrolled' när sidan rullas (tydligare navbar)
const header = document.querySelector('[data-navbar]');
const onScroll = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 8);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Optional: mark active link by URL
document.querySelectorAll('.navbar-nav .nav-link').forEach(a=>{
  if (location.pathname.endsWith(a.getAttribute('href'))) a.classList.add('active');
});
