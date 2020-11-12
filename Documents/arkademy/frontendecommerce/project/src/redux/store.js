import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import reactReducer from './reducers';

const store = createStore(
  reactReducer,
  applyMiddleware(promiseMiddleware, logger),
);

export default store;
