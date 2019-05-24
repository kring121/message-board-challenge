import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import MessageOptions from './MessageOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';

// Redux
import { connect } from 'react-redux';
import { getComments, getLikes, addLike, removeLike } from '../../actions/messages';

const MessageItem = ({ getComments, getLikes, message, comments, likes, currentUser, addLike, removeLike }) => {
  useEffect(() => {
    getComments();
    getLikes();
  }, [getComments]);

  const [viewComments, setView] = useState(false);
  const toggleView = () => setView(!viewComments);

  const [optionsView, setOptionsView] = useState(false);
  const toggleOptionsView = () => setView(!optionsView);

  const messageComments = comments.filter(comment => comment.messageId === message.id);
  const messageLikes = likes.filter(like => like.messageId === message.id);
  const hasLiked = messageLikes.filter(like => like.author === currentUser);

  const likeOrUnlike = (messageId) => {
    hasLiked.length > 0 ? removeLike(hasLiked[0].id) : addLike(messageId, currentUser)
  }

  return (
    <Fragment>
      <div className='message'>
        <h1 className='text-primary'>{message.title}</h1>
        <div className='user-info'>
          <FontAwesomeIcon className='user-profile-icon mr' icon='user'/>
          <h3 className='mt'>{message.author}</h3>
          <Moment fromNow className='mt ml'>{message.date}</Moment>
        </div>
        <p className='message-content'>{message.content}</p>
        <div className='d-flex mt-2 message-actions'>
          <div className='d-flex'>
            <div className='add-like d-flex mr-1' onClick={() => likeOrUnlike(message.id)}>
              <FontAwesomeIcon icon='thumbs-up' className={hasLiked.length > 0 ? 'liked' : 'not-liked'}/>
              <p className='like-count'>{messageLikes.length}</p>
            </div>
            <div className='toggle-comments d-flex' onClick={toggleView}>
              <FontAwesomeIcon icon='comment'/>
              <p className='comment-count'>{messageComments.length}</p>
            </div>
          </div>
          {
            message.author === currentUser ?
            <MessageOptions message={message}/>
            : null
          }
        </div>
      </div>
      {
        messageComments.length !== 0
        && viewComments ?
        <CommentList comments={messageComments} currentUser={currentUser}/>
        : null
      }
      <CommentForm messageId={message.id}/>
    </Fragment>
  );
};

MessageItem.propTypes = {
  getComments: PropTypes.func.isRequired,
  getLikes: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  comments: state.messages.comments,
  likes: state.messages.likes
});

export default connect(
  mapStateToProps,
  { getComments, getLikes, addLike, removeLike }
)(MessageItem);
