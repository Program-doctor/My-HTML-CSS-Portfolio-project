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

let textarea=document.querySelector('textarea');
let feedback=document.querySelector('.feedback');
let shapeFill=document.querySelector('.shape-fill');

function changeColors(color){
    feedback.style.background=color;
    shapeFill.style.fill=color;
    comment.style.borderColor="#fff";
    textarea.style.borderColor=color+"98";
    comment.style.background=color;
    comment.style.color="white";
    let links=document.querySelectorAll('.reach-out a');
 links.forEach(link=>{
     link.style.color=color;
 });
 document.querySelectorAll('span').forEach(function(item){
     item.classList.remove('clr')
 })
 event.target.classList.add('clr');
}
