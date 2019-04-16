// const toggleMenu = () => {
//     // Toggle the "menu--open" class on your menu refence. 
//     let element = document.querySelector('.menu')
//     element.classList.toggle('menu--open');
//     // element.classList.toggle('menu--open');
//   };
  
//   // Start Here: Create a reference to the ".menu" class
//   const menu = document.querySelector('.menu');
//   // create a reference to the ".menu-button" class
//   const menuButton = document.querySelector('.menu-button');
//   // Using your menuButton reference, add a click handler that calls toggleMenu
//   menuButton.addEventListener('click', function() {
//     toggleMenu();
//   });

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }