import Store from './Store.js';

const checkStrikeAndEdit = (e) => {
  const tasks = Store.getTask();
  const item = e.target;
  const index = item.id - 1;
  const description = item.parentElement.childNodes[3];
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

export const check = () => {
  const tasks = Store.getTask();
  const checkboxes = document.getElementsByClassName('check');
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', () => {
      if (tasks[i].completed === true) {
        tasks[i].completed = false;
      } else {
        tasks[i].completed = true;
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
      check();
    });
  }
};

export default checkStrikeAndEdit;
