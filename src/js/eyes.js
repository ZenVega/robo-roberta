//mobile eyes
 
  const eyeLeft = document.querySelector("#eye-left");
  const eyeRight = document.querySelector("#eye-right");
  const goggles = document.querySelector("#goggles");

  const height = window.innerHeight;
  const width = window.innerWidth;

  const leftEyeWidth = width*0.22;
  const rightEyeWidth = width*0.23;

  //factor todefine rotation angle
  let fct = (45/height)*4;
  
  const goggleEyes = () => {
    let scrollPosition = goggles.getBoundingClientRect().y;
    
    scrollPosition = goggles.getBoundingClientRect().y;
    if(scrollPosition< height && scrollPosition > -height){
      const dist = height/2-scrollPosition;
      const rotation = (-dist*fct)+180; 
      
      eyeLeft.style.transform = `rotate(${rotation}deg)`
      eyeRight.style.transform = `rotate(${rotation}deg)`
    }
  }
  
  if(window.innerWidth <= 850){
    window.addEventListener('scroll', goggleEyes);
  }

  if(window.innerWidth > 850){

    //desktop eyes
    const page = document.querySelector('#body')
    let mousePosition = {};
      
    const eyeLeftD = document.querySelector("#left-eye-home");
    const eyeRightD = document.querySelector("#right-eye-home");

    
    
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
    
    const posEyeL = getCumulativeOffset(eyeLeftD);
    const posEyeR = getCumulativeOffset(eyeRightD);
    console.log(posEyeL)

    const leftEyeWidth = eyeLeftD.offsetWidth;
    const leftEyeHeight = eyeLeftD.offsetHeight;
    const rightEyeWidth = eyeRightD.offsetWidth;
    const rightEyeHeight = eyeRightD.offsetHeight;

    const findMouseCoords = e => {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    }
    
    page.addEventListener('mousemove', e => {
      if(posEyeL.y  > currentPositionY && posEyeL.y < currentPositionY + window.innerHeight){
        findMouseCoords(e);

        
        lmx = mousePosition.x - posEyeL.x - leftEyeWidth/2;
        lmy = mousePosition.y - posEyeL.y - leftEyeWidth/2;
        lDist = Math.sqrt(lmx * lmx + lmy * lmy);
        if(lDist*2 < leftEyeWidth){
          eyeLeftD.style.cssText = `width: 2.2vw; transform: translate(${lmx}px, ${lmy}px);`
        } else {
          eyeLeftD.style.cssText = 'width: 2.2vw; top: -49.85vw; right:-45.8vw;'
        }
        lAngle = Math.atan2( lmy, lmx ) * 180 / Math.PI;
        
        rmx = mousePosition.x - posEyeR.x;
        rmy = mousePosition.y - posEyeR.y;
        rDist = Math.sqrt(rmx * rmx + rmy * rmy);
        rAngle = Math.atan2( rmy, rmx ) * 180 / Math.PI;
        
        eyeRightD.style.transform = `rotate(${rAngle}deg)`

        
      }
    });
  } 
