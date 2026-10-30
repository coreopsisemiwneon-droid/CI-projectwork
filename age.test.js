const test = require('node:test');
const assert = require('node:assert');
const { isAdult } = require('./age');

test('17 is not an adult', () => {
  assert.strictEqual(isAdult(17), false);
});

test('18 is an adult', () => {
  assert.strictEqual(isAdult(18), true);
});

test('30 is an adult', () => {
  assert.strictEqual(isAdult(30), true);
});
