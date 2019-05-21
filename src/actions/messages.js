import axios from 'axios';
import { GET_MESSAGES, GET_MESSAGE, MESSAGE_ERROR, ADD_MESSAGE, ADD_COMMENT } from './types';

export const getMessages = () => async dispatch => {
  try {
    const res = await axios.get('/api/messages?_embed=comments');
    dispatch({
      type: GET_MESSAGES,
      payload: res.data
    });
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err, status: err.response.status }
    });
  }
}

export const getMessage = (id) => async dispatch => {
  try {
    const res = await axios.get(`/api/messages/${id}?_embed=comments`);
    dispatch({
      type: GET_MESSAGE,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response, status: err.response.status }
    });
  }
}

export const addMessage = (title, content, author) => async dispatch => {
  const body = { title, content, author };
  try {
    const res = await axios.post('/api/messages', body);
    dispatch({
      type: ADD_MESSAGE,
      payload: res.data
    });
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response, status: err.response.status }
    });
  }
}

export const addComment = (content, author, messageId) => async dispatch => {
  const body = { content, author, messageId };
  try {
    const res = await axios.post('/api/comments', body);
    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response, status: err.response.status }
    });
  }
}
