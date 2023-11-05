import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCars } from '../services/api';

export const getCarsThunk = createAsyncThunk(
  'adverts/getCars',
  async (params, thunkApi) => {
    try {
      const cars = await getCars(params);
      return cars;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
