let image = document.querySelectorAll('img');

 const addActiveClass = (e) =>{
         removeActiveClass();
         e.target.classList.add('active');
     }
 
 const removeActiveClass = () =>{
     image.forEach(i =>{
         i.classList.remove('active');
     })
 }
 
 image.forEach(i =>{
     i.addEventListener('click', addActiveClass);
 })

  
