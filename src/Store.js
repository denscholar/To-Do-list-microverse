// import check from './check.js';

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

  static clearTask = () => {
    const tasks = Store.getTask();
    const clearBtn = document.querySelector('.clear-button');
    clearBtn.addEventListener('click', () => {
      const filteredTask = tasks.filter((task) => task.completed !== true);
      filteredTask.forEach((task, index) => {
        task.index = index + 1;
      });
      Store.save(filteredTask);
      Store.displayTasks();
    });
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
      Store.createTask(task);
    });
    Store.save(sortedList);
    Store.check();
    Store.deleteTask();
    Store.clearTask();
  };

  static check = () => {
    const tasks = Store.getTask();
    const checkboxes = document.getElementsByClassName('check');
    for (let i = 0; i < checkboxes.length; i += 1) {
      checkboxes[i].addEventListener('change', () => {
        if (tasks[i].completed === true) {
          tasks[i].completed = false;
        } else {
          tasks[i].completed = true;
        }
        Store.save(tasks);
        Store.displayTasks();
        Store.check();
      });
    }
  };

  static createTask = (task) => {
    let todoObj = '';
    if (task.completed === true) {
      todoObj = `
          <li id="${task.index}" class="task-item" draggable="true">
              <input class="check" type="checkbox" value="${task.completed}" checked>
              <input type="text" id="${task.index}" class="task-text line-through" value="${task.description}" readonly>
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
    Store.check();
  };
}

module.exports = Store;