const searchContainer = document.querySelector('.search');
const selectBtn = document.querySelector('.click');

// add class to button so that when clicked it shows the
const addOrRemove = () =>{
    if(searchContainer.classList =='search'){
        searchContainer.classList.add('show-bar');
    } else{
        searchContainer.classList.remove('show-bar');
    }
}

selectBtn.addEventListener('click', addOrRemove);
