/* eslint-disable eqeqeq */
import createTask from './displayTask.js';
import { check } from './checkStrikeAndEdit.js';

const todoList = document.querySelector('.task-list');

class Store {
  // get the task
  static getTask() {
    let tasks;
    // check if there is an item called task in local storage
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }

  // add task to storage
  static addTask(task) {
    const tasks = Store.getTask();
    tasks.push(task);
    Store.save(tasks);
    Store.displayTasks();
  }

  // Delete task from storage
  static deleteTask = () => {
    const tasks = Store.getTask();
    const deleteBtn = document.getElementsByClassName('fa-trash');
    for (let i = 0; i < deleteBtn.length; i += 1) {
      deleteBtn[i].addEventListener('click', () => {
        const filteredTask = tasks.filter((task) => task.index - 1 !== i);
        filteredTask.forEach((task, index) => {
          task.index = index + 1;
        });
        Store.save(filteredTask);
        Store.displayTasks();
      });
    }
  };

  static save(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static displayTasks = () => {
    const tasks = Store.getTask();
    todoList.innerHTML = '';
    const sortedList = tasks.sort((a, b) => {
      if (a.index > b.index) {
        return 1;
      }
      if (a.index < b.index) {
        return -1;
      }
      return 0;
    });
    sortedList.forEach((task) => {
      createTask(task);
    });
    Store.save(sortedList);
    check();
    Store.deleteTask();
  };
}

export default Store;