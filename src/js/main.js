// HIDE NAVBAR ON SCROLL
const navbar = document.querySelector(".navbar")
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.boxShadow = "none";
  } else {
    navbar.style.boxShadow = "0 5px 15px 5px rgba(0,0,0,0.2)";
  }
  prevScrollpos = currentScrollPos;
} 

// REDUCE TEXTS IN MOBILE

const booksText = document.querySelector('#books-description');
const projectsText = document.querySelector('#projects-description');
const educationText = document.querySelector('#education-description');
const booksText = document.querySelector('#me-text-2');
