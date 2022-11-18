const calculator = require('../functions/calculator');

test('1 + 2  to be 3', () => {
  expect(calculator.add(1,2)).toBe(3);
});

test('3 - 2 to be 1', () => {
  expect(calculator.subtract(3,2)).toBe(1);
});


test('10 / 5 to be 2', () => {
  expect(calculator.divide(10,5)).toBe(2);
});

test('10 * 5 to be 50', () => {
  expect(calculator.multiple(10,5)).toBe(50);
});
