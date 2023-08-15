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
    if (window.pageYOffset > 300) {
      goToTopBtn.style.display = "flex";
    } 
    if (window.pageYOffset < 400) {
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

let smallNavs = document.getElementById("small-menu-nav");
let bigNavs = document.getElementById("menu-nav");

smallNavs.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    let targetId = link.getAttribute('href');
    let targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

bigNavs.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    let targetId = link.getAttribute('href');
    let targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// slideshow animation
document.addEventListener("DOMContentLoaded", function() {
  let images = document.querySelectorAll(".slideshow img");
  let trackers = document.querySelectorAll(".tracker-item");

  // button to manually navigate to different images
  let prevBtn = document.getElementById("prevButton");
  let nextBtn = document.getElementById("nextButton");

  // initialize global variables
  let globalIndex = 0;
  let autoplayTimer;
  let isTransitioning = false;
  const nextTime = 3000; // set desired time for auto next image
  const animationTime = 1000; // same as the transition time set in css

  // arrange images at the right position
  function showSlide() {
    if (isTransitioning) {
      return;
    }
    isTransitioning = true;
    let prevIndex = globalIndex - 1;
    let nextIndex = globalIndex + 1;

    if (prevIndex < 0) prevIndex = images.length - 1;
    if (nextIndex >= images.length) nextIndex = 0;

    // reset the position and z-index of all images
    images.forEach(function(image,index) {
      image.style.left = "100%";
      if (index === prevIndex) {
        if (images[prevIndex].style.left === "100%") {
          images[prevIndex].style.zIndex = "-1";
          images[prevIndex].style.left = "-100%";
        }
      } else if (index === globalIndex) {
        image.style.zIndex = "1";
        images[globalIndex].style.left = "0";
      } else if (index === nextIndex) {
        if (images[nextIndex].style.left === "-100%") {
          images[nextIndex].style.zIndex = "-1";
          images[nextIndex].style.left = "100%";
        }
      } else {
        image.style.zIndex = "-2";
      }
    });

    updateIndicator();

    prevBtn.disabled = true;
    nextBtn.disabled = true;

    setTimeout(() => {
      isTransitioning = false;
      prevBtn.disabled = false;
      nextBtn.disabled = false;
    }, animationTime);
  }

  // Update the tracker to mark the current image as active
  function updateIndicator() {
    for (let i = 0; i < trackers.length; i++) {
      if (i === globalIndex) {
        trackers[i].classList.add("active");
      } else {
        trackers[i].classList.remove("active");
      }
    }
  }

  // go to previous image when next button is clicked
  function goPrev() {
    if(isTransitioning) return;
    globalIndex--;

    // Wrap around to the last image if index goes below zero
    if (globalIndex < 0) globalIndex = images.length - 1;

    // Reset the autoplay timer
    resetAutoplay();
    showSlide();
  }

  // go to next image when next button is clicked
  function goNext() {
    if(isTransitioning) return;
    globalIndex++;

    // Wrap around to the first image if index exceeds the number of images
    if (globalIndex === images.length) globalIndex = 0;

    // Reset the autoplay timer
    resetAutoplay();
    showSlide();
  }
  
  // autoplay slideshow
  function autoplay() {
    if(isTransitioning) return;
    goNext();
    resetAutoplay();
    isTransitioning = false;
  }

  // reset autoplay timer
  function resetAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(autoplay, nextTime);
  }

  showSlide();

  // click and keyboard arrow key to navigate through images
  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);
  document.addEventListener("keyup", keyNavigation);

  function keyNavigation(e) {
    if(e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
    }
    if(e.key === "ArrowLeft") {
      goPrev();
    }
    if(e.key === "ArrowRight") {  
      goNext();
    }
  }
  resetAutoplay();
});