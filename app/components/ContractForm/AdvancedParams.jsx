import React from 'react';
import { Form, Col } from 'react-bootstrap';

const AdvancedParams = () => (
  <Form.Group>
    <Form.Group as={Col}>
      <Form.Label>Network Name (Advanced)</Form.Label>
      <Form.Control as="select" id="netID" defaultValue="4">
        <option value="1">mainnet</option>
        <option value="4">rinkeby (recommended)</option>
        <option value="42">kovan</option>
        <option value="2">morden</option>
        <option value="3">ropsten</option>
      </Form.Control>
    </Form.Group>
  </Form.Group>
);

export default AdvancedParams;
