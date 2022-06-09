const title = 'Paleta de Cores';

document.getElementsByTagName('title')[0].innerHTML = title;

const h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
h1.innerHTML = title;
document.body.appendChild(h1);
