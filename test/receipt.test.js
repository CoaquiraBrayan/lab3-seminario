
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildReceipt } from '../src/receipt.js';

test('genera un recibo con productos y total', () => {
  const receipt = buildReceipt([
    { name: 'Mouse Inalámbrico', price: 25.5, quantity: 2 },
  ]);

  assert.match(receipt, /=== MINI TIENDA ===/);
  assert.match(receipt, /Mouse Inalámbrico x2/);
  assert.match(receipt, /Bs 51\.00/);
  assert.match(receipt, /TOTAL/);
});

test('genera un recibo con total cero si no hay productos', () => {
  const receipt = buildReceipt([]);

  assert.match(receipt, /TOTAL/);
  assert.match(receipt, /Bs 0\.00/);
});
