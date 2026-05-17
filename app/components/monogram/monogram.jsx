import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="36"
      height="64"
      viewBox="0 0 36 64"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path
              d="M12.2,19.3l-2-3.2l-5.5,3.5L1,13.6l20.8-13l5.9,9.5c1.2,1.9,1.9,3.7,2.1,5.5c0.2,1.8,0,3.4-0.7,4.9c-0.7,1.5-1.8,2.7-3.4,3.7c-1.5,0.9-3,1.4-4.6,1.4c-1.6,0-3.1-0.5-4.5-1.4l-3.7,8.6L9,26.5L12.2,19.3z M23.8,15.9c0.2-0.9-0.2-2-0.9-3.2l-2-3.3l-6.1,3.8l2,3.3c0.8,1.2,1.6,2,2.5,2.2c0.9,0.3,1.8,0.1,2.8-0.5C23,17.7,23.6,16.9,23.8,15.9z">
          </path>
          <path
              d="M23.3,49.4l-0.1-12.2l-6.2,10h-3l-6.2-9.6v11.9H1.4V26.3h5.6l8.5,13.3l8.3-13.3h5.6l0.1,23.1H23.3z">
          </path>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
