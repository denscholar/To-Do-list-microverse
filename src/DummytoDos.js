// /* eslint-disable import/no-cycle */
// import Store from './Store.js';
// import { taskList } from './selectors.js';
// import { check } from './checkStrikeAndEdit.js';

// // The handles all UI features
// export class DummytoDos {
//   // this guys handles all methods that goes on in the ui
//   static displayTask() {
//     const StoredTask = Store.getTask();
//     const tasks = StoredTask;
//     tasks.forEach((task) => DummytoDos.addTaskToList(task));
//   }

//   static addTaskToList({ description, completed, index }) {
//     const li = document.createElement('li');
//     li.innerHTML = `
//         <input class="check" type="checkbox" value="${completed}">
//         <input type="text" id="${index}" class="task-text" value="${description}" readonly>
//         <button><i id="" class="fas fa-ellipsis-v"></i></button>
//         <button class="btn"><i id="taskdelete" class="fas fa-trash"></i></button>
//         `;

//     taskList.appendChild(li);
//     check();
//   }

//   // Delete a task from the UI
//   static deleteTaskFromUI(e) {
//     if (e.classList.contains('btn')) {
//       e.parentElement.remove();
//     }
//   }
// }

// export default DummytoDos;