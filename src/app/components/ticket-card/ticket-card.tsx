'use client';

import styles from './ticket-card.module.css';
import Image from 'next/image';
import { Counter } from '@/shared/components/counter/counter';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { selectMovieQuantity } from '@/store/features/basket/selector';
import { RootStore } from '@/store/store';
import { basketSlice } from '@/store/features/basket';
import { Film } from '@/shared/models/film.model';
import { genreMapper } from '@/utils/genre-mapper';
import Link from 'next/link';

export interface TicketCardProps {
  film: Film;
  isRemovable?: boolean;
}

export interface TicketCardProps {}

export function TicketCard({ film, isRemovable }: TicketCardProps) {
  // const moviesQuantityInBasket = useSelector((state: RootStore) => selectMovieQuantity(state, '123'));

  const dispatch = useDispatch();
  const countEditHundler = (count: number) => {
    dispatch(basketSlice.actions.setItem({ id: film.id, count }));
  };
  const removeHandler = (id: string) => {
    dispatch(basketSlice.actions.removeItem(id));
  };
  return (
    <div className={styles.ticket + ' card-container'}>
      <div className={styles['content-wrapper']}>
        <div className={styles['image-wrapper']}>
          <Image src={film.posterUrl} alt="Basket icon" height={120} width={100} />
        </div>
        <div className={styles.content}>
          <h5 className={styles.title}>
            <Link href={`/film/${film.id}`}>{film.title}</Link>
          </h5>
          <p className={styles.genre}>{genreMapper(film.genre)}</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <Counter editValue={countEditHundler} value={0}></Counter>
        {isRemovable && <button className={styles.remove} onClick={() => removeHandler('123')}></button>}
      </div>
    </div>
  );
}
