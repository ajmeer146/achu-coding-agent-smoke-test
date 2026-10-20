import assert from 'node:assert/strict';
import { sum } from './src/utils.js';

test('sum works', () => assert.equal(sum(2, 3), 5));