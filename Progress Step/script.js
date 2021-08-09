const slider = document.getElementById('slider');
const prev= document.getElementById('Prev')
const next= document.getElementById('Next')

const circles = document.querySelectorAll('.listEl')
const lines = document.querySelectorAll('.line');


// get position of counter

let currentActive = 1;
// press next when the counter is less than the total amount of elements 

// only then allow prev to be active, elements that are less than the counter are active 
prev.addEventListener('click', () =>{
    if(currentActive < 1){
        currentActive = 1;
    }
    update()
});

next.addEventListener('click', () =>{
    if(currentActive > 1){
        currentActive == circles.length;
    }
    update()
});

const update = () =>{
    addOrRemove(circles);
    addOrRemove(lines);
    if (currentActive  == 1){
        prev.disabled = true;
    } else if( currentActive == circles.length){
        next.disabled = true; 
    }else{
        prev.disabled = false;
        next.disabled = false;
    }

}

const addOrRemove = (element) =>{
    element.forEach((element,idx) =>{
        if(idx < currentActive ){
            element.classList.add('active');
        } else{
            element.classList.remove('active');
        }
    })
}

