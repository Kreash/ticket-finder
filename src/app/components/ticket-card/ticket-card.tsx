'use client';

import React from 'react';
import styles from './ticket-card.module.css';
import Image from 'next/image';
import { Counter } from '@/shared/components/counter/counter';
import { useSelector, useDispatch } from 'react-redux';
import { selectMovieQuantity } from '@/store/features/basket/selector';
import { RootStore } from '@/store/store';
import { basketSlice } from '@/store/features/basket';
import { Film } from '@/shared/models/film.model';
import { genreMapper } from '@/utils/genre-mapper';
import Link from 'next/link';
import { TicketModal } from './components/ticket-modal';

export interface TicketCardProps {
  film: Film;
  isRemovable?: boolean;
}

export interface TicketCardProps {}

export function TicketCard({ film, isRemovable }: TicketCardProps) {
  return (
    <div className={styles.ticket + ' card-container'}>
      <div className={styles['content-wrapper']}>
        <div className={styles['image-wrapper']}>
          <Image src={film.posterUrl} alt="Basket icon" height={120} width={100} loading="lazy" />
        </div>
        <div className={styles.content}>
          <h5 className={styles.title}>
            <Link href={`/film/${film.id}`}>{film.title}</Link>
          </h5>
          <p className={styles.genre}>{genreMapper(film.genre)}</p>
        </div>
      </div>
      <CounterWrapper film={film} isRemovable={isRemovable}></CounterWrapper>
    </div>
  );
}

interface CounterWrapperProps {
  film: Film;
  isRemovable?: boolean;
}

function CounterWrapper({ film, isRemovable }: CounterWrapperProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  let movieTickets = useSelector((state: RootStore) => selectMovieQuantity(state, film.id));
  const dispatch = useDispatch();
  const countEditHundler = (count: number) => {
    if (isRemovable && count === 0) {
      removeHandler(film.id);
    } else {
      dispatch(basketSlice.actions.setItem({ id: film.id, count }));
    }
  };
  const removeHandler = (id: string) => {
    setIsModalOpen(true);
  };

  const completeHandler = (id: string) => {
    setIsModalOpen(false);
    dispatch(basketSlice.actions.removeItem(id));
  };

  const closeHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.buttons}>
      <Counter editValue={countEditHundler} value={movieTickets}></Counter>
      {isRemovable && (
        <>
          <button className={styles.remove} onClick={() => removeHandler(film.id)}></button>
          <TicketModal isOpen={isModalOpen} id={film.id} completeHandler={completeHandler} closeHandler={closeHandler}></TicketModal>
        </>
      )}
    </div>
  );
}
