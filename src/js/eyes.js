
//mobile eyes

const height = window.innerHeight;
const width = window.innerWidth;

let eyeLeftD;
let eyeRightD;

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
let currentPositionY = document.documentElement.scrollTop;
window.onscroll= () => {
  currentPositionY = document.documentElement.scrollTop;
}





const findMouseCoords = e => {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
}

const mapValue = (n, start1, stop1, start2, stop2, withinBounds) => {
  const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return Math.max(Math.min(newval, stop2), start2);
  } else {
    return Math.max(Math.min(newval, start2), stop2);
  }
};

const page = document.querySelector('#body')
let mousePosition = {};

if(window.innerWidth > 850 || window.innerHeight < window.innerWidth){
  
  //desktop eyes
  eyeLeftD = document.querySelector("#left-eye-home");
  eyeRightD = document.querySelector("#right-eye-home");

  const posEyeL = getCumulativeOffset(eyeLeftD);
  const posEyeR = getCumulativeOffset(eyeRightD);

  const leftEyeWidth = eyeLeftD.offsetWidth;
  const rightEyeWidth = eyeRightD.offsetWidth;

  page.addEventListener('mousemove', e => {
    if(posEyeL.y  > currentPositionY && posEyeL.y < currentPositionY + window.innerHeight){
      findMouseCoords(e);
      
      lmx = mousePosition.x - posEyeL.x - leftEyeWidth/2;
      lmy = mousePosition.y - posEyeL.y - leftEyeWidth/2;
      lDist = Math.sqrt(lmx * lmx + lmy * lmy);
      
      rmx = mousePosition.x - posEyeR.x - rightEyeWidth/2;
      rmy = mousePosition.y - posEyeR.y - rightEyeWidth/2;
      rDist = Math.sqrt(rmx * rmx + rmy * rmy);


      const LXOffset = mapValue(lmx, -300,100,-leftEyeWidth/3,leftEyeWidth/3, leftEyeWidth/3);
      const LYOffset = mapValue(lmy, -300,300,-leftEyeWidth/3,leftEyeWidth/3, leftEyeWidth/3);
      const RXOffset = mapValue(rmx, -100,300,-rightEyeWidth/3,rightEyeWidth/3, rightEyeWidth/3);
      const RYOffset = mapValue(rmy, -300,300,-rightEyeWidth/3,rightEyeWidth/3, rightEyeWidth/3);
      
      
      eyeLeftD.style.cssText = `width: 2.2vw; transform: translate(${LXOffset}px, ${LYOffset}px);`
      eyeRightD.style.cssText = `width: 2.3vw; transform: translate(${RXOffset}px, ${RYOffset}px);`
    }
  });
} else {

  //mobile eyes

  eyeLeftD = document.querySelector("#left-eye-mobile");
  eyeRightD = document.querySelector("#right-eye-mobile");

  const posEyeL = getCumulativeOffset(eyeLeftD);
  const posEyeR = getCumulativeOffset(eyeRightD);

  const leftEyeWidth = eyeLeftD.offsetWidth;
  const rightEyeWidth = eyeRightD.offsetWidth;

  page.addEventListener('click', e => {
    if(posEyeL.y  > currentPositionY && posEyeL.y < currentPositionY + window.innerHeight){
      findMouseCoords(e);
      
      lmx = mousePosition.x - posEyeL.x - leftEyeWidth/2;
      lmy = mousePosition.y - posEyeL.y - leftEyeWidth/2;
      lDist = Math.sqrt(lmx * lmx + lmy * lmy);
      
      rmx = mousePosition.x - posEyeR.x - rightEyeWidth/2;
      rmy = mousePosition.y - posEyeR.y - rightEyeWidth/2;
      rDist = Math.sqrt(rmx * rmx + rmy * rmy);


      const LXOffset = mapValue(lmx, -100,50,-leftEyeWidth/3,leftEyeWidth/3, leftEyeWidth/3);
      const LYOffset = mapValue(lmy, -100,100,-leftEyeWidth/3,leftEyeWidth/3, leftEyeWidth/3);
      const RXOffset = mapValue(rmx, -50,50,-rightEyeWidth/3,rightEyeWidth/3, rightEyeWidth/3);
      const RYOffset = mapValue(rmy, -100,100,-rightEyeWidth/3,rightEyeWidth/3, rightEyeWidth/3);
      
      
      eyeLeftD.style.cssText = `width: 3vw; transform: translate(${LXOffset}px, ${LYOffset}px);`
      eyeRightD.style.cssText = `width: 3.1vw; transform: translate(${RXOffset}px, ${RYOffset}px);`
    }
  });
}

  
