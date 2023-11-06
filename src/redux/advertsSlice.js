import { createSlice } from '@reduxjs/toolkit';
import { getCarsThunk } from './operations';

const initialState = {
  cars: [],
  favorites: [],
  isLastPage: false,
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      state.favorites.push(payload);
    },
    deleteFavorite(state, { payload }) {
      state.favorites = state.favorites.filter(
        (auto) => auto.id !== payload.id,
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        const { cars, page } = payload;

        if (page === 1) state.cars = cars;
        if (page > 1) state.cars = [...state.cars, ...cars];

        if (cars.length < 12) state.isLastPage = true;

        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.isLastPage = false;
        state.error = null;
      })
      .addCase(getCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { addFavorite, deleteFavorite } = advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;
