import React, { Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMessages } from '../actions/messages';

const Messages = ({ getMessages, messages: { messages } }) => {
  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return (
    <Fragment>
      <h1>Messages</h1>
      {messages.map(message => (
          <div key={message.id}>
            <h1>{message.title}</h1>
            <h2>{message.author}</h2>
          </div>
        ))
      }
    </Fragment>
  );
};

Messages.propTypes = {
  getMessages: PropTypes.func.isRequired,
  messages: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(
  mapStateToProps,
  { getMessages }
)(Messages);
