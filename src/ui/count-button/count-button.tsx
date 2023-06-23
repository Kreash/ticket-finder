import styles from './count-button.module.css';

export interface CountButtonProps {
  clickHandler?: () => void;
  isPlus?: boolean;
}

export function CountButton({ clickHandler, isPlus }: CountButtonProps) {
  return <button onClick={clickHandler} className={styles.button + ' ' + (isPlus && styles.plus)}></button>;
}
