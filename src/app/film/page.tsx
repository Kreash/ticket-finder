import styles from './page.module.css';
import { FilmCard } from './components/film-card/film-card';
import { RewiewCard } from './components/review-card/rewiew-card';

const mock = {
  title: 'Бэтмен: Начало',
  posterUrl: 'https://i.postimg.cc/9QGfp799/image.webp',
  releaseYear: 2005,
  description:
    'В детстве юный наследник огромного состояния Брюс Уэйн оказался свидетелем убийства своих родителей, и тогда он решил бороться с преступностью. Спустя годы он отправляется в путешествие по миру, чтобы найти способ восстановить справедливость. Обучение у мудрого наставника боевым искусствам дает ему силу и смелость. Вернувшись в родной город, Уэйн становится Бэтменом и ведет борьбу со злом.',
  genre: 'action',
  id: '2qtXtduRa5GHkfR5vB3Aw',
  rating: 8,
  director: 'Кристофер Нолан',
  reviewIds: ['LLcQ8y3uJHfl3bDeTWqea', 'w32kK5oV6UIr1ZHdkkMAn'],
};

const rewiewMock = {
  id: '6iaV-jUSjfl-gGk8EOdQ1',
  name: 'Андрей',
  text: 'Фильм хороший, но сюжет немного затянут',
  rating: 7,
};

export default function Film() {
  return (
    <>
      <div className={styles['film-wrapper']}>
        <FilmCard film={mock}></FilmCard>
        <div className={styles.rewiew}>
          <RewiewCard rewiew={rewiewMock}></RewiewCard>
        </div>
      </div>
    </>
  );
}
