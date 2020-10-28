// Hearts

let arrayOfHearts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const timeout = 3000;

const heart1 = document.querySelector('#rh1');
const heart2 = document.querySelector('#rh2');
const heart3 = document.querySelector('#rh3');
const heart4 = document.querySelector('#rh4');
const heart5 = document.querySelector('#rh5');
const heart6 = document.querySelector('#rh6');
const heart7 = document.querySelector('#rh7');
const heart8 = document.querySelector('#rh8');
const heart9 = document.querySelector('#rh9');

const hoverbox = document.querySelector('#hoverbox');
const hoverboxMobile = document.querySelector('#hoverbox-mobile');

const heartsRise = () => {
  const classNo = Math.floor(Math.random() * 3 + 1)
  const heart = Math.floor(Math.random() * 9 + 1)
  const index = arrayOfHearts.indexOf(heart)

  if (index != -1) {
    switch (heart) {
      case 1:
        arrayOfHearts.splice(index, 1)
        heart1.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 2:
        arrayOfHearts.splice(index, 1)
        heart2.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 3:
        arrayOfHearts.splice(index, 1)
        heart3.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 4:
        arrayOfHearts.splice(index, 1)
        heart4.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 5:
        arrayOfHearts.splice(index, 1)
        heart5.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 6:
        arrayOfHearts.splice(index, 1)
        heart6.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 7:
        arrayOfHearts.splice(index, 1)
        heart7.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 8:
        arrayOfHearts.splice(index, 1)
        heart8.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 9:
        arrayOfHearts.splice(index, 1)
        heart9.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      default:
        break;
    }
  }
}

let myInt;
const letHeartsRise = () => {
  myInt = setInterval(function () {
    heartsRise()
  }, 100);
}

const stopHeartsRise = () => {
  clearInterval(myInt)
}



//Eyes

const height = window.innerHeight;
const width = window.innerWidth;

const eyeLeft = document.querySelector("#left-eye");
const eyeRight = document.querySelector("#right-eye");


const findMouseCoords = e => {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
}

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

let mousePosition = {};
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


  
  if (window.innerWidth > 1024) {
    //desktop
    
    hoverbox.onmouseover = letHeartsRise
    hoverbox.onmouseout = stopHeartsRise
    
    const leftEyeWidth = eyeLeft.offsetWidth;
    const rightEyeWidth = eyeRight.offsetWidth;
    
    document.body.addEventListener('mousemove', e => {
      if (currentPositionY < window.innerHeight) {
        const posEyeL = getCumulativeOffset(eyeLeft);
        const posEyeR = getCumulativeOffset(eyeRight);
        
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
        
        
        eyeLeft.style.cssText = `transform: translate(${LXOffset}px, ${LYOffset}px);`
        eyeRight.style.cssText = `transform: translate(${RXOffset}px, ${RYOffset}px);`
        
      }
    });
    
  } else {
    
    //mobile
    
    const leftEyeWidth = eyeLeft.offsetWidth;
    const rightEyeWidth = eyeRight.offsetWidth;
    
    document.body.addEventListener('click', e => {
      
      const isClickInside = hoverboxMobile.contains(e.target);
      
      if (isClickInside) {
        letHeartsRise()
        //the click was outside the specifiedElement, do something
      } else {
        stopHeartsRise()
      }
      
      
      if (currentPositionY < window.innerHeight * 2) {
        findMouseCoords(e);
        moveButterfly(mousePosition.x, mousePosition.y)
        const posEyeL = getCumulativeOffset(eyeLeft);
        const posEyeR = getCumulativeOffset(eyeRight);
        
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
        
        
        eyeLeft.style.cssText = `transform: translate(${LXOffset}px, ${LYOffset}px);`
        eyeRight.style.cssText = `transform: translate(${RXOffset}px, ${RYOffset}px);`
      }
    });
  }
  
