const widget = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId;

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);

function startColorChange() {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
}

function stopColorChange() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
}

function changeColor() {
  const randomColor = getRandomHexColor();
  widget.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
