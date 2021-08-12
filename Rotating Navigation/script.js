// declare variables
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const navBar = document.querySelector('nav');

/*open on click transform the nav bar to the right so anticlockwise so negative degree

opposite for close 
*/ 

const addClass =()=>{
    container.classList.add('show-nav');
    navBar.classList.add('nav-slide'); 
}
const removeClass = () =>{
    container.classList.remove('show-nav');
    navBar.classList.remove('nav-slide');
}

open.addEventListener('click', addClass);
close.addEventListener('click', removeClass);
