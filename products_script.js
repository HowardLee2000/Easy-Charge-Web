// header active buttton
function activateButton(buttonId) {

  const button = document.getElementById(buttonId);

  const buttons = document.querySelectorAll('.button-container button');
  buttons.forEach((btn) => {
    btn.classList.remove('active-btn');
    btn.classList.add('not-active');
  });

  button.classList.remove('not-active');
  button.classList.add('active-btn');
}

// display different images when button is clicked (coupon mart)
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

window.onload = function() {

  // Mobile Menu Animation
  const menuBtn = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("dropdown");
  const closeBtn = document.getElementById("close-icon");

  mobileMenu.style.right = `-${mobileMenu.offsetWidth}px`;

  menuBtn.addEventListener('click', function() {
    mobileMenu.style.right = "0px";
  });
  closeBtn.addEventListener('click', function() {
    mobileMenu.style.right = `-${mobileMenu.offsetWidth}px`;
  });

  // auto scroll to top page function
  let goToTopBtn = document.getElementById("scroll-to-top");

  // hide and display button depending on scrolled distance away from top page
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
      goToTopBtn.style.display = "flex";
    } 
    if (window.pageYOffset === 0) {
      goToTopBtn.style.display = "none";
    }
  });
  
  // Handle the click and touchstart event
  goToTopBtn.addEventListener("click", function(e) {
    scrollToTop();
  });
  goToTopBtn.addEventListener("touchstart", function(e) {
    scrollToTop();
  });

  // scroll to top smooth transition animation
  function scrollToTop() {
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
  };
};