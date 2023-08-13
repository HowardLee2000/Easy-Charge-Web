document.addEventListener("DOMContentLoaded", function() {
  let images = document.querySelectorAll(".slideshow img");
  let trackers = document.querySelectorAll(".tracker-item");
  let prevButton = document.getElementById("prevButton");
  let nextButton = document.getElementById("nextButton");
  let index = 0;
  let slideshowInterval;

  function showImage() {

    // Update the tracker to mark the current image as active
    for (let i = 0; i < trackers.length; i++) {
      if (i === index) {
        trackers[i].classList.add("active");
      } else {
        trackers[i].classList.remove("active");
      }
    }
  }

  function autoplay() {
    // Determine the previous image index
    let previousIndex = index - 1;
    if (previousIndex < 0) {
      previousIndex = images.length - 1;
    }

    // Hide the previous image by moving it to the left
    images[previousIndex].style.left = "100%";

    // Show the next image by moving it in from the right
    images[index].style.left = "-100%";

    // Animate the transition by moving the next image into the main screen
    setTimeout(function() {
      images[previousIndex].style.opacity = "0";
      images[index].style.opacity = "1";
      images[index].style.left = "0";
    }, 0);

    // Increment the index for the next image
    index++;

    // Wrap around to the first image if index exceeds the number of images
    if (index === images.length) {
      index = 0;
    }

    // Show the next image with a transition
    setTimeout(showImage, 300);

    // Reset the autoplay timer
    clearInterval(slideshowInterval);
    startSlideshow();
  }

  function startSlideshow() {
    // Clear the existing interval
    clearInterval(slideshowInterval);

    // Start a new interval
    slideshowInterval = setInterval(autoplay, 3000); // Change the interval as needed
  }

  function goToPreviousImage() {
    // Decrement the index for the previous image
    index--;

    // Wrap around to the last image if index goes below zero
    if (index < 0) {
      index = images.length - 1;
    }

    // Reset the autoplay timer
    clearInterval(slideshowInterval);
    startSlideshow();

    // Show the previous image immediately without any transition
    showImage();
  }

  function goToNextImage() {
    // Increment the index for the next image
    index++;

    // Wrap around to the first image if index exceeds the number of images
    if (index === images.length) {
      index = 0;
    }

    // Reset the autoplay timer
    clearInterval(slideshowInterval);
    startSlideshow();

    // Show the next image immediately without any transition
    showImage();
  }

  // Add event listeners to the previous and next buttons
  prevButton.addEventListener("click", goToPreviousImage);
  nextButton.addEventListener("click", goToNextImage);

  // Start autoplay on page load
  startSlideshow();

  // Show the default image immediately without any transition
  showImage();
});