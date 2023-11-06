export const createArrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step,
  );

export const filterByPrice = (cars, priceTo = 0) => {
  return cars.filter((auto) => {
    const autoPrice = Number(auto.rentalPrice.split('$')[1]);
    return autoPrice <= priceTo;
  });
};

export const filterByMileage = (cars, start = 0, end = 0) => {
  if (!start && !end) return cars;
  if (!start && end) return cars.filter((auto) => auto.mileage <= end);
  if (start && !end) return cars.filter((auto) => auto.mileage >= start);

  if (start && end) {
    return cars.filter((auto) => auto.mileage >= start && auto.mileage <= end);
  }
};

export const parseAddress = (address) => {
  // eslint-disable-next-line no-unused-vars
  const [_, city, country] = address.split(', ');
  return { city, country };
};
