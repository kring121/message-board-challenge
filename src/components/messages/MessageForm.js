import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { connect } from 'react-redux';
import { addMessage } from '../../actions/messages';

const MessageForm = ({currentUser, addMessage}) => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const { title, content } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addMessage(title, content, currentUser);
    e.target.reset()
  }

  return (
    <form className='add-post-form mb-3' onSubmit={e => onSubmit(e)}>
      <div className='form-group'>
        <input
          type='text'
          name='title'
          required
          placeholder='Add Title...'
          onChange={e => onChange(e)}
        />
        <textarea
          name='content'
          required
          placeholder={`What's on your mind, ${currentUser}?`}
          onChange={e => onChange(e)}
        />
        <div className='post-submit'>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default connect(
  null,
  { addMessage }
)(MessageForm);
