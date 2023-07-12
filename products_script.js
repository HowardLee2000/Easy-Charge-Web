/* switch active button based on button clicked */
function activateButton(buttonId) {
  // Get the button element by its ID
  const button = document.getElementById(buttonId);

  // Remove the "active-btn" class from all buttons
  const buttons = document.querySelectorAll('.button-container button');
  buttons.forEach((btn) => {
    btn.classList.remove('active-btn');
    btn.classList.add('not-active');
  });

  // Add the "active-btn" class to the clicked button
  button.classList.remove('not-active');
  button.classList.add('active-btn');
}

document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('#coupon-mart .button-container button');
    const collections = document.querySelectorAll('#coupon-mart .merchants .collection');
    
    buttons.forEach((button, index) => {

      button.addEventListener('click', () => {
        collections.forEach(collection => {
          collection.style.display = 'none';
        });
        collections[index].style.display = 'grid';
      });
    });

});

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