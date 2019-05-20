import { LAUNCH_SIGNUP, LAUNCH_LOGIN, CLOSE_AUTH_MODAL, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

const initialState = {
  signUpLaunched: false,
  loginLaunched: false,
  isAuthenticated: null
}

export default function(state = initialState, action) {
  const { type } = action;

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
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state;
  }
}
