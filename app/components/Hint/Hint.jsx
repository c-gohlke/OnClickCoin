import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Hint = ({ message }) => (
  <OverlayTrigger
    placement="right"
    overlay={<Tooltip id="tooltip">{message}.</Tooltip>}
  >
    <Button variant="info">i</Button>
  </OverlayTrigger>
);

Hint.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Hint;
