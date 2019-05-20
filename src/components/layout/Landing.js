import React from 'react';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';

// Redux
import { connect } from 'react-redux';
import { launchSignup, launchLogin } from '../../actions/auth';

const Landing = ({ launchSignup, launchLogin, loginLaunched, signUpLaunched }) => {

  return (
    <div className='landing text-center'>
      <div className='landing-inner'>
        <h1 className='medium mb-2'>Welcome to MessageBoard</h1>
        {loginLaunched ? <Login/> : null}
        {signUpLaunched ? <SignUp/> : null}
        <p className='lead mb-2'>Join an international community of people posting their thoughts</p>
        <div className='d-flex j-center'>
          <button className='btn btn-primary' onClick={launchLogin}>Login</button>
          <button className='btn btn-light' onClick={launchSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  loginLaunched: state.auth.loginLaunched,
  signUpLaunched: state.auth.signUpLaunched
});

export default connect(
  mapStateToProps,
  { launchSignup, launchLogin }
)(Landing);
