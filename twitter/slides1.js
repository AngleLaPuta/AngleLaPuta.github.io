
let slideIndex = 0;
let pslideIndex = 0;
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
  let pslides = document.getElementsByClassName("pride");
  if (slideshowActive) {  
    for (let i = 0; i < pslides.length; i++) {
      pslides[i].style.display = "none";
    }
    if (pslideIndex >= pslides.length) {
      pslideIndex = 0;
    }
    pslides[pslideIndex].style.display = "block";
    pslideIndex++;
  } else {
    for (let i = 0; i < pslides.length; i++) {
      pslides[i].style.display = "inline";
    }
  }
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

