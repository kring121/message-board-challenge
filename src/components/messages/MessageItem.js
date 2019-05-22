import React, { Fragment } from 'react';
import CommentForm from './CommentForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { connect } from 'react-redux';

const MessageItem = ({ message }) => {
  return (
    <Fragment>
      <div className='message'>
        <h1 className='text-primary'>{message.title}</h1>
        <div className='user-info'>
          <FontAwesomeIcon className='user-profile-icon mr' icon='user'/>
          <h3 className='mt'>{message.author}</h3>
        </div>
        <p className='message-content'>{message.content}</p>
        <div className='d-flex mt-2'>
          <FontAwesomeIcon className='mr-1' icon='thumbs-up'/>
          <FontAwesomeIcon icon='comment'/>
          <p className='comment-count'>{message.comments.length}</p>
        </div>
      </div>
      <CommentForm messageId={message.id}/>
    </Fragment>
  );
};

export default connect()(MessageItem);
