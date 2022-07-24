const btnProjectLeft = document.querySelector('.animated-left');
const btnProjectRight = document.querySelector('.animated-right');
const projects = document.querySelector('.projeto-hover');
var MovementPixels = 200;

btnProjectLeft.addEventListener('click', function(){
    MovementPixels = MovementPixels - 100;
    projects.style = `transform: translateX(${MovementPixels}px)`;
})

btnProjectRight.addEventListener('click', function(){
    MovementPixels = MovementPixels + 100;
    projects.style = `transform: translateX(${MovementPixels}px)`;
})

