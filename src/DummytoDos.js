/* eslint-disable import/no-cycle */
import Store from './Store.js';
import { taskList } from './selectors.js';
import editTask from './newFile.js';

// The handles all UI features
export class DummytoDos {
  // this guys handles all methods that goes on in the ui
  static displayTask() {
    const StoredTask = Store.getTask();
    const tasks = StoredTask;
    tasks.forEach((task) => DummytoDos.addTaskToList(task));
  }

  static giveLength() {
    return DummytoDos.tasks.length;
  }

  static addTaskToList({ description, completed, index }) {
    const li = document.createElement('li');
    li.innerHTML = `
        <input class="check" type="checkbox" value="${completed}">
        <input type="text" id="${index}" class="task-text" value="${description}" readonly>
        <button><i id="" class="fas fa-ellipsis-v"></i></button>
        <button class="btn"><i id="taskdelete" class="fas fa-trash"></i></button>
        `;
    editTask(index, li);

    taskList.appendChild(li);
  }

  // Delete a task from the UI
  static deleteTaskFromUI(e) {
    if (e.classList.contains('fa-trash')) {
      e.parentElement.parentElement.remove();
    }
  }
}
// const editTask = (index, li) => {
//   console.log(li.childNodes[3]);
//   li.childNodes[3].addEventListener('onkeypress', (e) => {
//     console.log('hello world');
//   });

//   document.querySelector('.task-list').addEventListener('click', (e) => {
//     const storage = Store.getTask();
//     const item = e.target;
//     if (item.parentElement.childNodes[3].className === 'task-text') {
//       item.parentElement.childNodes[3].removeAttribute('readOnly');
//     }
//   });
// };

export default DummytoDos;