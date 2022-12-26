const mainDiv = document.getElementsByClassName('main');
const divDisplay= document.querySelector('subclass');

mainDiv.addEventListener('click', divDisplayHandler())

function divDisplayHandler(event){
    if(divDisplay.style.display=== 'none'){
        divDisplay.style.display = 'block'
     } else {
        console.log('tout est déjà affiché')
     }
}