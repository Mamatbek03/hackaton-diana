export const calcSubPrice = (shoe) => {
  return shoe.reduce((total, elem) => total + shoe.price), 0;
};
