import React from 'react';

export function getFractionFromPointer(event: React.MouseEvent<HTMLElement>, fractions: number) {
  const rect = event.currentTarget.getBoundingClientRect();
  const relativeX = (event.clientX - rect.left) / rect.width;
  const clamped = Math.max(0, Math.min(1, relativeX));

  return Math.ceil(clamped * fractions) / fractions;
}

export function getFill(numericDisplayValue: number, numericValue: number, fractions?: number) {
  const itemStart = numericValue - 1;

  if (!fractions) {
    return numericDisplayValue >= numericValue ? 1 : 0;
  }

  return Math.max(0, Math.min(1, numericDisplayValue - itemStart));
}
