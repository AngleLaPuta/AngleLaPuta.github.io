
let slideIndex = 0;
slideshowActive = true;
showSlides();

function toggleSlideshow() {
  slideshowActive = !slideshowActive;

  if (slideshowActive) {
    toggleButton.style.backgroundColor = 'green';
  } else {
    toggleButton.style.backgroundColor = 'red';
  }

  console.log(slideshowActive);
}

// Example: Bind the toggleSlideshow function to a button element with id "toggleButton"
let toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", toggleSlideshow);
toggleButton.style.backgroundColor = 'green';


function showSlides() {
  let slides = document.getElementsByClassName("bust");
  if (slideshowActive) {  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
    slideIndex++;
  } else {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "inline";
    }
  }
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
