import { movieApi } from '@/services/movieApi';
import { Film } from '@/shared/models/film.model';
import { EnGenres } from '@/shared/models/genre.model';
import { selectFiltersModule } from '@/store/features/filters/selector';
import { RootStore } from '@/store/store';
import { use, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export interface useMoviesByFiltersProps {
  initialMovies?: Film[];
  initialIsFetching?: boolean;
}

export interface useMoviesByFiltersReturn {
  movies: Film[] | undefined;
  isFetching: boolean;
  isError?: boolean;
}

export function useMoviesByFilters({ initialMovies, initialIsFetching }: useMoviesByFiltersProps) {
  const [returnValue, setReturnValue] = useState<useMoviesByFiltersReturn>({
    movies: initialMovies,
    isFetching: initialIsFetching ?? false,
  });

  let filters = useSelector(selectFiltersModule);

  const { data, isFetching, isError } = movieApi.useGetMoviesQuery(filters.cinema);

  useEffect(() => {
    let movies = data;
    if (movies) {
      if (filters.genre) {
        movies = filters.genre !== EnGenres.notSelected ? movies.filter((movie) => movie.genre === filters.genre) : movies;
      }
      if (filters.name) {
        movies = movies.filter((movie) => filters.name && movie.title.toLowerCase().includes(filters.name.toLowerCase()));
      }
    }

    setReturnValue({
      movies: movies,
      isFetching: isFetching,
      isError,
    });
  }, [data, isFetching, isError, filters, setReturnValue]);

  return returnValue;
}
