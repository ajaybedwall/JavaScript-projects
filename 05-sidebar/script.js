const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav-links li');
const sidebarLinks = document.querySelectorAll('.sidebar-links li');

burger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  navLinks.forEach(link => {
    link.classList.toggle('hidden');
  });
});

// Move nav links to sidebar on smaller screens
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    navLinks.forEach(link => {
      link.classList.add('hidden');
    });
  } else {
    navLinks.forEach(link => {
      link.classList.remove('hidden');
    });
  }
});

window.addEventListener('load', () => {
  if (window.innerWidth <= 768) {
    navLinks.forEach(link => {
      link.classList.add('hidden');
    });
  }
});

sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    navLinks.forEach(link => {
      link.classList.remove('hidden');
    });
  });
});