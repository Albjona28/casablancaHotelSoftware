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

//API Data Staff
const mainElement = document.querySelector('#staff');
const getStaff = () => {
    fetch('https://reqres.in/api/users').then((response) => response.json()).then((data) => {
        if(data?.data?.length > 0) {
            renderStaff(data.data)
        }
        else {
            let errorMessage = `
                <div class='errorMessage'>Unfortunately we can't show you the staff right now. Please come back later!</div>
            `;
            mainElement.innerHTML = errorMessage;
        }
    });
}

const renderStaff = (data) => {
    let allStaff = '';
    let staffMaxNumberToShow = 5;
    for(let i = 0; i < staffMaxNumberToShow; i++) {
        console.log(data[i]);
        let newStaff = `
            <div class="staff-card">
                <img class="card-img-top" src="${data[i].avatar}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${data[i].first_name} ${data[i].last_name}</h5>
                    <p class="card-text">${data[i].email}</p>
                </div>
            </div>
        `
        allStaff += newStaff;
    }
    mainElement.innerHTML = allStaff;
}

getStaff(); 