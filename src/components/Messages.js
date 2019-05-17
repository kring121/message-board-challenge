import React, { Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../actions/messages';

const Messages = ({ getMessages }) => {
  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return (
    <h1>Posts</h1>
  );
};

// Messages.propTypes = {
//   getMessages: PropTypes.func.isRequired,
//   message: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   message: state.post
// });

export default connect(
  null,
  { getMessages }
)(Messages);
