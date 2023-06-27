import { useEffect } from 'react';

export function useScroll(ref: React.RefObject<HTMLElement | Document>, callback: () => void) {
  useEffect(() => {
    const handleScroll = () => {
      callback();
    };

    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref, callback]);
}

export default useScroll;
