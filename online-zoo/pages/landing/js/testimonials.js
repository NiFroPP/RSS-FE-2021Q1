const leftBtnTestimonials = document.querySelector('.SLIDER-left-w');
const rightBtnTestimonials = document.querySelector('.SLIDER-right-w');

const slides = document.querySelector('.testimonials__cards');
const card1 = document.querySelector('.testimonials__slide1');
const card2 = document.querySelector('.testimonials__slide2');
const card3 = document.querySelector('.testimonials__slide3');
const card4 = document.querySelector('.testimonials__slide4');

card1.addEventListener('click', move);
card2.addEventListener('click', move);
card3.addEventListener('click', move);
card4.addEventListener('click', move);
rightBtnTestimonials.addEventListener('click', move);
leftBtnTestimonials.addEventListener('click', move);

function loadPage() {
  setInterval(moveLeft, 15000);
}

function move() {
  clearInterval(100);
  setTimeout(timer, 60000)
}

function moveLeft() {
  const firstChild = slides.firstChild;
  slides.removeChild(firstChild);
  slides.append(firstChild);
}

function timer() {
  setInterval(moveLeft, 15000);
}
