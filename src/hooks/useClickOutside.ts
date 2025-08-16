import { useEffect, useRef } from 'react';

export const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        callback();
      }
    };

    const controller = new AbortController();
    const { signal } = controller;

    document.addEventListener('mousedown', handleClick, { signal });

    return () => controller.abort();
  }, [callback]);

  return ref;
};
