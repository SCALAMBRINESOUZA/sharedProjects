const addPallets = () => {
  const pallets = document.getElementById('color-palette');
  for (let i = 0; i < 4; i += 1) {
    const div = document.createElement('div');
    div.setAttribute('class', 'color');
    pallets.appendChild(div);
  }
};
addPallets();

const collorPallets = () => {
  const pallet = document.querySelectorAll('.color');
  for (let i = 0; i < pallet.length; i += 1) {
    pallet[1].style.background = 'green';
    pallet[3].style.background = 'yellow';
  }
};

collorPallets();

const pixelSquare = () => {
  const nameClass = 'pixel';
  const table = document.getElementById('pixel-board');
  for (let rows = 0; rows < 5; rows += 1) {
    const row = document.createElement('tr');
    row.classList.add(nameClass);
    for (let colums = 0; colums < 5; colums += 1) {
      const column = document.createElement('th');
      column.classList.add(nameClass);
      row.appendChild(column);
    }
    table.appendChild(row);
  }
};

pixelSquare();

const collorInitial = () => {
  const blackColor = document.getElementsByClassName('color')[0];
  localStorage.setItem('class', 'selected');
  blackColor.classList.add(localStorage.getItem('class'));
};

const addClassSelected = () => {
  const selected = document.querySelectorAll('.color');
  for (let i = 0; i < selected.length; i += 1) {
    selected[i].addEventListener('click', (e) => {
      selected[0].classList.remove('selected');
      selected[1].classList.remove('selected');
      selected[2].classList.remove('selected');
      selected[3].classList.remove('selected');
      e.target.classList.add('selected');
    });
  }
};

addClassSelected();

const drawPixel = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', (e) => {
      const selected = document.querySelector('.selected');
      const cssObj = window.getComputedStyle(selected);
      e.target.style.background = cssObj.getPropertyValue('background');
    });
  }
};

drawPixel();

const clear = () => {
  const btnClear = document.getElementById('clear-board');
  btnClear.innerHTML = 'Limpar';
  btnClear.addEventListener('click', () => {
    const clearPixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < clearPixel.length; index += 1) {
      clearPixel[index].style.backgroundColor = 'white';
    }
  });
};

clear();

const pixelSquareI = (number) => {
  const nameClass = 'pixel';
  for (let rows = 0; rows < number; rows += 1) {
    const row = document.createElement('tr');
    row.style.border = '1px black solid';
    row.classList.add(nameClass);
    for (let colums = 0; colums < number; colums += 1) {
      const column = document.createElement('th');
      column.classList.add(nameClass);
      row.appendChild(column);
    }
    document.body.appendChild(row);
  }
  drawPixel();
};

const input = document.getElementById('board-size');
const verify = () => {
  if (input.value < 5) {
    pixelSquareI(5);
  }
  if (input.value > 50) {
    pixelSquareI(50);
  }
};

const createBoard = () => {
  const btnCreate = document.getElementById('generate-board');
  btnCreate.addEventListener('click', () => {
    if (input.value === '') {
      alert('Board inválido!');
    } else {
      document.getElementById('pixel-board').remove();
      const answer = input.value;
      pixelSquareI(answer);
      verify();
    }
  });
};

createBoard();

const generateColors = () => {
  const colors = document.querySelectorAll('.color');
  const letters = '0123456789ABCDEF';
  let color = '#';
  let colorOne = '#';
  let colorTwo = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
    colorOne += letters[Math.floor(Math.random() * 16)];
    colorTwo += letters[Math.floor(Math.random() * 16)];
    for (let j = 0; j < colors.length; j += 1) {
      colors[1].style.background = color;
      colors[2].style.background = colorOne;
      colors[3].style.background = colorTwo;
    }
  }
  return color;
};

generateColors();

window.onload = collorInitial;
