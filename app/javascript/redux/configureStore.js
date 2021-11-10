import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import messageReducer from './message/messageReducer';

const combineMiddleware = [thunk, logger];

const reducer = combineReducers(
  {
    message: messageReducer,
  },
);

const store = createStore(
  reducer,
  applyMiddleware(...combineMiddleware),
);

export default store;
