export const addAmiiboToCart = (amiibo) => ({
  type: "ADD_AMIIBO_TO_CART",
  amiibo,
});

export const removeAmiiboFromCart = (amiibo) => ({
  type: "REMOVE_AMIIBO_FROM_CART",
  amiibo,
});
