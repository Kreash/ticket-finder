'use client';

import { useSelector } from 'react-redux';
import { TicketCard } from '../components/ticket-card/ticket-card';
import { Total } from './components/total/total';
import styles from './page.module.css';
import { selectBasketMovies, selectBasketTotalQuantities, selectMovieQuantity } from '@/store/features/basket/selector';
import { movieApi } from '@/services/movieApi';
import { useEffect, useState } from 'react';
import { Film } from '@/shared/models/film.model';
import { Modal } from '@/ui/modal/modal';

export default function Basket() {
  return (
    <>
      <div className={styles['basket-wrapper']}>
        <div className={styles.ticket}>
          <TicketCards />
        </div>
        <div className={styles['total-wrapper']}>
          <TotalWrapper />
        </div>
      </div>
    </>
  );
}

function TicketCards() {
  const [movies, setMovies] = useState<Film[]>([]);

  const movieIds = useSelector(selectBasketMovies);

  const { data, isFetching, isError } = movieApi.useGetMoviesQuery();

  useEffect(() => {
    if (!data) {
      return;
    }

    const filteredMovies = data.filter((movie) => movieIds.includes(movie.id));
    setMovies(filteredMovies);
  }, [movieIds, data, isFetching]);

  return (
    <>
      {isFetching || isError ? (
        isError ? (
          <div>Ошибка: запрос на сервер завершился ошибкой</div>
        ) : (
          <div>Загрузка...</div>
        )
      ) : (
        movies &&
        movies.map((film) => {
          return (
            <div key={film.id} className={styles.ticket}>
              <TicketCard film={film} isRemovable={true}></TicketCard>
            </div>
          );
        })
      )}
    </>
  );
}

function TotalWrapper() {
  const total = useSelector(selectBasketTotalQuantities);

  return <Total total={total} />;
}
