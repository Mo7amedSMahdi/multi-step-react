import React from 'react';

/**
 * Initialize a value only once for a component instance.
 * Like `useMemo`, except this hook provides a semantic guarantee that the value
 * will be initialized only once.
 *
 * @example
 * const animated = useLazyRef(() => new Animated())
 *
 */
export const useLazyRef = <T>(factory: () => T): T => {
  const ref = React.useRef<T | null>(null);

  if (ref.current === null) {
    ref.current = factory();
  }

  return ref.current;
};
