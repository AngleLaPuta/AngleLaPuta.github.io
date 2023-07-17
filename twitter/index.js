$(document).ready(function() {
  var adImages = [
    'ad.jpg',
    'ad.gif',
    'https://i.pinimg.com/736x/f8/97/ef/f897ef30cc7da93a5ddd408c375e35b6.jpg'
  ];

  function getRandomTime() {
    return Math.floor(Math.random() * 10000) + 5000;
  }

  function showAdWithDelay() {
    var $ad = $('.ad');
    $ad.fadeIn();

    // Select a random image source from the adImages array
    var randomIndex = Math.floor(Math.random() * adImages.length);
    var randomImageSrc = adImages[randomIndex];

    // Set the src attribute of the ad image
    $ad.find('img').attr('src', randomImageSrc);

     // Redirect to example.com when the ad is clicked
    $ad.find('img').on('click', function() {
      window.open('https://anglelaputa.github.io/twitter/comms.html', '_blank');
    });

    $ad.find('.close-button').on('click', function() {
      $ad.fadeOut();
    });
  }

  setInterval(showAdWithDelay, getRandomTime());
});
