import {
  LAUNCH_SIGNUP,
  LAUNCH_LOGIN,
  CLOSE_AUTH_MODAL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT
} from '../actions/types';

const initialState = {
  signUpLaunched: false,
  loginLaunched: false,
  isAuthenticated: null,
  currentUser: null,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case LAUNCH_SIGNUP:
      return {
        ...state,
        signUpLaunched: true,
        loginLaunched: false
      };
    case LAUNCH_LOGIN:
      return {
        ...state,
        signUpLaunched: false,
        loginLaunched: true
      };
    case CLOSE_AUTH_MODAL:
      return {
        ...state,
        signUpLaunched: false,
        loginLaunched: false
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: payload
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        error: payload
      }
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: null,
        currentUser: null
      }
    default:
      return state;
  }
}
