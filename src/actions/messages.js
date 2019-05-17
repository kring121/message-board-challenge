import axios from 'axios';
import { GET_MESSAGES, GET_MESSAGE, MESSAGE_ERROR } from './types';

export const getMessages = () => async dispatch => {
  try {
    const res = await axios.get('/messages');
    dispatch({
      type: GET_MESSAGES,
      payload: res.data
    });
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export const getMessage = (id) => async dispatch => {
  try {
    const res = await axios.get(`/messages/${id}`);
    dispatch({
      type: GET_MESSAGE,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
