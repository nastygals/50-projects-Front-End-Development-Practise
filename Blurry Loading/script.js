const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load= 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

  let int = setInterval(blurring,30);

function blurring (){
    load++
    if(load > 99){
        clearInterval(int);
    } 

    loadText.innerHTML = `${load} %`
    loadText.getElementsByClassName.opacity = scale(load,0,100,1,0);
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}



// function that generates numbers from 0 to 1 at intervals of 0.1
