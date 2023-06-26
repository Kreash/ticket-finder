'use client';

import styles from './page.module.css';
import { FilmCard } from '../components/film-card/film-card';
import { ReviewCard } from '../components/review-card/rewiew-card';
import { MovieWithReviews, movieApi } from '@/services/movieApi';
import { useEffect, useState } from 'react';

export default function Film({ params }: { params: { id: string } }) {
  const [movieWithReviws, setMovieWithReviws] = useState<MovieWithReviews>();

  const { data, isFetching, isError } = movieApi.useGetMovieAndRewiewsQuery(params.id);

  useEffect(() => {
    if (!data) {
      return;
    }
    setMovieWithReviws(data);
  }, [data]);

  return (
    <>
      <div className={styles['film-wrapper']}>
        {isFetching || isError ? (
          isError ? (
            <div>Ошибка: запрос на сервер завершился ошибкой</div>
          ) : (
            <div>Загрузка...</div>
          )
        ) : (
          <>
            {movieWithReviws && <FilmCard film={movieWithReviws.movie}></FilmCard>}
            {movieWithReviws &&
              movieWithReviws.reviews.map((review) => {
                return (
                  <div key={review.id} className={styles.review}>
                    <ReviewCard review={review}></ReviewCard>
                  </div>
                );
              })}
          </>
        )}
      </div>
    </>
  );
}
