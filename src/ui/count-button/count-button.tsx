import styles from './count-button.module.css';

export interface CountButtonProps {
  clickHandler?: () => void;
  isPlus?: boolean;
  disabled?: boolean;
}

export function CountButton({ clickHandler, isPlus, disabled }: CountButtonProps) {
  return <button onClick={clickHandler} className={styles.button + ' ' + (isPlus && styles.plus) + (disabled ? ' ' + styles.disabled : '')}></button>;
}
