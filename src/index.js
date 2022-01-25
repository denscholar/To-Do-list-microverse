/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import './style.css';

// Selectors
const ul = document.querySelector('.task-list');

const todoTasks = [
  {
    description: 'This is my first task',
    completed: true,
    index: 1,
  },
  {
    description: 'This is my second task',
    completed: false,
    index: 2,
  },
  {
    description: 'This is my third task',
    completed: false,
    index: 3,
  },
  {
    description: 'This is my forth task',
    completed: true,
    index: 4,
  },
  {
    description: 'This is my fifth task',
    completed: false,
    index: 5,
  },
];

const createTask = () => {
  todoTasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input class="check" type="checkbox" value="${task.completed}">
      <input type="text" id="${task.index}" class="task-text" type="checkbox" value="${task.description}" readonly>
      <button><i class="fas fa-ellipsis-v"></i></button>
      <button class="btn"><i id="${task.index}" onclick="deleteBtn(this.id)" class="fas fa-trash"></i></button>
        `;
    ul.appendChild(li);
  });
};

document.addEventListener('DOMContentLoaded', createTask);
