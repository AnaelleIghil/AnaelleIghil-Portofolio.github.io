const list = document.getElementsByTagName("ul");
for(const i=0; i<list.length; i++){
    list[i].addEventListener('click', liClick);
}
function liClick(){
    const listItem= document.getElementsByTagName("li");
    for(const j=0; j< listItem.length; j++){
        this.style.display = 'block';
    }
}