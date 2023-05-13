// Load the image
const image = new Image();
image.src = '3ds.png';
image.onload = () => {
  // Set up the canvas
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;
  
  // Draw the image on the canvas
  context.drawImage(image, 0, 0);
  
  // Add the text on top of the image
  context.fillStyle = 'white';
  context.font = 'bold 32px Arial';
  context.fillText('Hello, World!', 50, 50);
  
  // Add a button to download the canvas as an image
  const downloadBtn = document.getElementById('download');
  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
};
