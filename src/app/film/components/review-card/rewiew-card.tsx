import { Review } from '@/shared/models/review.model';
import styles from './rewiew-card.module.css';
import Image from 'next/image';

export interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <>
      <div className={styles['review-wrapper'] + ' card-container'}>
        <div className={styles.image}>
          <Image src="/photo.svg" alt="review.name" height={32} width={32}></Image>
        </div>
        <div className={styles.content}>
          <div className={styles['name-wrapper']}>
            <h4 className={styles.name}>{review.name}</h4>
            <p className={styles.rating}>
              <b>Оценка:</b> {review.rating}
            </p>
          </div>

          <p className={styles.text}>{review.text}</p>
        </div>
      </div>
    </>
  );
}
