const btnArrowProjetoLeft = document.querySelector('.button-projeto-left');
const btnArrowProjetoRight = document.querySelector('.button-projeto-right');
const items = document.querySelector('.elementos-projeto');
var movProjetoPixels = 200;



btnArrowProjetoLeft.addEventListener('click', function(){
    movProjetoPixels = movProjetoPixels - 200;
    items.style = `transform: translateX(${movProjetoPixels}px)`;
})

btnArrowProjetoRight.addEventListener('click', function(){
    movProjetoPixels = movProjetoPixels + 200;
    items.style = `transform: translateX(${movProjetoPixels}px)`;
})
