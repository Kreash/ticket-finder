import { useEffect } from 'react';

export function useOutsideClick(ref: React.RefObject<HTMLElement>, callback: () => void) {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => handleClick(event);

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [ref, callback]);
}
