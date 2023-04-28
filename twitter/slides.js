// define the path to the folder containing the images
    const imagePath = "images/";
    
    // retrieve all the images in the folder
    fetch(imagePath)
      .then(response => response.text())
      .then(text => {
        const parser = new DOMParser();
        const html = parser.parseFromString(text, "text/html");
        const images = html.querySelectorAll("a[href$='.jpg'], a[href$='.png'], a[href$='.gif']");
        
        // create the slideshow
        const slideshow = document.getElementById("slideshow");
        let currentIndex = 0;
        setInterval(() => {
          slideshow.style.backgroundImage = `url(${imagePath}${images[currentIndex].getAttribute("href")})`;
          currentIndex = (currentIndex + 1) % images.length;
        }, 5000);
      });