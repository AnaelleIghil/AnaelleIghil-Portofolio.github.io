/* const contenu = document.querySelector('#content');

function handleMoveClick(event){
    console.log(event.target);
    if(event.target.value){
        for(let move=0; move<contenu.lenght; move++ ){
            move = value.style.backgroundPosition= left;
        }
}
}
contenu.addEventListener('click', handleMoveClick);
 */
// echec sans jQuery.
const x = document.querySelectorAll('section');


 function handleShowHide(){

    if (x.target.style.display === "none"){
        x.target.style.display ="block";
    } else {
        x.target.style.display= "none";
    }
}

x.addEventListener('click', handleShowHide()); 