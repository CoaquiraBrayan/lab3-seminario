import { convert, getCurrency } from './currency.js';

/**
 * Da formato a un precio para mostrarlo al usuario.
 *
 * @param {number} amount Monto a formatear.
 * @param {string} [currency='BOB'] Código de la moneda a convertir y formatear.
 * @returns {string} Precio formateado con el símbolo de la moneda.
 *
 * @example
 * formatPrice(100, 'USD') // '$ 14.50'
 * formatPrice(10)        // 'Bs 10.00'
 */
export function formatPrice(amount, currency = 'BOB') {
  const convertedAmount = convert(amount, currency);
  const { symbol } = getCurrency(currency);
  return `${symbol} ${convertedAmount.toFixed(2)}`;
}