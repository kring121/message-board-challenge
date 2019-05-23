import React from 'react';

// Redux
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = ({ logout, isAuthenticated }) => (
  <div className='navbar text-light'>
    <div className='navbar-brand ml-1'>MessageBoard</div>
    <nav className='nav'>
      { isAuthenticated === true ?
        <button className='mr-1 btn btn-light' onClick={logout}>Logout</button>
        : null
      }
    </nav>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
