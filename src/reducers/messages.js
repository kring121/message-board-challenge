import { GET_MESSAGES, GET_MESSAGE, MESSAGE_ERROR, ADD_MESSAGE, ADD_COMMENT } from '../actions/types';

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
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload]
      };
    case ADD_COMMENT:
    // because message comments are included with the message object itself
      return {
        ...state,
        messages: state.messages.map(message =>
          message.id === payload.messageId ? {...message, comments: [...message.comments, payload]} : message
        )
      };
    default:
      return state;
  }
}
