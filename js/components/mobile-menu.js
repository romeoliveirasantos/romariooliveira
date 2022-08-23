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

  
