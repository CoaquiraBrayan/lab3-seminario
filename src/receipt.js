
import { formatPrice } from './format.js';

export function buildReceipt(items) {
  const lines = ['=== MINI TIENDA ===']; // Encabezado del recibo
  let total = 0;

  for (const item of items) {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const label = `${item.name} x${item.quantity}`.padEnd(28);
    const amount = formatPrice(subtotal, { width: 12 });

    lines.push(`${label}${amount}`);
  }

  lines.push(`${'TOTAL'.padEnd(28)}${formatPrice(total, { width: 12 })}`);

  return lines.join('\n');
}
