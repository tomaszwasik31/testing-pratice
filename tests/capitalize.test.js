const capitalize = require('../functions/capitalize');

test('"string" to be "String"', () => {
  expect(capitalize('string')).toBe('String');
});

test('"String" to be "String"', () => {
  expect(capitalize('String')).toBe('String');
});


test('"STRING" to be "String"', () => {
  expect(capitalize('STRING')).toBe('String');
});