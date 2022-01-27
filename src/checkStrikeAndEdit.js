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
        Store.save(tasks);
        Store.displayTasks();
      }
    });
  }
};

export default checkStrikeAndEdit;