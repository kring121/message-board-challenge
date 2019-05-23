import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { connect } from 'react-redux';
import { editMessage, toggleEditMessage } from '../../actions/messages';

const EditMessage = ({message, editMessage, toggleEditMessage}) => {
  const [formData, setFormData] = useState({
    title: message.title,
    content: message.content
  });

  const { title, content } = formData;
  const { id, author } = message;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editMessage(id, title, content, author);
  }
  return (
    <Fragment>
      <form className='message mb-2' onSubmit={e => onSubmit(e)}>
        <input
          type='text'
          name ='title'
          className='text-primary medium bold'
          onChange={e => onChange(e)}
          value={title}
        />
        <div className='user-info'>
          <FontAwesomeIcon className='user-profile-icon mr' icon='user'/>
          <h3 className='mt'>{message.author}</h3>
        </div>
        <textarea
          className='message-content'
          name='content'
          onChange={e => onChange(e)}
          value={content}
        />
        <div className='edit-btn-group d-flex'>
          <button type='submit' className='btn btn-primary'>Sumbit</button>
          <button type='button' className='btn' onClick={toggleEditMessage}>Cancel</button>
        </div>
      </form>
    </Fragment>
  )
};

EditMessage.propTypes = {
  editMessage: PropTypes.func.isRequired,
  toggleEditMessage: PropTypes.func.isRequired
}

export default connect(
  null,
  {editMessage, toggleEditMessage}
)(EditMessage);
