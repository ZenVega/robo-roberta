//desktop eyes
const page = document.querySelector('#body')
const gogglesTxt = document.querySelector('#goggles-output');
let mousePosition = {};
let eyeSize = 75;

const eyeLeftD = document.querySelector("#eye-left-d");
const eyeRightD = document.querySelector("#eye-right-d");

eyeLeftD.style.width = eyeSize + 'px';
eyeLeftD.style.height = eyeSize + 'px';

eyeRightD.style.width = eyeSize + 'px';
eyeRightD.style.height = eyeSize + 'px';

const getCumulativeOffset = obj => {
  let left, top;
  left = top = 0;
  if (obj.offsetParent) {
      do {
          left += obj.offsetLeft;
          top  += obj.offsetTop;
      } while (obj = obj.offsetParent);
  }
  return {
      x : left,
      y : top
  };
};
let currentPositionY;
window.onscroll= () => {
  currentPositionY = document.documentElement.scrollTop;
}

let posEyeL = getCumulativeOffset(eyeLeftD);
let posEyeR = getCumulativeOffset(eyeRightD);

const findMouseCoords = e => {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
  console.log('mouse')
  /* gogglesTxt.innerHTML = `MousePosition: ${mousePosition.x} / ${mousePosition.y} <br /> EyeLeft: ${eyeLD.x} / ${eyeLD.y} <br /> EyeRight: ${eyeRD.x} / ${eyeRD.y} ` */
}


page.addEventListener('mousemove', e => {
  if(posEyeL.y + 100 > currentPositionY && posEyeL.y < currentPositionY + window.innerHeight){
    findMouseCoords(e);
  }

});


  const rotateEye = () => {
    findMouseCoords();
    const lVector = {
      
    }
  }



//mobile eyes
if(window.innerWidth <= 850){

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
}