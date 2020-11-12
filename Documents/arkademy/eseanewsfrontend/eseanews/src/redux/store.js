import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware, logger),
);

export default store;
