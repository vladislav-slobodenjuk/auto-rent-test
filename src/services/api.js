import axios from 'axios';

export const $autoRent = axios.create({
  baseURL: 'https://6544017c01b5e279de214019.mockapi.io/adverts',
});

export const getCars = async ({ limit = 12, ...other }) => {
  const { data } = await $autoRent.get(``, { params: { limit, ...other } });
  return data;
};
