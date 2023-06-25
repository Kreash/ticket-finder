import { EnGenres } from '@/shared/models/genre.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  genre?: EnGenres;
  cinema?: string;
}

export interface FiltersStateAction {
  id: string;
  count: number;
}

const initialState: FiltersState = {};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    setGenre: (state, { payload }: PayloadAction<string>) => {
      if (isGenre(payload)) {
        state.genre = payload;
      }
    },
    setCinema: (state, { payload }: PayloadAction<string | undefined>) => {
      state.cinema = payload;
    },
  },
});

function isGenre(value: string): value is EnGenres {
  return value in EnGenres;
}
