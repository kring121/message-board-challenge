import React from 'react';
import { connect } from 'react-redux';

const MessageItem = ({ message }) => {

  return (
    <div className='message'>
      <h1>{message.title}</h1>
      <h2>{message.author}</h2>
    </div>
  );
};

export default connect()(MessageItem);
