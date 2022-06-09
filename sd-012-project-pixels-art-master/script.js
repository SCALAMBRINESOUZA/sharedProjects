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
  divs[0].style.background = 'red';
  divs[1].style.background = 'yellow';
  divs[2].style.background = 'green';
  divs[3].style.background = 'magenta';
}
