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

let yesComment=document.querySelector('.alert #yes');

let noComment=document.querySelector('.alert #no');

function showModal(e){
    e.preventDefault();
    let userComment=document.querySelector('#feedback');
    let message=document.querySelector('#text');
    let form=document.querySelector('form');
    if (userComment.value.trim() === ''){
        message.innerHTML="Comment field cannot be left empty.";
        message.style.color= "#f44336";
    }else{
        message.classList.add('valid');
        popup.classList.add("open-popup");
    }
}
function closeModal(){
    yesComment.onclick=function(){
        alert("Yippee! Glad you love it☺️😊");
        popup.classList.remove("open-popup");
    }
    noComment.onclick=function(){
        alert("Oops, sorry you didn't enjoy viewing this😢");
        popup.classList.remove("open-popup");
    }
} 
let comment=document.querySelector('#comment');
comment.addEventListener('click',showModal);

