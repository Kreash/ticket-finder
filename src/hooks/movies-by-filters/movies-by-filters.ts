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
}

export function useMoviesByFilters({ initialMovies, initialIsFetching }: useMoviesByFiltersProps) {
  const [returnValue, setReturnValue] = useState<useMoviesByFiltersReturn>({
    movies: initialMovies,
    isFetching: initialIsFetching ?? false,
  });

  let filters = useSelector(selectFiltersModule);

  const { data, isFetching } = movieApi.useGetMoviesQuery(filters.cinema);

  useEffect(() => {
    console.log("useMoviesByFilters")
    setReturnValue({
      movies: data && filters.genre ? (filters.genre !== EnGenres.notSelected ? data?.filter((movie) => movie.genre === filters.genre) : data) : data,
      isFetching: isFetching,
    });
  }, [data, isFetching, filters, setReturnValue]);

  return returnValue;
}
