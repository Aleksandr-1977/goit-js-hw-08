// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
const inputField = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const elements = [];
  let size = 20;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '2px';
    elements.push(div);
    size += 5;
  }

  boxesContainer.innerHTML = '';
  boxesContainer.append(...elements);
}

createButton.addEventListener('click', () => {
  const Number = parseInt(inputField.value, 10);

  if (!Number || Number < 1 || Number > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }
  createBoxes(Number);
  inputField.value = '';
});
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
