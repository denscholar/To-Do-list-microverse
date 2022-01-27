/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import checkStrikeAndEdit from './checkStrikeAndEdit.js';
import { form, input } from './selectors.js';
import Store from './Store.js';
import './style.css';
import Todo from './Todo.js';

// Events: display Task
// document.addEventListener('DOMContentLoaded', Store.displayTask);
// Events: add a Task

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
  Store.addTask(todo);
  input.value = '';
});

// event for checked and strike and edit
document.querySelector('.task-list').addEventListener('click', (e) => {
  checkStrikeAndEdit(e);
});

Store.displayTasks();
