let content = document.querySelectorAll('.content');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes(){
    let triggerBottom = window.innerHeight / 5  * 4;
    content.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}