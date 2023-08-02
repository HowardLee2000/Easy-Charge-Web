// make sure function is called upon clicked
window.onload = function() {
  
  //scroll to top button
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
      // Calculate the distance of the button from the left and right edges of the screen
      let distanceFromLeft = goToTopBtn.offsetLeft;
      let distanceFromRight = window.innerWidth - goToTopBtn.offsetLeft - goToTopBtn.offsetWidth;
  
      // Snap the button to the nearest edge with a smooth transition
      if (distanceFromLeft < distanceFromRight) {
        // Snap to left edge
        goToTopBtn.style.left = 0;
      } else {
        // Snap to right edge with different distance for desktop and mobile
        goToTopBtn.style.left = window.innerWidth - goToTopBtn.offsetWidth + "px";
        /*
        if (window.innerWidth >= 768) {
          // Desktop
          goToTopBtn.style.left = window.innerWidth - goToTopBtn.offsetWidth - 8 + "px";
        } else {
          // Mobile
          goToTopBtn.style.left = window.innerWidth - goToTopBtn.offsetWidth + "px";
        }
        */
      }
    } else {
      // Disable transition effect when dragging
      goToTopBtn.style.transition = "none";
    }
  
    // Reset isDragging to false and enable text selection
    isDragging = false;
    document.body.style.userSelect = "auto";
    goToTopBtn.style.transition = "left 0.3s ease-out"
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
  
  goToTopBtn.addEventListener("click", function(e) {
    // Handle the click event
    e.preventDefault();
    scrollToTop();
  });
  
  goToTopBtn.addEventListener("touchstart", function(e) {
    // Handle the touchstart event
    e.preventDefault();
    scrollToTop();
    /*
    if (!isDragging) {
      // If the button is not being dragged, call the scrollToTop function
      e.preventDefault();
      scrollToTop();
    } else {
      // If the button is being dragged, prevent the default behavior of the touch event
      e.preventDefault();
      console.log('Hello')
    }
    */
  });

  // Add event listener for click event on the button
  function scrollToTop() {
    // Check if the button is being dragged
    if (!isDragging) {
      // Check if the button is at the left or right edge of the screen
      let rect = goToTopBtn.getBoundingClientRect();
      if (rect.left <= 0 || rect.right >= window.innerWidth) {
        // If the button is at the left or right edge of the screen, initiate the smooth scroll back to the top of the page
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
        // If the button is not at the left or right edge of the screen, do nothing
        return;
      }
    } else {
      // If the button is being dragged, prevent the default behavior of the click event
      e.preventDefault();
    }
  };
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