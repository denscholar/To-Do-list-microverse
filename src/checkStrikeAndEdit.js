import Store from './Store.js';

const checkStrikeAndEdit = (e) => {
  const tasks = Store.getTask();
  const item = e.target;
  const index = item.id - 1;
  // const completedTask = tasks[index];
  const check = item.parentElement.firstElementChild.checked;
  const description = item.parentElement.childNodes[3];
  if (check) {
    description.style.textDecoration = 'line-through';
    // completedTask = true;
  } else {
    description.style.textDecoration = 'none';
  }
  if (item.className === 'task-text') {
    item.removeAttribute('readOnly');
    description.addEventListener('keypress', (e) => {
      tasks[index].description = description.value;
      if (e.key === 'Enter') {
        item.setAttribute('readonly', true);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    });
  }
};

export default checkStrikeAndEdit;
