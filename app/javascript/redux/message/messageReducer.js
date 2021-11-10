import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchAPI from '../../api/fetchAPI';

const FETCH_MESSAGE_FULFILLED = 'hello-rails-react/FETCH_MESSAGE/fulfilled';

const initialState = {
  status: 'default',
  message: {},
};

export const fetchMessage = createAsyncThunk('hello-rails-react/FETCH_MESSAGE', async () => {
  const message = await fetchAPI();
  return message;
});

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGE_FULFILLED:
      return {
        status: 'ready',
        message: action.payload,
      };
    default:
      return state;
  }
};

export default messageReducer;
