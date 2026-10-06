import { round2 } from './money.js';
import { applyDiscount } from './discounts.js';
import { addTax } from './tax.js';

/**
 * Calcula el total de un carrito de compras.
 *
 * Reglas actuales:
 *  - El total es la suma de precio * cantidad de cada ítem.
 *  - Aplica primero el descuento, si corresponde.
 *  - Si se solicita, aplica IVA del 13% después del descuento.
 *  - El resultado se redondea a 2 decimales.
 *  - Un carrito vacío vale 0.
 *
 * @param {Array<{price: number, quantity: number}>} items Ítems del carrito.
 * @param {{discountCode?: string, includeTax?: boolean}} [options] Opciones para calcular el total.
 * @returns {number} Total del carrito.
 *
 * @example
 * calculateTotal([])                                   // 0
 * calculateTotal([{ price: 10, quantity: 2 }])         // 20
 * calculateTotal([
 *   { price: 25.5, quantity: 2 },
 *   { price: 40, quantity: 1 },
 * ])                                                   // 91
 * calculateTotal([{ price: 100, quantity: 1 }], { discountCode: 'SAVE10' }) // 90
 * calculateTotal([{ price: 100, quantity: 1 }], { includeTax: true }) // 113
 * calculateTotal(
 *   [{ price: 100, quantity: 1 }],
 *   { discountCode: 'SAVE10', includeTax: true }
 * ) // 101.7
 */
export function calculateTotal(
  items,
  { discountCode, includeTax = false } = {}
) {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const discounted = applyDiscount(round2(subtotal), discountCode);

  if (includeTax) {
    return addTax(discounted);
  }

  return discounted;
}