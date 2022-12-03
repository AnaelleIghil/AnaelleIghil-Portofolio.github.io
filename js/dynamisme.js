const contenu = document.querySelector('#content');
console.log(contenu);
function handleMoveClick(event){
    console.log(event.target);
    if(event.target.value){
        event.target.backgroundPosition = left;
    }
}
contenu.addEventListener('click', handleMoveClick);