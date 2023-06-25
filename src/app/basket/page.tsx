import { TicketCard } from '../components/ticket-card/ticket-card';
import { Total } from './components/total/total';
import styles from './page.module.css';

export default function Basket() {
  return (
    <>
      <div className={styles['basket-wrapper']}>
        <div className={styles.ticket}>
          <TicketCard isRemovable={true} />
        </div>
        <div className={styles['total-wrapper']}>
          <Total />
        </div>
      </div>
    </>
  );
}
