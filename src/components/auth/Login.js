import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { connect } from 'react-redux';
import { launchSignup, closeAuthModal } from '../../actions/auth';

const Login = ({ launchSignup, closeAuthModal }) => (
  <div className='card'>
    <h1>Login</h1>
    <FontAwesomeIcon onClick={closeAuthModal} icon='times'/>
    <p onClick={launchSignup}>Sign Up</p>
  </div>
)

export default connect(
  null,
  { launchSignup, closeAuthModal }
)(Login);
