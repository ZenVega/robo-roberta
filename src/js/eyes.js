const eyeLeft = document.querySelector("#eye-left");
const eyeRight = document.querySelector("#eye-right");
const goggles = document.querySelector("#goggles");
let height = window.innerHeight;
let fct = (45/height)*4;

let scrollPosition = goggles.getBoundingClientRect().y;

window.onscroll= () => {
  scrollPosition = goggles.getBoundingClientRect().y;
  if(scrollPosition< height && scrollPosition > -height){
    const dist = height/2-scrollPosition;
    const rotation = -(dist*fct); 

    eyeLeft.style.transform = `rotate(${rotation}deg)`
    eyeRight.style.transform = `rotate(${rotation}deg)`
  }
}