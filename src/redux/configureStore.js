import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";

const configureStore = (initialState) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose; // adds support for Redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())) // optional middleware that enhances functionality
  );
};

export default configureStore;
