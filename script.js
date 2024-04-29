 let menu = document.querySelector('#menu-bars');
 let navbar = document.querySelector('.navbar');
 menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
 }
 window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
 }
 //*----swiper-----*//
 var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  }
});
//*----accordion------*//
$(document).ready(function(){
  $('.accordion-header') .click(function(){
    $('.accordion .accordion-body').slideUp();
    $(this) .next('.accordion-body').slideDown();
    $('.accordion .accordion-header .icon').text('+');
    $(this) .children('.icon').text('-');
  });
});
//*-----loader------//*
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
setInterval(loader,5000);
}
window.onload=fadeOut;
function closePopup() {
  document.getElementById("popupCard").style.display = "none";
}

// Function to open the popup
function openPopup() {
  document.getElementById("popupCard").style.display = "block";
}
 
    