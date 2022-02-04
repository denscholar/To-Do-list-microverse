import {
  clearCompleted,
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
});