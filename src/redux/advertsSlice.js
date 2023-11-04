import { createSlice } from '@reduxjs/toolkit';
import { getCarsThunk } from './operations';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.cars = [...state.cars, ...action.payload];
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
