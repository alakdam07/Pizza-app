const formatter = Intl.NumberFormat('FIN', {
  style: 'currency',
  currency: 'EURO',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
