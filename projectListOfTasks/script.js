const btn = document.getElementById('teste');


const validation = () => {
    const input = document.getElementById('input')
    if(input.value === '')
        alert('Digite seu nome:') 
};


btn.addEventListener('click', () => {
    const input = document.getElementById('input')
    input.value === '' ? validation() : localStorage.setItem('name', input.value);
});


const h1 = document.getElementsByTagName('h1')[0];
btn.addEventListener('dblclick', () => {
    const input = document.getElementById('input')
    let greeting = ''
    const initial = h1.innerHTML
    input.value = localStorage.getItem('name');
    greeting = `${input.value.toUpperCase()} ${initial}`
    h1.innerHTML = greeting;
})

window.onload = localStorage.removeItem('name');
