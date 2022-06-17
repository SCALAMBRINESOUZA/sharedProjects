const title = 'Paleta de Cores';

document.getElementsByTagName('title')[0].innerHTML = title;

const h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
h1.innerHTML = title;
document.body.appendChild(h1);

const div = document.createElement('div');
div.id = 'color-palette';
document.body.appendChild(div);

for (let i = 0; i < 4; i += 1) {
  const elements = document.createElement('div');
  elements.setAttribute('class', 'color');
  elements.style.border = 'black solid 1px';
  elements.style.height = '50px';
  elements.style.width = '50px';
  div.appendChild(elements);
}

const divs = document.getElementsByClassName('color');
for (let i = 0; i < divs.length; i += 1) {
  divs[0].style.background = 'black';
  divs[1].style.background = 'yellow';
  divs[2].style.background = 'green';
  divs[3].style.background = 'red';
}

const square = document.createElement('table');
square.setAttribute('id', 'pixel-board');
document.body.appendChild(square);

for (let cl = 0; cl < 5; cl += 1) {
  const row = document.createElement('tr');
  for (let ln = 0; ln < 5; ln += 1) {
    const column = document.createElement('td');
    row.setAttribute('class', 'pixel');
    row.appendChild(column);
    column.style.border = '1px solid black';
    column.style.width = '40px';
    column.style.height = '40px';
  }
  square.appendChild(row);
}

const collorInitial = () => {
  const blackColor = document.getElementsByClassName('color')[0];
  localStorage.setItem('class', 'selected');
  blackColor.classList.add(localStorage.getItem('class'));
  divs[1].classList.remove('selected');
  divs[2].classList.remove('selected');
  divs[3].classList.remove('selected');
};

window.onload = collorInitial;

divs[0].addEventListener('click', collorInitial);

const addClassSelected = () => {
  divs[1].addEventListener('click', (e) => {
    e.target.classList.add(localStorage.getItem('class'));
    divs[0].classList.remove('selected');
    divs[2].classList.remove('selected');
    divs[3].classList.remove('selected');
  });
  divs[2].addEventListener('click', (e) => {
    e.target.classList.add(localStorage.getItem('class'));
    divs[0].classList.remove('selected');
    divs[1].classList.remove('selected');
    divs[3].classList.remove('selected');
  });
  divs[3].addEventListener('click', (e) => {
    e.target.classList.add(localStorage.getItem('class'));
    divs[0].classList.remove('selected');
    divs[1].classList.remove('selected');
    divs[2].classList.remove('selected');
  });
};
addClassSelected();

const unitElement = document.getElementsByClassName('pixel');

for (let i = 0; i < unitElement.length; i += 1) {
  unitElement[i].addEventListener('click', (e) => {
    if (divs[0].classList.contains('selected')) {
      e.target.style.background = divs[0].style.background;
    }
    if (divs[1].classList.contains('selected')) {
      e.target.style.background = divs[1].style.background;
    }
  });
}

for (let i = 0; i < unitElement.length; i += 1) {
  unitElement[i].addEventListener('click', (e) => {
    if (divs[2].classList.contains('selected')) {
      e.target.style.background = divs[2].style.background;
    }
    if (divs[3].classList.contains('selected')) {
      e.target.style.background = divs[3].style.background;
    }
  });
}
