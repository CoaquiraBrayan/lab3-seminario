import test from 'node:test';
import assert from 'node:assert/strict';
import { applyDiscount, calculateTotal, DISCOUNT_CODES } from '../src/index.js';

test('aplica el descuento indicado por el código', () => {
  assert.equal(applyDiscount(100, 'SAVE10'), 90);
  assert.equal(applyDiscount(100, 'SAVE20'), 80);
  assert.equal(applyDiscount(100, 'BLACKFRIDAY'), 70);
});

test('los códigos de descuento no distinguen mayúsculas', () => {
  assert.equal(applyDiscount(100, 'save10'), 90);
});

test('devuelve el monto sin cambios para códigos desconocidos o ausentes', () => {
  assert.equal(applyDiscount(100.123, 'INVALID'), 100.123);
  assert.equal(applyDiscount(100.123, 'toString'), 100.123);
  assert.equal(applyDiscount(100.123, undefined), 100.123);
});

test('redondea a dos decimales el monto descontado', () => {
  assert.equal(applyDiscount(10.05, 'SAVE10'), 9.05);
});

test('calculateTotal aplica el descuento al subtotal', () => {
  assert.equal(
    calculateTotal([{ price: 25.5, quantity: 2 }, { price: 40, quantity: 1 }], {
      discountCode: 'SAVE10',
    }),
    81.9,
  );
  assert.equal(calculateTotal([{ price: 100, quantity: 1 }]), 100);
});

test('calculateTotal acepta el código de descuento en minúsculas', () => {
  assert.equal(calculateTotal([{ price: 100, quantity: 1 }], { discountCode: 'save10' }), 90);
});

test('expone los códigos de descuento', () => {
  assert.deepEqual(DISCOUNT_CODES, { SAVE10: 0.1, SAVE20: 0.2, BLACKFRIDAY: 0.3 });
});
