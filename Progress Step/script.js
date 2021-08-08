//add class to element that has been activated 
// activated by click button 
// click on Prev line turns a diff colour 


// declare variables 
// add Event listeners to button 
// if all bars are of the same colour prev / next button cannot be clicked 
/*
click on next 
find which number is not blue 
turns the number blue

click on previous 
same thing 


find which number is not blue :: check css border-stylings??
research 

*/
const getStyle = (element) =>{
    getComputedStyle(element).borderColor;
}

const pBtn = document.getElementById('Prev')
const nBtn = document.getElementById('Next');

const one = document.querySelector('one')
const two = document.querySelector('two')
const three = document.querySelector('three')
const four = document.querySelector('four')

const lines = document.querySelectorAll('.line')
const l1 = document.querySelector('line1')
const l2 = document.querySelector('line2')
const l3 = document.querySelector('line3')
 
const getPosition = () =>{
    if( lines.forEach(line =>{
        getStyle(line) == '#3498db';
    })){
        nBtn.classList.add('off');
    }else if(lines.forEach(line =>{
        let counter = 0; 
        if(getStyle(line) == '#3498db'){
            counter++
        }
        if(counter == 1){
            pBtn.classList.add('off')
        }
    })){
    }
}

/*
basic cases: 

all colours are blue 
only one colour is blue 
*/