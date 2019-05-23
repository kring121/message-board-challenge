import React from 'react';
import PropTypes from 'prop-types';
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

MessageOptions.propTypes = {
  removeMessage: PropTypes.func.isRequired,
  toggleEditMessage: PropTypes.func.isRequired
}

export default connect(
  null,
  { removeMessage, toggleEditMessage }
)(MessageOptions);
