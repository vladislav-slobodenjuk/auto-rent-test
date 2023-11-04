import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCars } from '../services/api';

export const getCarsThunk = createAsyncThunk(
  'adverts/getAllCars',
  async (params, thunkApi) => {
    try {
      const cars = await getAllCars(params);
      return cars;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
