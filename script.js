const btn=document.querySelector('.btn');
const input=document.querySelector('.input');
const img=document.querySelector('.img');
const box=document.querySelector('.box');
const error=document.querySelector('.error');

btn.addEventListener('click',function(){
    let value=input.value;
    if(value!=''){
        error.innerHTML="";
        const url= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
        img.setAttribute('src',url);
        box.classList.add('changer');
    }
    else{
        error.innerHTML="Please write Something";
        error.style.color="red";
    }
});