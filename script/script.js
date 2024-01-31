const bars = document.querySelector('#bars');
const navbar = document.querySelector('.navbar');

// JS code for bars and navbar
bars.onclick = () => {
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    bars.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Js code for search icon
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active')
}
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active')
}

// JS code for swipper in home section
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

