import { GET_MESSAGES, GET_MESSAGE, MESSAGE_ERROR, ADD_MESSAGE, GET_COMMENTS, ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, TOGGLE_EDIT_COMMENT, REMOVE_MESSAGE } from '../actions/types';

const initialState = {
  messages: [],
  message: null,
  comments: [],
  error: {},
  toggleEditComment: false,
  editing: null
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
    case GET_COMMENTS:
      return {
        ...state,
        comments: payload
      }
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== payload)
      }
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === payload.id ? payload : comment
        )
      }
    case TOGGLE_EDIT_COMMENT:
    return {
      ...state,
      toggleEditComment: !state.toggleEditComment,
      editing: state.editing === null ? payload : null
    }
    case REMOVE_MESSAGE:
    return {
      ...state,
      messages: state.messages.filter(message => message.id !== payload)
    }
    default:
      return state;
  }
}
