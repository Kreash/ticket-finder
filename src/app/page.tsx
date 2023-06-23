import { SidePanel } from './components/side-panel/side-panel';
import { TicketCard } from './components/ticket-card/ticket-card';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={styles['main-page-wrapper']}>
        <div className={styles['side-panel-container']}>
          <SidePanel />
        </div>
        <div className={styles['main-page']}>
          <TicketCard isRemovable={true}></TicketCard>
        </div>
      </div>
    </>
  );
}
