import { Cinema, Film } from '@/shared/models/film.model';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AnyNaptrRecord } from 'dns';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    // getMovies: builder.query<Film[], void>({ query: () => 'movies' }),
    getMovie: builder.query({ query: (id) => `movie?movieId=${id}` }),
    getMovies: builder.query<Film[], string | void>({ query: (cinemaId) => `movies?cinemaId=${cinemaId}` }),
    getRewiews: builder.query({ query: (movieId) => `reviews` }),
    getReviewsByMovie: builder.query({ query: (movieId) => `reviews?movieId=${movieId}` }),
    getCinemas: builder.query<Cinema[], any>({ query: () => 'cinemas' }),
  }),
});
