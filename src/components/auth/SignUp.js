import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { connect } from 'react-redux';
import { launchLogin, closeAuthModal } from '../../actions/auth';

const SignUp = ({ launchLogin, closeAuthModal }) => (
  <div className='card'>
    <h1>Sign Up</h1>
    <FontAwesomeIcon onClick={closeAuthModal} icon='times'/>
    <p onClick={launchLogin}>Login</p>
  </div>
)

export default connect(
  null,
  { launchLogin, closeAuthModal }
)(SignUp);
