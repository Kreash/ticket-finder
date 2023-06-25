import styles from './total.module.css';

export interface TotalProps {
  total: number;
}

export function Total({ total }: TotalProps) {
  return (
    <>
      <div className={styles['total-wrapper'] + ' card-container'}>
        <div>Итого билетов:</div>
        <div>{total ?? 0}</div>
      </div>
    </>
  );
}
