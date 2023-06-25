'use client';

import { movieApi } from '@/services/movieApi';
import { SidePanel } from './components/side-panel/side-panel';
import { TicketCard } from './components/ticket-card/ticket-card';
import styles from './page.module.css';
import { useMoviesByFilters } from '@/hooks/movies-by-filters/movies-by-filters';

export default function Home() {
  return (
    <>
      <div className={styles['main-page-wrapper']}>
        <div className={styles['side-panel-container']}>
          <SidePanel />
        </div>
        <div className={styles['main-page']}>
          <TicketCards />
        </div>
      </div>
    </>
  );
}

function TicketCards() {
  const { movies, isFetching } = useMoviesByFilters({});

  return (
    <>
      {isFetching ? (
        <div>Загрузка...</div>
      ) : (
        movies &&
        movies.map((film) => {
          return (
            <div key={film.id} className={styles.ticket}>
              <TicketCard film={film}></TicketCard>
            </div>
          );
        })
      )}
    </>
  );
}
