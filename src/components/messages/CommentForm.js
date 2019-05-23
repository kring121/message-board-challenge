import React, { useState } from 'react';

// Redux
import { connect } from 'react-redux';
import { addComment } from '../../actions/messages';

const CommentForm = ({ messageId, currentUser, addComment }) => {
  const [formData, setFormData] = useState({
    content: ''
  });

  const { content } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(content, currentUser, messageId);
    e.target.reset();
  }

  return (
    <form className='comment-form' onSubmit={e => onSubmit(e)}>
      <input
        className='mb-2'
        type='text'
        name='content'
        placeholder='Add a comment'
        required
        onChange={e => onChange(e)}
      />
    </form>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm);
