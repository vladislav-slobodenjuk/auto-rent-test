import axios from 'axios';

export const $autoRent = axios.create({
  baseURL: 'https://6544017c01b5e279de214019.mockapi.io/adverts',
});

export const getAllCars = async () => {
  const { data } = await $autoRent.get();
  return data;
};

export const getCarDyId = async (id) => {
  const { data } = await $autoRent.get(``, { params: { id } });
  return data[0];
};
