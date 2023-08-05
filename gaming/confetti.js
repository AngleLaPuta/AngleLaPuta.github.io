// Create a confetti particle
function createConfettiParticle() {
  var particle = document.createElement('div');
  particle.className = 'confetti';
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.animationDuration = Math.random() * 3 + 2 + 's';
  particle.style.opacity = Math.random();
  
  // Remove the confetti particle from the DOM once the animation is complete
  particle.addEventListener('animationend', function() {
    particle.parentNode.removeChild(particle);
  });
  
  return particle;
}

// Generate a random color for the confetti particle
function getRandomColor() {
  var colors = ['#FF3C4A', '#FF8A3C', '#FFCA3C', '#8AFF3C', '#3CFF88', '#3CCBFF', '#8C3CFF', '#FF3CC1'];
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Create multiple confetti particles
function createConfetti() {
  var confettiContainer = document.getElementById('confetti-container');
  var numParticles = 50;
  
  for (var i = 0; i < numParticles; i++) {
    var particle = createConfettiParticle();
    particle.style.backgroundColor = getRandomColor();
    confettiContainer.appendChild(particle);
  }
}

// Start the confetti effect
function startConfetti() {
  createConfetti();
  setInterval(createConfetti, 3000); // Generate new confetti every 3 seconds
}

// Call the startConfetti function to begin the effect
startConfetti();
