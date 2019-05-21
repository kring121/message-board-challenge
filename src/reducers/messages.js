import { GET_MESSAGES, GET_MESSAGE, MESSAGE_ERROR, ADD_MESSAGE, ADD_COMMENT } from '../actions/types';

const initialState = {
  messages: [],
  message: null,
  comments: [],
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
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload]
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, payload]
      };
    default:
      return state;
  }
}
