import React from 'react';

export const A: React.FC<
  React.ComponentProps<'a'> & { children: React.ReactNode; className?: string }
> = ({ children, className, target = '_self', ...rest }) => (
  <a
    className={`x:focus-visible:nextra-focus x:text-primary-600 x:underline x:hover:no-underline x:decoration-from-font x:[text-underline-position:from-font] ${className ?? ''}`}
    target={target}
    {...rest}
  >
    {children}
    &nbsp;
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      height="1em"
      className="x:inline x:align-baseline x:shrink-0"
    >
      <path d="M7 17L17 7"></path>
      <path d="M7 7h10v10"></path>
    </svg>
  </a>
);

export const P: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
  ...rest
}) => (
  <p className={`mbs-4 leading-7 ${className ?? ''}`} {...rest}>
    {children}
  </p>
);
