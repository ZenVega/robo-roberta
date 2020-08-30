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

const booksText = document.querySelector('#books-description-2');
const projectsText = document.querySelector('#projects-description-2');
const meText = document.querySelector('#me-description-2');

const booksBtn = document.querySelector('#books-more-btn')
const meBtn = document.querySelector('#me-more-btn')
const projectsBtn = document.querySelector('#projects-more-btn')

booksBtn.addEventListener('click', () => {
  booksBtn.style.display= "none";
  booksText.style.display="block"
})
projectsBtn.addEventListener('click', () => {
  projectsBtn.style.display= "none";
  projectsText.style.display="block"
})
meBtn.addEventListener('click', () => {
  meBtn.style.display= "none";
  meText.style.display="block"
})
