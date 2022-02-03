import { addtask, removeTask } from '../add_delete.js';

describe('Add and delete tests', () => {
  const task = {
    description: 'task',
    index: 1,
    completed: false,
  };

  test('Add one item to the list', () => {
    addtask(task);
    const list = document.querySelectorAll('.listItem');
    expect(list).toHaveLength(1);
  });

  test('Delete a task', () => {
    removeTask(0);
    const list = document.querySelectorAll('.listItem');
    expect(list).toHaveLength(0);
  });
});