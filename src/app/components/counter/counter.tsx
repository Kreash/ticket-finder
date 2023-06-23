import styles from './counter.module.css';
import { CountButton } from '../../../ui/count-button/count-button';
import { useState } from 'react';

export interface CounterProps {
  editValue: (count: number) => void;
  value?: number;
}

export function Counter({ editValue, value }: CounterProps) {
  const [count, setCount] = useState(value ?? 0);

  const minusHandler = () => {
    count > 0 && setCount(count - 1);
    editValue(count);
  };
  const plusHandler = () => {
    setCount(count + 1);
    editValue(count);
  };

  return (
    <div className={styles.counter}>
      <CountButton clickHandler={minusHandler} />
      <div className={styles.num}>{count}</div>
      <CountButton clickHandler={plusHandler} isPlus={true} />
    </div>
  );
}
