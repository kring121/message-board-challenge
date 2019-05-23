import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import MessageOptions from './MessageOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { connect } from 'react-redux';
import { getComments } from '../../actions/messages';

const MessageItem = ({ getComments, message, comments, currentUser }) => {
  useEffect(() => {
    getComments();
  }, [getComments]);

  const [viewComments, setView] = useState(false);
  const toggleView = () => setView(!viewComments);

  const [optionsView, setOptionsView] = useState(false);
  const toggleOptionsView = () => setView(!optionsView);

  const messageComments = comments.filter(comment => comment.messageId === message.id);

  return (
    <Fragment>
      <div className='message'>
        <h1 className='text-primary'>{message.title}</h1>
        <div className='user-info'>
          <FontAwesomeIcon className='user-profile-icon mr' icon='user'/>
          <h3 className='mt'>{message.author}</h3>
        </div>
        <p className='message-content'>{message.content}</p>
        <div className='d-flex mt-2 message-actions'>
          <div className='d-flex'>
            <FontAwesomeIcon className='mr-1' icon='thumbs-up'/>
            <div className='toggle-comments d-flex' onClick={toggleView}>
              <FontAwesomeIcon icon='comment'/>
              <p className='comment-count'>{messageComments.length}</p>
            </div>
          </div>
          {
            message.author === currentUser ? <MessageOptions message={message}/> : null
          }
        </div>
      </div>
      {messageComments.length !== 0 && viewComments ? <CommentList comments={messageComments} currentUser={currentUser}/> : null}
      <CommentForm messageId={message.id}/>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  comments: state.messages.comments
});

export default connect(
  mapStateToProps,
  { getComments }
)(MessageItem);
