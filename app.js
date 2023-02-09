// Open Submenu's on hover
let dropdown = document.querySelector('.dropdown');
let dropdownToggle = document.querySelector('.dropdown-toggle');
let dropdownMenu = document.querySelector('.dropdown-menu');

dropdown.addEventListener('mouseover', function () {
  dropdown.classList.add('show');
  dropdownToggle.setAttribute('aria-expanded', true);
  dropdownMenu.classList.add('show');
});

dropdown.addEventListener('mouseout', function () {
  dropdown.classList.remove('show');
  dropdownToggle.setAttribute('aria-expanded', false);
  dropdownMenu.classList.remove('show');
});

//Slider
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Back to top
// Get the button:
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}