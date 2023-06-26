'use client';

import Image from 'next/image';
import { Film } from '@/shared/models/film.model';
import styles from './film-card.module.css';
import { Counter } from '@/shared/components/counter/counter';
import { useDispatch } from 'react-redux';
import { basketSlice } from '@/store/features/basket';
import { genreMapper } from '@/utils/genre-mapper';

export interface FilmCardProps {
  film: Film;
}

export function FilmCard({ film }: FilmCardProps) {
  const dispatch = useDispatch();
  const countEditHundler = (count: number) => {
    dispatch(basketSlice.actions.setItem({ id: film.id, count }));
  };

  return (
    <>
      <div className={styles['film-wrapper'] + ' card-container'}>
        <Image className={styles.image} src={film.posterUrl} alt={film.title} height={500} width={400} loading="lazy" />
        <div className={styles.content}>
          <h4 className={styles.title}>{film.title}</h4>

          <p className={styles['short-description']}>
            <b>Жанр: </b>
            {genreMapper(film.genre)}
          </p>
          <p className={styles['short-description']}>
            <b>Год выпуска: </b>
            {film.releaseYear}
          </p>
          <p className={styles['short-description']}>
            <b>Рейтинг: </b>
            {film.rating}
          </p>
          <p className={styles['short-description']}>
            <b>Режиссер: </b>
            {film.director}
          </p>

          <p className={styles['description-title']}>Описание</p>
          <p className={styles.description}>{film.description}</p>
        </div>
        <div className={styles['counter-container']}>
          <Counter editValue={countEditHundler} value={0} />
        </div>
      </div>
    </>
  );
}
