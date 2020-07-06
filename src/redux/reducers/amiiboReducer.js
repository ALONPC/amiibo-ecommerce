export const amiibo = (state = [], action) => {
  console.log("amiibo -> state", state);
  console.log("amiibo -> action", action);
  switch (action.type) {
    case "SAVE_AMIIBOS_IN_STORE":
      return [...state, ...action.amiibos];
    default:
      return state;
  }
};
