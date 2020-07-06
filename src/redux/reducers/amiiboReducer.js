export const amiibo = (state = [], action) => {
  switch (action.type) {
    case "SAVE_AMIIBOS_IN_STORE":
      return [...state, ...action.amiibos];
    default:
      return state;
  }
};
