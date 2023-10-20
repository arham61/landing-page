document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const sliderItems = document.querySelectorAll(".slider-item");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;

  // Function to update the slider position
  function updateSlider() {
    const itemWidth = sliderItems[currentIndex].offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  // Event listeners for next and previous buttons
  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = sliderItems.length - 1;
    }
    updateSlider();
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < sliderItems.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  });
});


window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const offset = window.scrollY;

  if (offset > 300) { // Adjust the offset value as needed
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
