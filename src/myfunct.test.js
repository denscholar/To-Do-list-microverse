const myfunct = require('./myfunct.js');

test('tell me it\'s successful', () => {
  expect(myfunct(5, 10)).toBe(15);
});