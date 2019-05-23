import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import EditComment from './EditComment';

// Redux
import { connect } from 'react-redux';

const CommentList = ({ comments, currentUser, editing, toggleEditComment }) => (
  <div className='comment-list'>
    {comments.map(comment => (
      <Fragment key={`comment-${comment.id}`}>
        { toggleEditComment === true && comment.id === editing.id ? <EditComment comment={comment}/> : <Comment comment={comment} currentUser={currentUser}/>}
      </Fragment>
      )
    )}
  </div>
);

CommentList.propTypes = {
  toggleEditComment: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  editing: state.messages.editing,
  toggleEditComment: state.messages.toggleEditComment
});

export default connect(mapStateToProps)(CommentList);
