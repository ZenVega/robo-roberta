// butterfly
let butterfly = document.getElementById('butterfly');

const moveButterfly = (x, y) => {
  let formerPosition = { x: butterfly.x }

  if (formerPosition.x < x) {
    butterfly.style.transform = 'rotate(20deg)translate(-4vw, -4vw)'
  } else if (formerPosition.x > x) {
    butterfly.style.transform = 'rotate(-20deg)translate(-4vw, -4vw)'
  }
  butterfly.style.top = `${y}px`
  butterfly.style.left = `${x}px`

}

//mobile eyes

const height = window.innerHeight;
const width = window.innerWidth;

const eyeLeft = document.querySelector("#left-eye");
const eyeRight = document.querySelector("#right-eye");

const getCumulativeOffset = obj => {
  let left, top;
  left = top = 0;
  if (obj.offsetParent) {
    do {
      left += obj.offsetLeft;
      top += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }
  return {
    x: left,
    y: top
  };
};
let currentPositionY = document.documentElement.scrollTop;
window.onscroll = () => {
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
const posEyeL = getCumulativeOffset(eyeLeft);
const posEyeR = getCumulativeOffset(eyeRight);

if (window.innerWidth > 850 || window.innerHeight < window.innerWidth) {


  //desktop eyes



  const leftEyeWidth = eyeLeft.offsetWidth;
  const rightEyeWidth = eyeRight.offsetWidth;

  page.addEventListener('mousemove', e => {
    if (posEyeL.y > currentPositionY && posEyeL.y < currentPositionY + window.innerHeight) {
      findMouseCoords(e);
      moveButterfly(mousePosition.x, mousePosition.y)

      lmx = mousePosition.x - posEyeL.x - leftEyeWidth / 2;
      lmy = mousePosition.y - posEyeL.y - leftEyeWidth / 2;
      lDist = Math.sqrt(lmx * lmx + lmy * lmy);

      rmx = mousePosition.x - posEyeR.x - rightEyeWidth / 2;
      rmy = mousePosition.y - posEyeR.y - rightEyeWidth / 2;
      rDist = Math.sqrt(rmx * rmx + rmy * rmy);


      const LXOffset = mapValue(lmx, -300, 100, -leftEyeWidth / 3, leftEyeWidth / 3, leftEyeWidth / 3);
      const LYOffset = mapValue(lmy, -300, 300, -leftEyeWidth / 3, leftEyeWidth / 3, leftEyeWidth / 3);
      const RXOffset = mapValue(rmx, -100, 300, -rightEyeWidth / 3, rightEyeWidth / 3, rightEyeWidth / 3);
      const RYOffset = mapValue(rmy, -300, 300, -rightEyeWidth / 3, rightEyeWidth / 3, rightEyeWidth / 3);


      eyeLeft.style.cssText = `width: 2.2vw; transform: translate(${LXOffset}px, ${LYOffset}px);`
      eyeRight.style.cssText = `width: 2.3vw; transform: translate(${RXOffset}px, ${RYOffset}px);`

    }
  });
} else {
  //mobile eyes


  const leftEyeWidth = eyeLeft.offsetWidth;
  const rightEyeWidth = eyeRight.offsetWidth;

  page.addEventListener('click', e => {
    if (posEyeL.y > currentPositionY && posEyeL.y < currentPositionY + window.innerHeight) {
      findMouseCoords(e);
      moveButterfly(mousePosition.x, mousePosition.y)

      lmx = mousePosition.x - posEyeL.x - leftEyeWidth / 2;
      lmy = mousePosition.y - posEyeL.y - leftEyeWidth / 2;
      lDist = Math.sqrt(lmx * lmx + lmy * lmy);


      rmx = mousePosition.x - posEyeR.x - rightEyeWidth / 2;
      rmy = mousePosition.y - posEyeR.y - rightEyeWidth / 2;
      rDist = Math.sqrt(rmx * rmx + rmy * rmy);


      const LXOffset = mapValue(lmx, -100, 50, -leftEyeWidth / 3, leftEyeWidth / 3, leftEyeWidth / 3);
      const LYOffset = mapValue(lmy, -100, 100, -leftEyeWidth / 3, leftEyeWidth / 3, leftEyeWidth / 3);
      const RXOffset = mapValue(rmx, -50, 50, -rightEyeWidth / 3, rightEyeWidth / 3, rightEyeWidth / 3);
      const RYOffset = mapValue(rmy, -100, 100, -rightEyeWidth / 3, rightEyeWidth / 3, rightEyeWidth / 3);


      eyeLeft.style.cssText = `width: 3vw; transform: translate(${LXOffset}px, ${LYOffset}px);`
      eyeRight.style.cssText = `width: 3.1vw; transform: translate(${RXOffset}px, ${RYOffset}px);`
    }
  });
}




