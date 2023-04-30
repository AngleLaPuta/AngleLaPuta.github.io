let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("bust");
  console.log(slides)
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} 


let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let j;
  let slides1 = document.getElementsByClassName("half");
  for (j = 0; j < slides1.length; j++) {
    slides1[j].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}
  slides1[slideIndex-1].style.display = "block";
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
  let k;
  let slides2 = document.getElementsByClassName("full");
  for (k = 0; k < slides2.length; k++) {
    slides2[k].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}
  slides2[slideIndex2-1].style.display = "block";
  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}

let slideIndex3 = 0;
showSlides3();

function showSlides3() {
  let l;
  let slides3 = document.getElementsByClassName("ref");
  for (l = 0; l < slides3.length; l++) {
    slides3[l].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {slideIndex3 = 1}
  slides3[slideIndex3-1].style.display = "block";
  setTimeout(showSlides3, 2000); // Change image every 2 seconds
}