const inputDate = document.getElementById('date');
const createTask = () => {
  const btn = document.getElementById('btn-task');
  const list = document.getElementById('list');
  
  btn.addEventListener('click', () => {
    const task = document.createElement('li');
    task.innerHTML = inputDate.value;
    list.appendChild(task);
      list.addEventListener('click', (e) => {
      e.target.style.background = 'rgb(234,456,444)';
    })
    task.addEventListener('dblclick', (e) => {
      e.target.style.background === 'rgb(234,456,444)'
      e.target.style.background = 'white'
      alert(e.target.innerHTML + " esta completado");
    })
    inputDate.value = ''
    inputDate.focus()
  })
}
createTask();
