import { createSlice } from '@reduxjs/toolkit';
import { getCarsThunk } from './operations';

const initialState = {
  cars: [],
  isLastPage: false,
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = [...state.cars, ...payload];
        if (payload.length < 12) {
          state.isLastPage = true;
        }

        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const advertsReducer = advertsSlice.reducer;
