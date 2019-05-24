import axios from 'axios';
import { setAlert } from './alert';
import {
  LAUNCH_SIGNUP,
  LAUNCH_LOGIN,
  CLOSE_AUTH_MODAL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT
} from './types';

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

export const login = (username, password) => async dispatch => {
  try {
    const res = await axios.get(`/api/users?username=${username}&password=${password}`);

    if(res.data.length !== 0) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: username
      });
    } else {
      dispatch(setAlert('Invalid credentials', 'danger'));
    }
  } catch(err) {
      dispatch({
        type: LOGIN_FAIL
      });
  }
}

export const signUp = (username, password) => async dispatch => {
  const body = {username, password};

  try {
    const userExists = await axios.get(`/api/users?username=${username}`);

    if(userExists.data.length === 0) {
      const res = await axios.post('/api/users', body);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: username
      });
    } else {
      dispatch(setAlert('User already exists', 'danger'));
    }
  } catch(err) {
    dispatch({
      type: SIGNUP_FAIL
    });
  }
}

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
}
