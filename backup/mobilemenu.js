// display and close menu for smaller devices
function displayMenu() {
  const button = document.getElementById("menu-button");
  const menuDrop = document.getElementById("dropdown");

  button.addEventListener('click', () => {
    menuDrop.style.display = "block";
  });
};

function closeMenu() {
  const button = document.getElementById("close-icon");
  const menuDrop = document.getElementById("dropdown");

  button.addEventListener('click', () => {
    menuDrop.style.display = "none";
  });
};

function closeMenu2() {
  const menuDrop = document.getElementById("dropdown");
  const autoClose = document.querySelectorAll(".sub-nav, .main-nav");

  autoClose.forEach(function(button) {
    button.addEventListener('click',function(event) {
        menuDrop.style.display = "none";
      });
    });
  };

  window.onload = function() {
    displayMenu();
    closeMenu();
    closeMenu2();
  }