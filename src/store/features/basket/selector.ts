import { RootStore } from '@/store/store';

export const selectBasketModule = (store: RootStore) => store.basket;

export const selectMovieQuantity = (state: RootStore, id: string) => selectBasketModule(state)[id] || 0;
