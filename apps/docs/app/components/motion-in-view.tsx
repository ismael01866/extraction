import { ElementType } from 'react';

import { InView, InViewProps } from 'extraction-ui';
import { cn } from 'extraction-ui-utils';

type MotionInViewProps<T extends ElementType = 'div'> = InViewProps<T> & {
  animationClassName?: string;
};

export function MotionInView(props: MotionInViewProps) {
  const { animationClassName, children, className, ...rest } = props;
  const classes = cn(className, 'transition-all', 'duration-slowest');

  return (
    <InView
      asChild
      className={classes}
      inactiveClassName={`translate-y-8 opacity-0 ${animationClassName ?? ''}`}
      threshold={0.4}
      once
      {...rest}
    >
      {children}
    </InView>
  );
}
