const container = document.querySelector('.button-container');
const buttons = container.querySelectorAll('button');
const numButtons = buttons.length;
const startColor = [0, 0, 0]; // RGB value of lightest color
const endColor = [221, 221, 221]; // RGB value of darkest color
const colorStep = [
  (startColor[0] - endColor[0]) / (numButtons - 1),
  (startColor[1] - endColor[1]) / (numButtons - 1),
  (startColor[2] - endColor[2]) / (numButtons - 1)
];

buttons.forEach((button, index) => {
  r = startColor[0] - index * colorStep[0];
  g = startColor[1] - index * colorStep[1];
  b = startColor[2] - index * colorStep[2];
  button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
