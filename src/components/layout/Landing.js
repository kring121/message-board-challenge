import React from 'react';
import PropTypes from 'prop-types';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import Alert from '../alert/Alert';

// Redux
import { connect } from 'react-redux';
import { launchSignup, launchLogin } from '../../actions/auth';

const Landing = ({ launchSignup, launchLogin, loginLaunched, signUpLaunched }) => (
  <div className='landing text-center'>
    <Alert/>
    <div className='landing-inner'>
      {loginLaunched ? <Login/> : null}
      {signUpLaunched ? <SignUp/> : null}
      <h1 className='medium mb-2'>Welcome to MessageBoard</h1>
      <p className='lead mb-2'>Join an international community of people posting their thoughts</p>
      <div className='d-flex j-center'>
        <button className='btn btn-primary' onClick={launchLogin}>Login</button>
        <button className='btn btn-light' onClick={launchSignup}>Sign Up</button>
      </div>
    </div>
  </div>
);

Landing.propTypes = {
  launchSignup: PropTypes.func.isRequired,
  launchLogin: PropTypes.func.isRequired,
  loginLaunched: PropTypes.bool.isRequired,
  signUpLaunched: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  loginLaunched: state.auth.loginLaunched,
  signUpLaunched: state.auth.signUpLaunched
});

export default connect(
  mapStateToProps,
  { launchSignup, launchLogin }
)(Landing);
