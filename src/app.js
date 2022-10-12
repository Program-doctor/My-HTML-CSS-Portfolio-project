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
    if (userComment.value.trim() === ''){
        userComment.innerText="Comment field cannot be left empty. Please leave a comment."
    }else{
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

