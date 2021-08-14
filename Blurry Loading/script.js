const bg = document.querySelector('.bg');
const text = document.querySelector('.loading-text');

let load = 0;
let percent = 10;

let interval = setInterval(blurring,30);

function blurring(){
    load++;
    percent -= 0.1;
    if(load > 100){
        clearInterval(interval);
        text.style.opacity = 0;
    }
    text.innerHTML = `${load} %`
    bg.style.filter = `blur(${percent}rem)`
}



