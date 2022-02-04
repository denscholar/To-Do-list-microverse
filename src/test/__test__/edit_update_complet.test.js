/* eslint-disable no-unused-vars */
import {
  updateStatuses, editTask, clearCompleted,
} from '../add_delete.js';

describe('Test clearCompleted tasks, update Status and edit Task', () => {
  const task = {
    description: 'Task1',
    index: 1,
    completed: false,
  };

  const newLocal = test('Clear completed tasks', () => {
    clearCompleted();
    const list = document.querySelectorAll('.listItem');
    expect(list).toMatchObject({});
  });

  const newLocal1 = test('Edit a Task', () => {
    const update = 'This is the update';
    expect(task.description).not.toEqual('This is the update');
    editTask(task, update);
    expect(task.description).toEqual('This is the update');
  });

  const newLocal2 = test('Update status', () => {
    const statusComplete = true;
    updateStatuses(task, statusComplete);
    expect(task.completed).toEqual(statusComplete);
  });
});