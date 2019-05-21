import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { connect } from 'react-redux';
import { launchSignup, closeAuthModal, login } from '../../actions/auth';

const Login = ({ launchSignup, closeAuthModal, login, isAuthenticated }) => {
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

  if (isAuthenticated) {
    return <Redirect to='/messages' />;
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <FontAwesomeIcon className='mr' onClick={closeAuthModal} icon='times'/>
      </div>
      <FontAwesomeIcon className='user-auth-icon' icon='user'/>
      <h1>Login</h1>
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
        <button type="submit" className="btn btn-block btn-primary">Submit</button>
        <p className='mt-2 text-center'>Not registered? <a onClick={launchSignup}>Create an account</a></p>
      </form>
    </div>
  );
};

Login.propTypes = {
  launchSignup: PropTypes.func.isRequired,
  closeAuthModal: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { launchSignup, closeAuthModal, login }
)(Login);
