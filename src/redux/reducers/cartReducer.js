export const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_AMIIBO_TO_CART":
      return [...state, { ...action.amiibo }];
    case "REMOVE_AMIIBO_FROM_CART":
      const updatedCart = state.cart.filter(
        (amiibo) => amiibo.id === action.amiibo.id
      );
      return [...state, ...updatedCart];
    default:
      return state;
  }
};
