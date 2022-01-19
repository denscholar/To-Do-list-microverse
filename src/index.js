/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import './style.css';

// Selectors
const ul = document.querySelector('.todo-list');
const todoContainer = document.querySelector('.todo-container');
const clearButton = document.createElement('button');
clearButton.classList.add('clear-button');
clearButton.textContent = 'Clear all Completed';

const todoTasks = [
  {
    description: 'This is my first task',
    completed: true,
    index: 0,
  },
  {
    description: 'This is my second task',
    completed: false,
    index: 1,
  },
  {
    description: 'This is my third task',
    completed: false,
    index: 2,
  },
  {
    description: 'This is my forth task',
    completed: true,
    index: 3,
  },
  {
    description: 'This is my fifth task',
    completed: false,
    index: 4,
  },
  {
    description: 'This is my sixth task',
    completed: false,
    index: 5,
  },
  {
    description: 'This is my seventh task',
    completed: false,
    index: 6,
  },
];

const displayTodo = () => {
  todoTasks.forEach((todo) => {
    const todoItem = document.createElement('li');
    todoItem.innerHTML = `
          <form class="form-container">
            <div>
              <input
                type="checkbox"
                value="${todo.completed}"
                checked;
              />
              <label>${todo.description}</label>
            </div>
            <div class="buttons">
            <i class="fas fa-trash-alt"></i>
              <i class="fas fa-ellipsis-v"></i>
            </div>
          </form>
    `;
    ul.appendChild(todoItem);
    todoContainer.appendChild(ul);
  });
  todoContainer.appendChild(clearButton);
};

document.addEventListener('DOMContentLoaded', displayTodo);
