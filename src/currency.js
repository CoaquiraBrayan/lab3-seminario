export const CURRENCIES = {
  BOB: { symbol: 'Bs', rate: 1 },
  USD: { symbol: '$', rate: 0.145 },
  EUR: { symbol: '€', rate: 0.133 },
};

/**
 * Obtiene la configuracion de una moneda por su codigo.
 * Lanza un Error si la moneda no existe.
 */
export function getCurrency(code) {
  const currency = CURRENCIES[code];
  if (!currency) {
    throw new Error(`Moneda no soportada: ${code}`);
  }
  return currency;
}

/**
 * Convierte un monto segun la tasa de cambio de la moneda especificada
 * y lo redondea a 2 decimales.
 */
export function convert(amount, code = 'BOB') {
  const currency = getCurrency(code);
  const converted = amount * currency.rate;
  // Redondeo a 2 decimales
  return Math.round(converted * 100) / 100;
}
/**
 * esto es el fix typo
 * .
 */