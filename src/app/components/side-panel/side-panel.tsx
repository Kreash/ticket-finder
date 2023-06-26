'use client';

import styles from './side-panel.module.css';
import { CustomInput } from '@/ui/custom-input/custom-input';
import { CustomDropdown, DropDownItem } from '@/ui/custom-dropdown/custom-dropdown';
import { EnGenres } from '@/shared/models/genre.model';
import { genreMapper } from '@/utils/genre-mapper';
import { movieApi } from '@/services/movieApi';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filtersSlice } from '@/store/features/filters';

const genres: DropDownItem[] = [
  {
    id: 'notSelected',
    title: 'Не выбран',
  },
  {
    id: EnGenres.action,
    title: genreMapper(EnGenres.action),
  },
  {
    id: EnGenres.comedy,
    title: genreMapper(EnGenres.comedy),
  },
  {
    id: EnGenres.fantasy,
    title: genreMapper(EnGenres.fantasy),
  },
  {
    id: EnGenres.horror,
    title: genreMapper(EnGenres.horror),
  },
];

export function SidePanel({}) {
  const [sinemas, setSinemas] = useState<DropDownItem[]>([]);

  const { data, isLoading, error } = movieApi.useGetCinemasQuery(undefined);

  useEffect(() => {
    if (!data) {
      return;
    }

    const newSinemas = [
      {
        id: 'notSelected',
        title: 'Не выбран',
      },
    ];

    newSinemas.push(
      ...data.map((cinema) => {
        return {
          id: cinema.id,
          title: cinema.name,
        };
      }),
    );

    setSinemas(newSinemas);
  }, [data]);

  const dispatch = useDispatch();

  const inputHandler = (value: string) => {
    dispatch(filtersSlice.actions.setName(value));
    console.log('inputHandler', value);
  };

  const genreSelectHandler = (value: string) => {
    dispatch(filtersSlice.actions.setGenre(value));
  };

  const cinemaSelectHandler = (value: string) => {
    dispatch(filtersSlice.actions.setCinema(value === 'notSelected' ? undefined : value));
  };

  return (
    <div className={styles['side-panel-wrapper']}>
      <aside className={styles['side-panel'] + ' card-container'}>
        <div className={styles.title}>Фильтр поиска</div>
        <div className={styles.filters}>
          <CustomInput valueChanged={inputHandler} title="Название" placeholder="Введите название"></CustomInput>
          <CustomDropdown title="Жанр" options={genres} valueChanged={genreSelectHandler} placeholder="Выберите жанр" />
          <CustomDropdown
            title="Кинотеатр"
            options={sinemas}
            valueChanged={cinemaSelectHandler}
            placeholder={data ? 'Выберите кинотеатр' : 'Загрузка...'}
            disabled={isLoading}
          />
        </div>
      </aside>
    </div>
  );
}
