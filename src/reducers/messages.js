import {
  GET_MESSAGES,
  GET_MESSAGE,
  MESSAGE_ERROR,
  ADD_MESSAGE,
  TOGGLE_EDIT_MESSAGE,
  EDIT_MESSAGE,
  REMOVE_MESSAGE,
  GET_COMMENTS,
  ADD_COMMENT,
  TOGGLE_EDIT_COMMENT,
  EDIT_COMMENT,
  REMOVE_COMMENT,
  GET_LIKES,
  ADD_LIKE,
  REMOVE_LIKE
} from '../actions/types';

const initialState = {
  messages: [],
  message: null,
  comments: [],
  likes: [],
  error: {},
  toggleEditComment: false,
  toggleEditMessage: false,
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
        // payload in front so we get desc order
        messages: [payload, ...state.messages]
      };
    case TOGGLE_EDIT_MESSAGE:
      return {
        ...state,
        toggleEditComment: false,
        toggleEditMessage: !state.toggleEditMessage,
        editing: payload
      };
    case EDIT_MESSAGE:
      return {
        ...state,
        messages: state.messages.map(message =>
          message.id === payload.id ? payload : message
        )
      };
    case REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(message => message.id !== payload)
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: payload
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, payload]
      };
    case TOGGLE_EDIT_COMMENT:
      return {
        ...state,
        toggleEditMessage: false,
        toggleEditComment: !state.toggleEditComment,
        editing: payload
      };
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === payload.id ? payload : comment
        )
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== payload)
      };
    case GET_LIKES:
      return {
        ...state,
        likes: payload
      }
    case ADD_LIKE:
      return {
        ...state,
        likes: [...state.likes, payload]
      }
    case REMOVE_LIKE:
      return {
        ...state,
        likes: state.likes.filter(like => like.id !== payload)
      };
    default:
      return state;
  }
}
