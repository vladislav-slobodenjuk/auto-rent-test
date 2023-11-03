import { createSlice } from '@reduxjs/toolkit';
import { getAllCarsThunk } from './operations';

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
      .addCase(getAllCarsThunk.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const advertsReducer = advertsSlice.reducer;
