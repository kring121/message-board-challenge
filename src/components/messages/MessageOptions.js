import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { connect } from 'react-redux';
import { removeMessage } from '../../actions/messages';


const MessageOptions = ({ message, removeMessage }) => (
  <div className='d-flex'>
    <FontAwesomeIcon className='mr-1' icon='edit'/>
    <FontAwesomeIcon onClick={() => removeMessage(message.id)} icon='trash-alt'/>
  </div>
);

export default connect(
  null,
  { removeMessage }
)(MessageOptions);
