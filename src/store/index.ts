import { createStore, combineReducers } from "redux";
import { authReducer } from "./reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

/**
 * function Provider () {
 *  store
 *  function App () {
 *    const appState = 1;
 *    function Header (props) {}
 *  }
 * }
 */
