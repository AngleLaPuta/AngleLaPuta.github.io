const container = document.querySelector('.button-container');
const buttons = container.querySelectorAll('button');
const numButtons = buttons.length;
const startHue = 0;
const endHue = 240;
const hueStep = (endHue - startHue) / (numButtons - 1);

function getHSL(hue) {
  return `hsl(${hue}, 50%, 50%)`;
}

buttons.forEach((button, index) => {
  const hue = startHue + index * hueStep;
  button.style.backgroundColor = getHSL(hue);
});

container.addEventListener('mouseover', () => {
  container.style.backgroundSize = `100% ${100 / numButtons * 100}%`;
});

container.addEventListener('mouseout', () => {
  container.style.backgroundSize = `100% 0%`;
});
