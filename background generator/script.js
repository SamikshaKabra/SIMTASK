const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const gradient = document.getElementById('gradient');
const gradientBtn = document.getElementById('gradientBtn');

function setGradient() {
  gradient.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

gradientBtn.addEventListener('click', setGradient);
