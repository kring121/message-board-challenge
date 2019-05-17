import { GET_MESSAGES } from '../actions/types';

const initialState = {
  messages: []
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: payload
      };
    default:
      return state;
  }
}
