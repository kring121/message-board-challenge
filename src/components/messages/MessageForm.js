import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MessageForm = ({currentUser}) => (
  <form className='add-post-form mb-3'>
    <div className='form-group'>
      <input type='text' placeholder='Add Title...'/>
      <textarea placeholder={`What's on your mind, ${currentUser}?`}/>
      <div className='post-submit'>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </div>
    </div>
  </form>
)

export default MessageForm;
