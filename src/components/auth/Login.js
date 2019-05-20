import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { connect } from 'react-redux';
import { launchSignup, closeAuthModal, login } from '../../actions/auth';

const Login = ({ launchSignup, closeAuthModal, login }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  }

  return (
    <div className='card'>
      <h1>Login</h1>
      <FontAwesomeIcon onClick={closeAuthModal} icon='times'/>
      <p onClick={launchSignup}>Sign Up</p>
      <form onSubmit={e => onSubmit(e)}>
        <label>Username</label>
        <input
          type='text'
          name='username'
          required
          placeholder='Username'
          onChange={e => onChange(e)}
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          required
          placeholder='Password'
          onChange={e => onChange(e)}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
};

export default connect(
  null,
  { launchSignup, closeAuthModal, login }
)(Login);
