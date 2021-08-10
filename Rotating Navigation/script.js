// declare variables
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

/*open on click transform the nav bar to the right so anticlockwise so negative degree

opposite for close 
*/ 

const addClass =()=>{
    container.classList.add('show-nav');
}
const removeClass = () =>{
    container.classList.remove('show-nav');
}

open.addEventListener('click', addClass);
close.addEventListener('click', removeClass);
