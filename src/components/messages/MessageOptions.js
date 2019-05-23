import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { connect } from 'react-redux';
import { removeMessage, toggleEditMessage } from '../../actions/messages';


const MessageOptions = ({ message, removeMessage, toggleEditMessage }) => (
  <div className='d-flex'>
    <FontAwesomeIcon onClick={() => toggleEditMessage(message)} className='mr-1' icon='edit'/>
    <FontAwesomeIcon onClick={() => removeMessage(message.id)} icon='trash-alt'/>
  </div>
);

export default connect(
  null,
  { removeMessage, toggleEditMessage }
)(MessageOptions);
