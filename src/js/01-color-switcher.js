const pageBody = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let colorTimer = null;




startBtn.addEventListener('click', () => {
  startBtn.disabled = true;

  colorTimer = setInterval(() => {
    pageBody.style.backgroundColor = getRandomHexColor();
  }, 1000);
  });
  
  stopBtn.addEventListener('click', () => {
    clearInterval(colorTimer);
    startBtn.disabled = false;
  });

 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}