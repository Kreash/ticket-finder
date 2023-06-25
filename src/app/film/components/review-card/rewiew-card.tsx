import { Rewiew } from '@/shared/models/rewiew.model';
import styles from './rewiew-card.module.css';
import Image from 'next/image';

export interface RewiewCardProps {
  rewiew: Rewiew;
}

export function RewiewCard({ rewiew }: RewiewCardProps) {

  return (
    <>

      <div className={styles['rewiew-wrapper'] + ' card-container'}>
        <div className={styles.image}><Image src="/photo.svg" alt="rewiew.name" height={32} width={32}></Image></div>
        <div className={styles.content}>
          <div className={styles['name-wrapper']}>
            <h4 className={styles.name}>{rewiew.name}</h4>
            <p className={styles.rating}>
              <b>Оценка:</b> {rewiew.rating}
            </p>
          </div>

          <p className={styles.text}>{rewiew.text}</p>
        </div>
      </div>
    </>
  );
}
