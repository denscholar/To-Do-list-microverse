import Store from './Store.js';
// Event that Edit a task
const editTask = (index, li) => {
  const item = li.childNodes[3];
  const storage = Store.getTask();
  if (item.className === 'task-text') {
    item.removeAttribute('readOnly');
  };

};

export default editTask;
