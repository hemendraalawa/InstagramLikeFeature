let img = document.querySelector('.img');
let dil = document.querySelector("i");

img.addEventListener('dblclick',function(){
    dil.style.transform ="translate(-50%,-50% ) scale(1)"
    dil.style.opacity = 0.7
    
    setTimeout(function(){
        dil.style.opacity = 0
        dil.style.transform ="translate(-50%,-50% ) scale(0)"
    },1000);
});

