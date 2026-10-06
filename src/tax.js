import { round2 } from './money.js';

/**
 * Porcentaje del impuesto IVA.
 */
export const TAX_RATE = 0.13;

/**
 * Calcula solamente el impuesto de un monto.
 *
 * @param {number} amount
 * @returns {number}
 */
export function calculateTax(amount) {
  return round2(amount * TAX_RATE);
}

/**
 * Agrega el impuesto IVA a un monto.
 *
 * @param {number} amount
 * @returns {number}
 */
export function addTax(amount) {
  return round2(amount + calculateTax(amount));
}