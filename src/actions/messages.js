import axios from 'axios';
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
} from './types';

export const getMessages = () => async dispatch => {
  try {
    const res = await axios.get('/api/messages?_sort=id&_order=desc');
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
  const date = Date.now();
  const body = { title, content, author, date };
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

export const toggleEditMessage = (payload) => dispatch => {
  dispatch({
    type: TOGGLE_EDIT_MESSAGE,
    payload: payload
  })
}

export const editMessage = (id, title, content, author) => async dispatch => {
  const body = { title, content, author };
  try {
    const res = await axios.put(`/api/messages/${id}`, body);
    dispatch({
      type: EDIT_MESSAGE,
      payload: res.data
    });
    dispatch({
      type: TOGGLE_EDIT_MESSAGE,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: 'Whoops, something went wrong' }
    });
  }
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

export const toggleEditComment = (payload) => dispatch => {
  dispatch({
    type: TOGGLE_EDIT_COMMENT,
    payload: payload
  });
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

export const getLikes = () => async dispatch => {
  try {
    const res = await axios.get('/api/likes');
    dispatch({
      type: GET_LIKES,
      payload: res.data
    });
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: 'Whoops, something went wrong' }
    });
  }
}

export const addLike = (messageId, author) => async dispatch => {
  const body = { messageId, author };
  try {
    const res = await axios.post('/api/likes', body);
    dispatch({
      type: ADD_LIKE,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: 'Whoops, something went wrong' }
    });
  }
}

export const removeLike = (id) => async dispatch => {
  try {
    await axios.delete(`/api/likes/${id}`);
    dispatch({
      type: REMOVE_LIKE,
      payload: id
    });
  } catch(err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: 'Whoops, something went wrong' }
    });
  }
}
