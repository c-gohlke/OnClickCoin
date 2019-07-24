import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const LoggedIn = ({ username }) => (
  <div>
    You&apos;re currently logged in as &quot;{username}&quot;. Log out to be
    anonymous&nbsp;
    <Button href="/logout">Logout</Button>
  </div>
);

LoggedIn.propTypes = {
  username: PropTypes.string.isRequired,
};

export default LoggedIn;
