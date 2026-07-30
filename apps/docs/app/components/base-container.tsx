import React from 'react';

export function BaseContainer({
  children,
  className = '',
  ...rest
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`base-container x-container variant-outline palette-neutral ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
