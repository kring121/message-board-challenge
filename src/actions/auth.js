import axios from 'axios';
import { LAUNCH_SIGNUP, LAUNCH_LOGIN, CLOSE_AUTH_MODAL } from './types';

export const launchSignup = () => dispatch => {
  dispatch({
    type: LAUNCH_SIGNUP
  });
}

export const launchLogin = () => dispatch => {
  dispatch({
    type: LAUNCH_LOGIN
  });
}

export const closeAuthModal = () => dispatch => {
  dispatch({
    type: CLOSE_AUTH_MODAL
  });
}
