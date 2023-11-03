import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars } from '../api/api';

export const getAllCarsThunk = createAsyncThunk(
  'adverts/getAllCars',
  async (_, thunkApi) => {
    try {
      const cars = await getAllCars();
      return cars;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
