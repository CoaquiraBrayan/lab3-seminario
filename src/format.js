/**
 * Da formato a un precio para mostrarlo al usuario.
 *
 * Reglas actuales:
 *  - Siempre se muestra en bolivianos (Bs).
 *  - Siempre con dos decimales.
 *
 * @param {number} amount Monto a formatear.
 * @param {object} options Opciones de formato.
 * @param {number} [options.width=0] Ancho mínimo del precio.
 * @returns {string} Precio formateado.
 *
 * @example
 * formatPrice(10)    // 'Bs 10.00'
 * formatPrice(25.5)  // 'Bs 25.50'
 * formatPrice(0)     // 'Bs 0.00'
 */
export function formatPrice(amount, { width = 0 } = {}) {
  const price = `Bs ${amount.toFixed(2)}`;
  return price.padStart(width);
}
