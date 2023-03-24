// Navigation Menu
const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuItems.classList.toggle('open');
});

// Smooth Scrolling
const navLinks = document.querySelectorAll('.nav-link');

for (const link of navLinks) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}

// Projects Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project');

for (const btn of filterBtns) {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    filterItems(filter);
  });
}

function filterItems(filter) {
  for (const item of projectItems) {
    if (filter === 'all' || item.classList.contains(filter)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
}

// Contact

