window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }   
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " actives";
}

let hBurger = document.querySelector('.navigationham');
let navMenu = document.querySelector('.navigation');
let closeBtn = document.querySelector('.close-btn');

hBurger.addEventListener('click', (e)=>{
  e.preventDefault();
  navMenu.classList.add('show-element');
  console.log("hello");
})
closeBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  navMenu.classList.remove('show-element');
  console.log("hello");
})

let navactive = document.querySelectorAll('.m-nav li a');
navactive.forEach((n) =>{
  n.addEventListener('click', ()=>{
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    n.classList.add('active')
  })
})









