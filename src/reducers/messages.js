import { GET_MESSAGES, GET_MESSAGE, MESSAGE_ERROR } from '../actions/types';

const initialState = {
  messages: [],
  message: null,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: payload
      };
    case GET_MESSAGE:
      return {
        ...state,
        message: payload
      };
    case MESSAGE_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
