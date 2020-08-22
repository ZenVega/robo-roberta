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

