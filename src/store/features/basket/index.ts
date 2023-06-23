import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BasketState {
  [key: string]: number;
}

export interface BasketStateAction {
  id: string;
  count: number;
}

const initialState: BasketState = {};

export const basketSlice = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {
    setItem: (state, { payload }: PayloadAction<BasketStateAction>) => {
      if (payload.count === 0) {
        delete state[payload.id];
        return;
      }
      state[payload.id] = payload.count;
    },
    removeItem: (state, { payload }: PayloadAction<string>) => {
      delete state[payload];
    },
  },
});
