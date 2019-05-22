import React from 'react';

const CommentList = ({ comments }) => (
  <div className='comment-list'>
    {comments.map(comment => (
      <div key={`comment-${comment.id}`} className='d-flex mt'>
        <p className='comment-author ml-1 mr'>{comment.author}</p>
        <p className='comment-content mr-1'>{comment.content}</p>
      </div>
      )
    )}
  </div>
);

export default CommentList;
