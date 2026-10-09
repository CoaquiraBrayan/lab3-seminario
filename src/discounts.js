import { round2 } from './money.js';

export const DISCOUNT_CODES = { SAVE10: 0.1, SAVE20: 0.2, BLACKFRIDAY: 0.3 };

// Aplica el descuento del código (sin distinguir mayúsculas); si no es válido, devuelve el monto igual.
export function applyDiscount(amount, code) {
    const normalizedCode = typeof code === 'string' ? code.toUpperCase() : undefined;
    if (!normalizedCode || !Object.hasOwn(DISCOUNT_CODES, normalizedCode)) {
        return amount;
    }

    const discount = DISCOUNT_CODES[normalizedCode];
    return round2(amount * (1 - discount));
}