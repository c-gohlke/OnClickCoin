import React from 'react';
import Button from 'react-bootstrap/Button';

class LoggedIn extends React.Component {
  render() {
    const { username } = this.props;

    return (
      <div>
        You&apos;re currently logged in as &quot;{username}&quot;. Log out to be
        anonymous&nbsp;
        <Button href="/logout">Logout</Button>
      </div>
    );
  }
}
export default LoggedIn;
