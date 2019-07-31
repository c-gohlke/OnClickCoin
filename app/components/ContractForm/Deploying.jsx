import React from 'react';
import { Card, Image } from 'react-bootstrap';
import loading from '../../images/simple_loading.gif';

const Deploying = () => (
  <div>
    <Card>
      <Card.Body>
        Your Token is being deployed on the blockchain. Please wait about 15
        seconds until the transaction is confirmed.
      </Card.Body>
    </Card>
    <Image src={loading} style={{ zIndex: '100' }} />
  </div>
);

export default Deploying;
