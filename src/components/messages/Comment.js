import React, { Fragment } from 'react';

// Redux
import { connect } from 'react-redux';
import { removeComment, toggleEditComment } from '../../actions/messages';

const Comment = ({removeComment, toggleEditComment, comment, currentUser}) => (
  <Fragment>
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
);

export default connect(
  null,
  { removeComment, toggleEditComment }
)(Comment);
