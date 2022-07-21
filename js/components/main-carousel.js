const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
var movPixels = 100;

btnRight.addEventListener('click', function () {

    movPixels = movPixels + 100;
    elements.style = `transform: translateX(${movPixels}px)`;
});

btnLeft.addEventListener('click', function(){

    movPixels = movPixels - 100;
    elements.style = `transform: translateX(${movPixels}px)`;
})