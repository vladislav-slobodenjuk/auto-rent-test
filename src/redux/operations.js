import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCars } from '../services/api';
import { filterByMileage, filterByPrice } from '../utils/utils';

export const getCarsThunk = createAsyncThunk(
  'adverts/getCars',
  async (params, thunkApi) => {
    const { page, mileageFrom, mileageTo, price } = params;
    try {
      const result = await getCars(params);
      console.log(params);

      let cars = result;

      if (mileageFrom || mileageTo)
        cars = filterByMileage(cars, mileageFrom, mileageTo);

      if (price) cars = filterByPrice(cars, price);

      return { cars, page };
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
