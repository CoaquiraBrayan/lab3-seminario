import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTax, addTax } from '../src/tax.js';

test('calculateTax calcula IVA del 13%', () => {
  assert.equal(calculateTax(100), 13);
});

test('addTax agrega IVA al monto', () => {
  assert.equal(addTax(100), 113);
});

test('calculateTax maneja montos cero y negativos', () => {
  assert.equal(calculateTax(0), 0);
  assert.equal(calculateTax(-100), -13);
});