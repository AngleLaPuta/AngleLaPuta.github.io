let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("bust");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "block";
  slideIndex++;
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let slides1 = document.getElementsByClassName("half");
  for (let j = 0; j < slides1.length; j++) {
    slides1[j].style.display = "none";
  }
  if (slideIndex1 >= slides1.length) {
    slideIndex1 = 0;
  }
  slides1[slideIndex1].style.display = "block";
  slideIndex1++;
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
  let slides2 = document.getElementsByClassName("full");
  for (let k = 0; k < slides2.length; k++) {
    slides2[k].style.display = "none";
  }
  if (slideIndex2 >= slides2.length) {
    slideIndex2 = 0;
  }
  slides2[slideIndex2].style.display = "block";
  slideIndex2++;
  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}

let slideIndex3 = 0;
showSlides3();

function showSlides3() {
  let slides3 = document.getElementsByClassName("ref");
  for (let l = 0; l < slides3.length; l++) {
    slides3[l].style.display = "none";
  }
  if (slideIndex3 >= slides3.length) {
    slideIndex3 = 0;
  }
  slides3[slideIndex3].style.display = "block";
  slideIndex3++;
  setTimeout(showSlides3, 2000); // Change image every 2 seconds
}
