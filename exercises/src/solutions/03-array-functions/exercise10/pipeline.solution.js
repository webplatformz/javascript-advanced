export function normalizeNumber(value, vat, currency, discount) {
  return [ 
    (each) => value - discount,
    Math.round, 
    (each) => applyVat(each, vat), 
    Math.round, 
    (each) => each.toFixed(2),
    (each) => toCurrency(each, currency) 
  ].reduce((accumulator, fn) => fn(accumulator), value);
}

function applyVat(value, vat) {
  return value + (value * (vat / 100));
}

function toCurrency(value, currency) {
  return value + " " + currency;
}

export function normalizeString(string) {
  return [ replaceNumbers, collapse, toUpperCase, trimLeading, trimTrailing ].reduce((accumulator, fn) => fn(accumulator), string);
}

function replaceNumbers(string) {
  return string.replace(/\d+/, '');
}

function collapse(string) {
  return string.replace(/\s\s+/, ' ');
}

function toUpperCase(string) {
  return string.toUpperCase();
}

function trimLeading(string) {
  return string.replace(/^\s+/, '');
}

function trimTrailing(string) {
  return string.replace(/\s+$/, '');
}
