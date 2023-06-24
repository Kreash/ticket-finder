'use client';

import styles from './ticket-card.module.css';
// import Image from 'next/image';
// import { CountButton } from '../../../ui/count-button/count-button';
import { Counter } from '../counter/counter';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { selectMovieQuantity } from '@/store/features/basket/selector';
import { RootStore } from '@/store/store';
import { basketSlice } from '@/store/features/basket';

export interface TicketCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  isRemovable?: boolean;
}

export interface TicketCardProps {}

export function TicketCard({ isRemovable }: TicketCardProps) {
  // const moviesQuantityInBasket = useSelector((state: RootStore) => selectMovieQuantity(state, '123'));

  const dispatch = useDispatch();
  const countEditHundler = (count: number) => {
    dispatch(basketSlice.actions.setItem({ id: '123', count }));
  };
  const removeHandler = (id: string) => {
    dispatch(basketSlice.actions.removeItem(id));
  };

  return (
    <div className={styles.ticket + ' card-container'}>
      <div className={styles['content-wrapper']}>
        <div className={styles['image-wrapper']}>{/* <Image src="/basket.svg" alt="Basket icon" height={32} width={32}/> */}</div>
        <div className={styles.content}>
          <h5 className={styles.title}>Название</h5>
          <p className={styles.description}>Описание</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <Counter editValue={countEditHundler} value={0}></Counter>
        {isRemovable && <button className={styles.remove} onClick={() => removeHandler('123')}></button>}
      </div>
    </div>
  );
}
