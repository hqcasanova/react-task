import { HTMLAttributes } from 'react';

import classes from './CircularProgressbar.module.scss';

type Upstream = {
  className?: string,
  strokeWidth?: number
  sqSize?: number
  percentage?: number
}
type Props = Upstream & HTMLAttributes<HTMLElement>;

function CircularProgressbar({
  className = '',
  strokeWidth = 2,
  sqSize = 24,
  percentage = 0,
}: Props) {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100;
  const rootClasses = [
    'circular-progressbar',
    ...className.split(' '),
  ];
  const rootClassName = rootClasses
    .map((cName) => classes[cName] || cName)
    .filter(Boolean)
    .join(' ');

  return (
    <svg
      width={sqSize}
      height={sqSize}
      viewBox={viewBox}
      className={rootClassName}
    >
      <circle
        className={classes['circular-progressbar__background']}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className={classes['circular-progressbar__progress']}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
    </svg>
  );
}

export default CircularProgressbar;
