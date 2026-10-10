import assert from 'node:assert';
import test from 'node:test';
import { convert, getCurrency } from '../src/currency.js';

test('debe retornar la configuracion de la moneda BOB', () => {
  const curr = getCurrency('BOB');
  assert.strictEqual(curr.symbol, 'Bs');
});

test('debe convertir un monto correctamente', () => {
  assert.strictEqual(convert(100, 'BOB'), 100);
});