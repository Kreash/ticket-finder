'use client';

import styles from './counter.module.css';
import { CountButton } from '@/ui/count-button/count-button';
import { useEffect, useState } from 'react';

export interface CounterProps {
  editValue: (count: number) => void;
  value?: number;
}

export function Counter({ editValue, value }: CounterProps) {
  const [count, setCount] = useState(value ?? 0);

  const minusHandler = () => {
    if (count > 0) {
      setCount(count - 1);
      editValue(count - 1);
    }
  };
  const plusHandler = () => {
    if (count < 30) {
      setCount(count + 1);
      editValue(count + 1);
    }
  };

  useEffect(() => {
    if (value !== undefined && value !== count) {
      setCount(value ?? 0);
    }
  }, [value, count]);

  return (
    <div className={styles.counter}>
      <CountButton disabled={count === 0} clickHandler={minusHandler} />
      <div className={styles.num}>{count}</div>
      <CountButton disabled={count === 30} clickHandler={plusHandler} isPlus={true} />
    </div>
  );
}
