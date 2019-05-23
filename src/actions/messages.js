import axios from 'axios';
import { GET_MESSAGES, GET_MESSAGE, MESSAGE_ERROR, ADD_MESSAGE, ADD_COMMENT, REMOVE_COMMENT, GET_COMMENTS, EDIT_COMMENT, TOGGLE_EDIT_COMMENT, REMOVE_MESSAGE } from './types';

export const getMessages = () => async dispatch => {
  try {
    const res = await axios.get('/api/messages');
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
    const res = await axios.get(`/api/messages/${id}`);
    dispatch({
      type: GET_MESSAGE,
      payload: res.data
    });
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
    });
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
    });
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
    });
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: 'Whoops, something went wrong' }
    });
  }
}

export const editComment = (id, content, author, messageId) => async dispatch => {
  const body = { content, author, messageId };
  try {
    const res = await axios.put(`/api/comments/${id}`, body);
    dispatch({
      type: EDIT_COMMENT,
      payload: res.data
    });
    dispatch({
      type: TOGGLE_EDIT_COMMENT,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: 'Whoops, something went wrong' }
    });
  }
}

export const toggleEditComment = (payload) => dispatch => {
  dispatch({
    type: TOGGLE_EDIT_COMMENT,
    payload: payload
  });
}

export const removeMessage = (id) => async dispatch => {
  try {
    await axios.delete(`/api/messages/${id}`);
    dispatch({
      type: REMOVE_MESSAGE,
      payload: id
    });
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: 'Whoops, something went wrong' }
    });
  }
}
