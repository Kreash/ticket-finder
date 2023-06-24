'use client';
import { useEffect, useState } from 'react';
import styles from './custom-input.module.css';
import useDebounce from '@/hooks/debounce/debounce';

export interface CustomInputProps {
  valueChanged?: (value: string) => void;
  value?: string;
  title?: string;
  placeholder?: string;
}

export function CustomInput({ valueChanged, value, title, placeholder }: CustomInputProps) {
  const [innerValue, setInnerValue] = useState(value ?? '');

  const debouncedSearchTerm = useDebounce(innerValue, 500);

  useEffect(() => {
    valueChanged?.(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {title}
        <input
          onChange={(e) => setInnerValue?.(e.target.value)}
          className={styles.input}
          // value={value ?? ''}
          type="text"
          placeholder={placeholder ?? ''}
        />
      </label>
    </div>
  );
}
