/* heart-active-1 */
/* rh1 */
let arrayOfHearts = [1,2,3,4,5,6,7,8,9];
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

const heartsRise = () => {
  const classNo = Math.floor(Math.random()*3+1)
  const heart = Math.floor(Math.random()*9+1)
  const index = arrayOfHearts.indexOf(heart) 
  
  if(index != -1){
    switch(heart) {
      case 1:
        arrayOfHearts.splice(index,1)
        heart1.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 2:
        arrayOfHearts.splice(index,1)
        heart2.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 3:
        arrayOfHearts.splice(index,1)
        heart3.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 4:
        arrayOfHearts.splice(index,1)
        heart4.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 5:
        arrayOfHearts.splice(index,1)
        heart5.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 6:
        arrayOfHearts.splice(index,1)
        heart6.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 7:
        arrayOfHearts.splice(index,1)
        heart7.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 8:
        arrayOfHearts.splice(index,1)
        heart8.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      case 9:
        arrayOfHearts.splice(index,1)
        heart9.classList.toggle(`heart-active-${classNo}`)
        setTimeout(arrayOfHearts.push(heart), timeout)
        break;
      default:
        break;
    } 
  }
}
/* window.setInterval(function(){
  heartsRise()
}, 100); */

