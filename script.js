const menu = document.getElementById('menu');
const links = document.getElementById('links');
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.textContent = open ? '×' : '☰';
  menu.setAttribute('aria-expanded', String(open));
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  menu.textContent = '☰';
  menu.setAttribute('aria-expanded', 'false');
}));
