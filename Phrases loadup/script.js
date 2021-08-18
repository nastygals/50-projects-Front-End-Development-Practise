
const injectText = ['Recording my coding journey','Daily Uploads', 'Simple front-end path' ];
const display = document.querySelector('.displayText2');
const cursor = document.querySelector('.cursor');

let charIndex = 0; 
let arrayTextIndex = 0;

const typeTime = 200;
const eraseTime = 100;
const newWordDelay = 2000;

function type(){
    if(arrayTextIndex == injectText.length){
        arrayTextIndex = 0; 
        charIndex = 0
        setTimeout(type,newWordDelay);
    } else{
    if (charIndex < injectText[arrayTextIndex].length){
        if(!cursor.classList.contains('typing')){
            cursor.classList.add('typing');
        }
        display.textContent += injectText[arrayTextIndex].charAt(charIndex);
        charIndex++;

        setTimeout(type,typeTime);
    } else{
        setTimeout(erase,eraseTime + 200);
    }
}
}

function erase(){
    if(charIndex > 0){
        if(cursor.classList.contains('typing')){
            cursor.classList.remove('typing');
        }
        display.textContent = injectText[arrayTextIndex].substring(0,charIndex-1);
        charIndex--;
            setTimeout(erase,eraseTime);
    }else{
        if(arrayTextIndex >= injectText.length){
            arrayTextIndex = 0; 
            charIndex = 0;
            setTimeout(type,typeTime + 1100);
        } else{
            arrayTextIndex++;
            setTimeout(type,newWordDelay);
        }
    }
}

document.addEventListener('DOMContentLoaded', function(){
    if(injectText.length)setTimeout(type,newWordDelay + 250);
});