// Exercise: pipelining
//
// 1) discuss the 3 implementations for solving the pipelining problem
// 2) rewrite the function pipeline() using high-order functions and reduce only
// 3) compare and discuss the functional solution
//
// NOTE: you do not need to adapt the test-case
// HINT: none :)

export function normalizeNumber(originalValue, vat, currency, discount) {
  // Implementation 1: calling separate functions for each pipelined call
  // return toCurrency(withDecimals(rounded(applyVat(rounded(originalValue-discount), vat)), 2), currency);

  // Implementation 2: inline primitive calls
  // return toCurrency(Math.round(applyVat(Math.round(originalValue-discount), vat)).toFixed(2), currency);
  
  // Implementation 3: fully encoded pipline
  let value = originalValue - discount;
  value = Math.round(value);
  value = value + (value * (vat / 100));
  value = Math.round(value);
  value = value.toFixed(2);
  return value + " " + currency;
}

function rounded(value) {
  return Math.round(value);
}

function applyVat(value, vat) {
  return value + (value * (vat / 100));
}

function withDecimals(value, decimals) {
  return value.toFixed(decimals);
}

function toCurrency(value, currency) {
  return value + " " + currency;
}

// Exercise: pipelining
//
// 1) discuss the 2 implementations for solving the pipelining problem
// 2) rewrite the function pipeline() using high-order functions and reduce only
// 3) compare and discuss the functional solution
//
// NOTE: you do not need to adapt the test-case
// HINT: none :)

export function normalizeString(string) {
  // Implementation 1: calling separate functions for each pipelined call
  // return trimTrailing(trimLeading(toUpperCase(collapse(replaceNumbers(string)))));

  // Implementation 2: fully encoded pipline
  return string
    .replace(/\d+/, '')
    .replace(/\s\s+/, ' ')
    .toUpperCase()
    .replace(/^\s+/, '')
    .replace(/\s+$/, '');
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