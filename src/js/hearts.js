/* heart-active-1 */
/* rh1 */
const heart1 = document.querySelector('#rh1');
const heart2 = document.querySelector('#rh2');
const heart3 = document.querySelector('#rh3');
const heart4 = document.querySelector('#rh4');
const heart5 = document.querySelector('#rh5');
const heart6 = document.querySelector('#rh6');
const heart7 = document.querySelector('#rh7');
const heart8 = document.querySelector('#rh8');
const heart9 = document.querySelector('#rh9');

const heartsRise = () => {
  
  const classNo = Math.floor(Math.random()*3+1)
  const heart = Math.floor(Math.random()*9+1)
  switch(heart) {
    case 1:
      heart1.classList.toggle(`heart-active-${classNo}`)
      break;
    case 2:
      heart2.classList.toggle(`heart-active-${classNo}`)
      break;
    case 3:
      heart3.classList.toggle(`heart-active-${classNo}`)
      break;
    case 4:
      heart4.classList.toggle(`heart-active-${classNo}`)
      break;
    case 5:
      heart5.classList.toggle(`heart-active-${classNo}`)
      break;
    case 6:
      heart6.classList.toggle(`heart-active-${classNo}`)
      break;
    case 7:
      heart7.classList.toggle(`heart-active-${classNo}`)
      break;
    case 8:
      heart8.classList.toggle(`heart-active-${classNo}`)
      break;
    case 9:
      heart9.classList.toggle(`heart-active-${classNo}`)
      break;
    default:
      break;
  } 
  heart1.classList.toggle(`heart-active-${classNo}`)
}
setTimeout(heartsRise(), 1000);
setTimeout(heartsRise(), 1000);
setTimeout(heartsRise(), 1000);
setTimeout(heartsRise(), 1000);
setTimeout(heartsRise(), 1000);
setTimeout(heartsRise(), 1000);
setTimeout(heartsRise(), 1000);
setTimeout(heartsRise(), 1000);
setTimeout(heartsRise(), 1000);
setTimeout(heartsRise(), 1000);
setTimeout(heartsRise(), 1000);
setTimeout(heartsRise(), 1000);
setTimeout(heartsRise(), 1000);
