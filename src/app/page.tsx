'use client';

import { movieApi } from '@/services/movieApi';
import { SidePanel } from './components/side-panel/side-panel';
import { TicketCard } from './components/ticket-card/ticket-card';
import styles from './page.module.css';

export default function Home() {
  const { data, isLoading, error } = movieApi.useGetMoviesQuery(undefined);

  return (
    <>
      <div className={styles['main-page-wrapper']}>
        <div className={styles['side-panel-container']}>
          <SidePanel />
        </div>
        <div className={styles['main-page']}>
          {isLoading ? (
            <div>Загрузка...</div>
          ) : (
            data &&
            data.map((film) => {
              return (
                <div key={film.id} className={styles.ticket}>
                  <TicketCard film={film}></TicketCard>
                </div>
              );
            })
          )}

          {/* <div className={styles.ticket}>
            <TicketCard></TicketCard>
          </div>
          <div className={styles.ticket}>
            <TicketCard></TicketCard>
          </div>
          <div className={styles.ticket}>
            <TicketCard></TicketCard>
          </div>
          <div className={styles.ticket}>
            <TicketCard></TicketCard>
          </div> */}
        </div>
      </div>
    </>
  );
}
