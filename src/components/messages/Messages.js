import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';
import MessageForm from './MessageForm';

// Redux
import { connect } from 'react-redux';
import { getMessages } from '../../actions/messages';

const Messages = ({ getMessages, messages, currentUser }) => {
  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return (
    <div className='message-feed mt-5 mb-3'>
      <MessageForm currentUser={currentUser}/>
      {messages.map(message => (
          <MessageItem key={message.id} message={message} currentUser={currentUser}/>
        ))
      }
    </div>
  );
};

Messages.propTypes = {
  getMessages: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  // add current user once done with developement
};

const mapStateToProps = state => ({
  messages: state.messages.messages,
  currentUser: state.auth.currentUser
});

export default connect(
  mapStateToProps,
  { getMessages }
)(Messages);
