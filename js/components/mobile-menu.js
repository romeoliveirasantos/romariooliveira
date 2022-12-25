var mobileMenu = document.querySelector('.icon-menu')
var openMenu = document.querySelector('.menu')
var closeMenu = document.querySelector('.icon-close')

mobileMenu.addEventListener('click', function(){
  if(openMenu.style.display === 'flex'){
    openMenu.style.display = 'none';
  } else{
    openMenu.style.display = 'flex';
  }
  
});

closeMenu.addEventListener('click', () => {
  
  if(openMenu.style.display === 'flex'){
    openMenu.style.display = 'none';
  } else{
    openMenu.style.display = 'flex';
  }
});

var x = window.matchMedia("(max-width: 1010px)")
openMenu.addEventListener('click', () => {
  if(x.matches){
  openMenu.style.display = 'none';
}
})
  
