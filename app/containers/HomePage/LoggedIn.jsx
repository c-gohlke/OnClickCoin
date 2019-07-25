import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import logout from '../../redux/actions/logout';
import history from '../../utils/history';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

class LoggedIn extends React.Component {
  logout() {
    const res = axios.get('/logout');
    history.push(res);
  }

  render() {
    return (
      <div>
        You&apos;re currently logged in as &quot;{this.props.username}&quot;.
        Log out to be anonymous&nbsp;
        <Button
          onClick={() => {
            history.push('logout');
          }}
        >
          Logout
        </Button>
      </div>
    );
  }
}

LoggedIn.propTypes = {
  username: PropTypes.string.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(LoggedIn);
