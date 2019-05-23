import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';
import MessageForm from './MessageForm';
import EditMessage from './EditMessage';

// Redux
import { connect } from 'react-redux';
import { getMessages } from '../../actions/messages';

const Messages = ({ getMessages, messages, currentUser, editing, toggleEditMessage }) => {
  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return (
    <div className='message-feed mt-5 mb-3'>
      <MessageForm currentUser={currentUser}/>
      {messages.map(message => (
          toggleEditMessage === true && message.id === editing.id ? <EditMessage key={message.id} message={message}/> : <MessageItem key={message.id} message={message} currentUser={currentUser}/>
        ))
      }
    </div>
  );
};

Messages.propTypes = {
  getMessages: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  toggleEditMessage: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  messages: state.messages.messages,
  currentUser: state.auth.currentUser,
  editing: state.messages.editing,
  toggleEditMessage: state.messages.toggleEditMessage
});

export default connect(
  mapStateToProps,
  { getMessages }
)(Messages);
