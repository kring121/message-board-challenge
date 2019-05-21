import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';

// Redux
import { connect } from 'react-redux';
import { getMessages } from '../../actions/messages';

const Messages = ({ getMessages, messages }) => {
  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return (
    <div className='message-feed mt-4'>
      {messages.map(message => (
          <MessageItem key={message.id} message={message}/>
        ))
      }
    </div>
  );
};

Messages.propTypes = {
  getMessages: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  messages: state.messages.messages
});

export default connect(
  mapStateToProps,
  { getMessages }
)(Messages);
