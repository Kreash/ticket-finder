import { configureStore } from '@reduxjs/toolkit';
import { BasketState, basketSlice } from './features/basket';

export interface RootStore {
  basket: BasketState;
}

export const store = configureStore<RootStore>({
  reducer: {
    basket: basketSlice.reducer,
  },
});
