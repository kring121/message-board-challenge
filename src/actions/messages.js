import axios from 'axios';
import { GET_MESSAGES, GET_MESSAGE, MESSAGE_ERROR, ADD_MESSAGE, ADD_COMMENT, REMOVE_COMMENT, GET_COMMENTS } from './types';

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
      payload: { msg: 'Whoops, something went wrong' }
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
      payload: { msg: 'Whoops, something went wrong' }
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
      payload: { msg: 'Whoops, something went wrong' }
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
      payload: { msg: 'Whoops, something went wrong' }
    });
  }
}

export const removeComment = (id) => async dispatch => {
  try {
    await axios.delete(`/api/comments/${id}`);
    dispatch({
      type: REMOVE_COMMENT,
      payload: id
    })
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: 'Whoops, something went wrong' }
    });
  }
}

export const getComments = () => async dispatch => {
  try {
    const res = await axios.get('/api/comments');
    dispatch({
      type: GET_COMMENTS,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: 'Whoops, something went wrong' }
    });
  }
}
