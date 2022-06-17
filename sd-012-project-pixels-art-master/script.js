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

const collorInitial = document.getElementsByClassName('color')[0];
localStorage.setItem('class', 'selected');
collorInitial.classList.add(localStorage.getItem('class'));
