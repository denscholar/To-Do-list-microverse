import { check } from './checkStrikeAndEdit.js';

const todoList = document.querySelector('.task-list');
const createTask = (task) => {
  let todoObj = '';
  if (task.completed === true) {
    todoObj = `
        <li id="${task.index}" class="task-item" draggable="true">
            <input class="check" type="checkbox" value="${task.completed}">
            <input type="text" id="${task.index}" class="task-text" value="${task.description}" readonly>
            <button><i id="" class="fas fa-ellipsis-v"></i></button>
            <button class="btn"><i id="taskdelete" class="fas fa-trash"></i></button>
        </li>`;
  } else {
    todoObj = `
          <li  id="${task.index}" class="task-item" draggable="true">
            <input class="check" type="checkbox" value="${task.completed}">
            <input type="text" id="${task.index}" class="task-text" value="${task.description}" readonly>
            <button><i id="" class="fas fa-ellipsis-v"></i></button>
            <button class="btn"><i id="taskdelete" class="fas fa-trash"></i></button>
          </li>`;
  }

  todoList.innerHTML += todoObj;
  check();
};

export default createTask;
