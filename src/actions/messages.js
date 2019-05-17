import axios from 'axios';
import { GET_MESSAGES } from './types';

export const getMessages = () => async dispatch => {
  try {
    const res = await axios.get('/posts');
    dispatch({
      type: GET_MESSAGES,
      payload: res.data
    });
  } catch(err) {
    console.log(err)
  }
}
