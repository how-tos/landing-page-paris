const toggleMenu = () => {    
    let element = document.querySelector('.menu')
    element.classList.toggle('menu--open');   
  };
  
  
  const menu = document.querySelector('.menu');
  
  const menuButton = document.querySelector('.menu-button');
  
  menuButton.addEventListener('click', function() {
    toggleMenu();
  });

