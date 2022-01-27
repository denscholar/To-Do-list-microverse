/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import checkStrikeAndEdit from './checkStrikeAndEdit.js';
import { DummytoDos } from './DummytoDos.js';
import { form, input } from './selectors.js';
import Store from './Store.js';
import './style.css';
import Todo from './Todo.js';

// Events: display Books
document.addEventListener('DOMContentLoaded', DummytoDos.displayTask);

// Events: add a book
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const index = Store.getTask().length + 1;
  const inputText = input.value;
  const completed = false;
  if (inputText === '') {
    return;
  }
  // instatiate the Todo
  const todo = new Todo(inputText, completed, index);

  // add Task to UI
  DummytoDos.addTaskToList(todo);
  Store.addTask(todo);
  input.value = '';
});

// Events to remove a task from UI
document.querySelector('.task-list').addEventListener('click', (e) => {
  // remove from UI
  DummytoDos.deleteTaskFromUI(e.target);
  //   remove from Storage
  Store.deleteTask(e.target.parentElement.parentElement.childNodes[3].id);
});

// event for checked and strike and edit
document.querySelector('.task-list').addEventListener('click', (e) => {
  checkStrikeAndEdit(e);
});

// Event that shows the trashcan
// document.querySelector('.task-list').addEventListener('click', (e) => {
//   const item = e.target;
//   const inputElement = item.parentElement.childNodes;
//   const trashcan = item.parentElement.childNodes[5];
  
// });