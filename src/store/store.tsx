import { configureStore } from '@reduxjs/toolkit';
import { BasketState, basketSlice } from './features/basket';
import { movieApi } from '@/services/movieApi';
import { FiltersState, filtersSlice } from './features/filters';

export interface RootStore {
  [movieApi.reducerPath]: ReturnType<typeof movieApi.reducer>;
  basket: BasketState;
  filters: FiltersState;
}

export const store = configureStore<RootStore>({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    basket: basketSlice.reducer,
    filters: filtersSlice.reducer,
  },
  middleware: (getDefaultMiddleware): any => getDefaultMiddleware().concat(movieApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
