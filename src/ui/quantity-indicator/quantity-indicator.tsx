import styles from './quantity-indicator.module.css';

export interface QuantityIndicatorProps {
  quantity: number;
}

export function QuantityIndicator({ quantity }: QuantityIndicatorProps) {
  return (
    <>
      <div className={styles['quantity-wrapper']}>
        <div className={styles.quantity}>{quantity}</div>
      </div>
    </>
  );
}
