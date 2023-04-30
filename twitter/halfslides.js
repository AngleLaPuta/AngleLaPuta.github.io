let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides1 = document.getElementsByClassName("half");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}
  slides1[slideIndex-1].style.display = "block";
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
} 