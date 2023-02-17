import { strict as assert } from 'node:assert';
import capitalize from "../src/capitalize.js";

assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize(''), '');
  console.log('Все тесты пройдены!');
  