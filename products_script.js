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

    const defaultImage = document.getElementById("default-image");
    const buttons = document.querySelectorAll('#coupon-mart .button-container button');
    const collections = document.querySelectorAll('#coupon-mart .merchants .collection');
    
    defaultImage.style.display = 'grid';

    buttons.forEach((button, index) => {

      button.addEventListener('click', () => {
        collections.forEach(collection => {
          collection.style.display = 'none';
        });
        collections[index].style.display = 'grid';
      });
    });

});


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

// make sure function is called upon clicked
window.onload = function() {
  displayMenu();
  closeMenu();
  closeMenu2();
};

window.onload = function() {
  let goToTopBtn = document.getElementById("scroll-to-top");

  // Variables to record the position of the button
  let posX = 0;
  let posY = 0;
  
  // Variables to record the position of the mouse or touch
  let pointerX = 0;
  let pointerY = 0;
  
  // Boolean variables to check if the button is being dragged
  let isDragging = false;
  
  // Add event listener for mousedown and touchstart events on the button
  goToTopBtn.addEventListener("mousedown", startDrag);
  goToTopBtn.addEventListener("touchstart", startDrag);
  
  function startDrag(e) {
    isDragging = true;
    pointerX = e.clientX || e.touches[0].clientX;
    pointerY = e.clientY || e.touches[0].clientY;
    posX = goToTopBtn.offsetLeft;
    posY = goToTopBtn.offsetTop;
    // Disable text selection while dragging
    document.body.style.userSelect = "none";
    e.preventDefault();
  }
  
  // Add event listener for mousemove and touchmove events on the document
  document.addEventListener("mousemove", drag);
  document.addEventListener("touchmove", drag);
  
  function drag(e) {
    if (isDragging) {
      let dx = (e.clientX || e.touches[0].clientX) - pointerX;
      let dy = (e.clientY || e.touches[0].clientY) - pointerY;
      let newX = posX + dx;
      let newY = posY + dy;

      const headerHeight = document.getElementById("header").offsetHeight;
      if (newY >= headerHeight && newY <= window.innerHeight - goToTopBtn.offsetHeight) {
        goToTopBtn.style.top = newY + "px";
      }

      if (newX <= 0) {
        // Snap to left edge
        goToTopBtn.style.left = 0;
      } else if (newX >= window.innerWidth - goToTopBtn.offsetWidth) {
        // Snap to right edge
        goToTopBtn.style.left = window.innerWidth - goToTopBtn.offsetWidth + "px";
      } else {
        // Update position
        goToTopBtn.style.left = newX + "px";
      }
    }
  }
  
  // Add event listener for mouseup and touchend events on the document
  document.addEventListener("mouseup", endDrag);
  document.addEventListener("touchend", endDrag);
  
  function endDrag(e) {
    if (isDragging) {
      if (e.button !== 0) {
        return;
      }
      // Calculate the distance of the button from the left and right edges of the screen
      let distanceFromLeft = goToTopBtn.offsetLeft;
      let distanceFromRight = window.innerWidth - goToTopBtn.offsetLeft - goToTopBtn.offsetWidth;
  
      // Snap the button to the nearest edge
      if (distanceFromLeft < distanceFromRight) {
        // Snap to left edge
        goToTopBtn.style.left = 0;
      } else {
        // Snap to right edge
        goToTopBtn.style.left = window.innerWidth - goToTopBtn.offsetWidth + "px";
      }
    }
  
    // Reset isDragging to false and enable text selection
    isDragging = false;
    document.body.style.userSelect = "auto";
  }
  
  // Add event listener for scroll event on the window
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
      goToTopBtn.style.display = "flex";
    } 
    if (window.pageYOffset === 0) {
      goToTopBtn.style.display = "none";
    }
  });
  
  // Add event listener for click event on the button
  goToTopBtn.addEventListener("click", function(e) {
    // Check if the button is being dragged
    if (!isDragging) {
      // If the button is not being dragged, initiate the smooth scroll back to the top of the page
      let currentPosition = window.pageYOffset;
      let targetPosition = 0;
      let distance = targetPosition - currentPosition;
      let duration = 500;
      let startTime = null;
  
      function scrollToTop(timestamp) {
        if (!startTime) {
          startTime = timestamp;
        }
        let progress = timestamp - startTime;
        let ease = easeInOutQuad(progress, currentPosition, distance, duration);
        window.scrollTo(0, ease);
        if (progress < duration) {
          requestAnimationFrame(scrollToTop);
        }
      }
  
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t *t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(scrollToTop);
    } else {
      // If the button is being dragged, prevent the default behavior of the click event
      e.preventDefault();
    }
  });
};

  /*
  // Add event listener for mousemove event on the document
  document.addEventListener("mousemove", function(e) {
    if (isDragging) {
      let dx = e.clientX - mouseX;
      let dy = e.clientY - mouseY;
      let newX = posX + dx;
      let newY = posY + dy;
      if (newY >= 0 && newY <= window.innerHeight - goToTopBtn.offsetHeight) {
        goToTopBtn.style.top = newY + "px";
      }
      if (newX <= window.innerWidth / 2 && newX >= 0) {
        // Snap to left edge
        goToTopBtn.style.left = 0;
        // Disable dragging and text selection
        isDragging = false;
        document.body.style.userSelect = "auto";
      } else if (newX >= window.innerWidth / 2 && newX <= window.innerWidth - goToTopBtn.offsetWidth) {
        // Enable dragging and disable text selection
        isDragging = true;
        goToTopBtn.style.left = newX + "px";
        document.body.style.userSelect = "none";
      }
    }
  });
  */