import React, { useState } from 'react';

const CommentForm = () => {
  const [formData, setFormData] = useState({
    comment: ''
  });

  const { comment } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(comment)
  }

  return (
    <form className='comment-form' onSubmit={e => onSubmit(e)}>
      <input
        className='mb-2'
        type='text'
        name='comment'
        placeholder='Add a comment'
        onChange={e => onChange(e)}
      />
    </form>
  );
};

export default CommentForm;
