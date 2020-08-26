const burger = document.querySelector('.burger');
const burgerOpen = document.querySelector('.burger-open');
const hoverBox = Array.from(document.querySelectorAll('.hover-box'));
const navBar = document.querySelector('.navbar-open');
const navLink = Array.from(document.querySelectorAll('.nav-link'))

hoverBox.forEach(box => {box.addEventListener('click', () => {
  console.log('click')
  if(burger.style.display === 'none' ){
    burgerOpen.style.display = 'none'
    burger.style.display = 'block'
    navBar.style.transform = 'translateX(100vw)'
  } else {
    burgerOpen.style.display = 'block'
    burger.style.display = 'none'
    navBar.style.transform = 'translateX(0vw)'
  }
})})

navLink.forEach(link => {link.addEventListener('click', ()=>{
  navBar.style.transform = 'translateX(100vw)'
  burgerOpen.style.display = 'none'
  burger.style.display = 'block'
})})

