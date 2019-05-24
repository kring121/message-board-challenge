import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';
import alert from './alert';


export default combineReducers({
  messages,
  auth,
  alert
});
