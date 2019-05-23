import React, { Fragment, useState } from 'react';

// Redux
import { connect } from 'react-redux';
import { editComment, toggleEditComment } from '../../actions/messages';

const EditComment = ({comment, editComment, toggleEditComment}) => {
  const [formData, setFormData] = useState({
    content: comment.content
  });

  const { content } = formData;
  const { id, author, messageId } = comment;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editComment(id, content, author, messageId);
  }
  return (
    <Fragment>
      <div className='d-flex mt'>
        <p className='comment-author ml-1 mr'>{author}</p>
        <form className='comment-edit' onSubmit={e => onSubmit(e)}>
          <input
          type='text'
          name='content'
          value={content}
          onChange={e => onChange(e)}
          />
        </form>
        <button className='btn btn-primary' onClick={toggleEditComment}>Cancel</button>
      </div>
    </Fragment>
  )
};

export default connect(
  null,
  {editComment, toggleEditComment}
)(EditComment);
