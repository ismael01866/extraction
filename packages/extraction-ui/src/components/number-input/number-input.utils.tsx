export const clamp = (value: number, min?: number, max?: number) => {
  let next = value;

  if (min !== undefined) {
    next = Math.max(min, next);
  }

  if (max !== undefined) {
    next = Math.min(max, next);
  }

  return next;
};

export const getDecimalPlaces = (value: number) => {
  const stringValue = value.toString();
  const decimalIndex = stringValue.indexOf('.');

  return decimalIndex === -1 ? 0 : stringValue.length - decimalIndex - 1;
};

const round = (value: number, precision: number) => Number(value.toFixed(precision));

export const add = (a: number, b: number) => {
  const precision = Math.max(getDecimalPlaces(a), getDecimalPlaces(b));

  return round(a + b, precision);
};

export const subtract = (a: number, b: number) => {
  const precision = Math.max(getDecimalPlaces(a), getDecimalPlaces(b));

  return round(a - b, precision);
};
