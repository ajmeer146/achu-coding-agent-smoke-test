import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sum, subtract } from './src/utils.js'

test('sum', () => assert.equal(sum(2, 3), 5))
test('subtract', () => assert.equal(subtract(5, 2), 3))