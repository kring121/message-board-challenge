import React, { Fragment } from 'react';
import Comment from './Comment';
import EditComment from './EditComment';

// Redux
import { connect } from 'react-redux';

const CommentList = ({ comments, currentUser, editing }) => (
  <div className='comment-list'>
    {comments.map(comment => (
      <Fragment key={`comment-${comment.id}`}>
        { editing !== null && comment.id === editing.id ? <EditComment comment={comment}/> : <Comment comment={comment} currentUser={currentUser}/>}
      </Fragment>
      )
    )}
  </div>
);

const mapStateToProps = state => ({
  editing: state.messages.editing
});

export default connect(mapStateToProps)(CommentList);
