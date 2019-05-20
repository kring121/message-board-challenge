import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { connect } from 'react-redux';
import { launchLogin, closeAuthModal } from '../../actions/auth';

const SignUp = ({ launchLogin, closeAuthModal }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const { username, password, confirmPassword } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <FontAwesomeIcon className='mr' onClick={closeAuthModal} icon='times'/>
      </div>
      <FontAwesomeIcon className='user-auth-icon' icon='user'/>
      <h1>Sign Up</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <label>Username</label>
          <input
            type='text'
            name='username'
            required
            placeholder='Username'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            required
            placeholder='Password'
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label>Confirm Password</label>
          <input
            type='password'
            name='confirm-password'
            required
            placeholder='Confirm Password'
            onChange={e => onChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary">Sign Up</button>
        <p className='mt-2 text-center'>Already registered? <a onClick={launchLogin}>Login</a></p>
      </form>
    </div>
  )
}

export default connect(
  null,
  { launchLogin, closeAuthModal }
)(SignUp);
