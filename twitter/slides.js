const slideshow = document.getElementById("slideshow");
let scrollAmount = 0;
const scrollStep = 150;
let slideTimer;

function startTimer() {
  slideTimer = setInterval(() => {
    scrollAmount += scrollStep;
    slideshow.scroll({
      top: 0,
      left: scrollAmount,
      behavior: "smooth"
    });
    if (scrollAmount >= slideshow.scrollWidth - slideshow.clientWidth) {
      clearInterval(slideTimer);
      scrollAmount = 0;
      startTimer();
    }
  }, 3000);
}

startTimer();
