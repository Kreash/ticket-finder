import { Cinema, Film } from '@/shared/models/film.model';
import { Review } from '@/shared/models/review.model';
import { FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getMovie: builder.query({ query: (id) => `movie?movieId=${id}` }),
    getMovies: builder.query<Film[], string | void>({ query: (cinemaId) => `movies?cinemaId=${cinemaId}` }),
    getReviews: builder.query({ query: (movieId) => `reviews` }),
    getReviewsByMovie: builder.query<MovieWithReviews, string>({ query: (movieId) => `reviews?movieId=${movieId}` }),
    getCinemas: builder.query<Cinema[], any>({ query: () => 'cinemas' }),
    getMovieAndRewiews: builder.query({
      async queryFn(movieId, api, extraOptions, baseQuery) {
        const result = await Promise.all([baseQuery(`movie?movieId=${movieId}`), baseQuery(`reviews?movieId=${movieId}`)]);

        const data = {
          movie: result[0].data as Film,
          reviews: result[1].data as Review[],
        };

        return { data };
      },
    }),
  }),
});

export interface MovieWithReviews {
  movie: Film;
  reviews: Review[];
}

// async queryFn(movieId, api, extraOptions, baseQuery) {
//   const result = await Promise.all([baseQuery(`movies?movieId=${movieId}`), baseQuery(`reviews?movieId=${movieId}`)]);

//   return {
//     movie: result[0].data as Film,
//     reviews: result[1].data as Review[],
//   };
//   },
