import React, { Fragment } from 'react';

// Redux
import { connect } from 'react-redux';
import { removeComment, toggleEditComment } from '../../actions/messages';

const CommentList = ({ comments, currentUser, removeComment, toggleEditComment }) => (
  <div className='comment-list'>
    {comments.map(comment => (
      <Fragment key={`comment-${comment.id}`}>
        <div className='d-flex mt'>
          <p className='comment-author ml-1 mr'>{comment.author}</p>
          <p className='comment-content mr-1'>{comment.content}</p>
        </div>
        { currentUser === comment.author ?
          <div className='comment-options d-flex text-primary'>
            <a className='mr' onClick={() => removeComment(comment.id)}>Delete</a>
            <a onClick={() => toggleEditComment(comment)}>Edit</a>
          </div>
         : null
        }
      </Fragment>
      )
    )}
  </div>
);

export default connect(
  null,
  { removeComment, toggleEditComment }
)(CommentList);
