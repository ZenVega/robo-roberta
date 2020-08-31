//desktop eyes
const page = document.querySelector('#body')
const gogglesTxt = document.querySelector('#goggles-output');
let mousePosition = {};
let eyeSize = 100;

const eyeLeftD = document.querySelector("#eye-left-d");
const eyeRightD = document.querySelector("#eye-right-d");

eyeLeftD.style.cssText = `width: ${eyeSize}px; height: ${eyeSize}px;`
eyeRightD.style.cssText = `width: ${eyeSize}px; height: ${eyeSize}px;`


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

//center coordinates
posEyeL.y += eyeSize/2
posEyeL.x += eyeSize/2
posEyeR.y += eyeSize/2
posEyeR.x += eyeSize/2

const findMouseCoords = e => {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
}

page.addEventListener('mousemove', e => {
  if(posEyeL.y  > currentPositionY && posEyeL.y < currentPositionY + window.innerHeight){
    findMouseCoords(e);
    
    lmx = mousePosition.x - posEyeL.x;
    lmy = mousePosition.y - posEyeL.y;
    lDist = Math.sqrt(lmx * lmx + lmy * lmy);
    lAngle = Math.atan2( lmy, lmx ) * 180 / Math.PI;
    
    rmx = mousePosition.x - posEyeR.x;
    rmy = mousePosition.y - posEyeR.y;
    rDist = Math.sqrt(rmx * rmx + rmy * rmy);
    rAngle = Math.atan2( rmy, rmx ) * 180 / Math.PI;

    eyeRightD.style.transform = `rotate(${rAngle}deg)`
    eyeLeftD.style.transform = `rotate(${lAngle}deg)`

   /*  gogglesTxt.innerHTML = `MousePosition: ${mousePosition.x} / ${mousePosition.y} <br /> EyeLeft: ${posEyeL.x} / ${posEyeL.y} <br /> Dist: ${dist} <br /> Angle: ${angle} ` */
  }

});


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
      const rotation = (-dist*fct)+180; 
      
      eyeLeft.style.transform = `rotate(${rotation}deg)`
      eyeRight.style.transform = `rotate(${rotation}deg)`
    }
  }
}