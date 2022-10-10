const panels=document.querySelectorAll('.panel');
function toggleOpen(){
    this.classList.toggle('open');
}
function toggleActive(e){
    if(e.propertyName.includes('flex')){
         this.classList.toggle('open-active');
    }
}

panels.forEach(panel=>panel.addEventListener('click',toggleOpen));

panels.forEach(panel=>panel.addEventListener('transitionend',toggleActive));

let popup=document.querySelector('#popup');
function showModal(e){
    e.preventDefault();
    popup.classList.add("open-popup");
}
function closeModal(){
    popup.classList.remove("open-popup");
} 
let comment=document.querySelector('#comment');
comment.addEventListener('click',showModal);

