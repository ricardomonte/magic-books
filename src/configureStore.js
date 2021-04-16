import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';

function configureStore(initialState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, initialState, composeEnhancer());
}

export default configureStore;
