/* eslint-disable eqeqeq */
// store class: handles storage: local storage

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
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Delete task from storage
  static deleteTask(id) {
    let tasks = Store.getTask();
    if (tasks.length === 1) {
      tasks = [];
    }
    const filteredTask = tasks.filter((task) => task.index != id);
    filteredTask.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(filteredTask));
  }
}

export default Store;