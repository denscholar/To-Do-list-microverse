import Store from './Store.js';
import { check } from './checkStrikeAndEdit.js';

const strikeTthrough = (e) => {
  const tasks = Store.getTask();
  const item = e.target;
  // const index = item.id - 1;
  const description = item.parentElement.childNodes[3];
  console.log(description);
  const checkboxes = document.getElementsByClassName('check');
  for (let i = 0; i < checkboxes.length; i += 1) {
    if (tasks[i].completed === true) {
      description.style.display = 'line-through';
    } else {
      description.style.display = 'none';
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    check();
  }
};

export default strikeTthrough;