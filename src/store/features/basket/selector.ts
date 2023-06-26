import { RootStore } from '@/store/store';

export const selectBasketModule = (store: RootStore) => store.basket;

export const selectMovieQuantity = (state: RootStore, id: string) => selectBasketModule(state)[id] ?? 0;

export const selectBasketMovies = (state: RootStore) => {
  return Object.keys(selectBasketModule(state));
};

export const selectBasketTotalQuantities = (state: RootStore) => {
  return Object.values(selectBasketModule(state)).reduce((acc, curr) => acc + curr, 0);
};
