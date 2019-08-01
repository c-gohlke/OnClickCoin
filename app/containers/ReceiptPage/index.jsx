import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Container, Image, Button } from 'react-bootstrap';

import SendButton from './RerouteSendButton';
import LinkButton from './EtherscanLinkButton';
import coin from '../../images/coins.gif';
import history from '../../utils/history';

const axios = require('axios');

async function handleClick() {
  //First let's try to send just a hardcoded email

  try {
    const { data } = await axios.post('/send-mail', {});
  } catch (error) {
    console.log(Object.keys(error), "this the error", error.message); 
  }
  
}

class ContractReceipt extends Component {
  constructor(props) {
    // TODO: use redux to store name, supply etc.

    super(props);
    const url = String(window.location);

    const parseName = url.split('tokenname:')[1];
    const parseSupply = url.split('supply:')[1];

    const name = parseName.split('?supply')[0];

    const supply = parseSupply.split('?sendAddr')[0];

    this.state = {
      name,
      supply,
    };
  }

  
 

  render() {
    const { name, supply } = this.state;
    return (
      <div>
        <div className="receipt" />
        <br />
        <Container
          style={{
            fontFamily: 'Roboto Mono',
            textAlign: 'center',
            zIndex: '1',
            backgroundColor: 'white',
          }}
        >
          <h1>
            Your coin was successfully created{' '}
            <span role="img" aria-label="Party">
              🎉🎉🎉
            </span>
          </h1>
          <Container style={{ textAlign: 'center' }}>
            <Image src={coin} />
            <Image src={coin} />
            <Image src={coin} />
            <Row>
              <Col></Col>
              <Col>
                <Card bg="secondary" text="white" style={{ width: '40rem' }}>
                  <Card.Header>
                    <h1>Your first crypto-currency</h1>
                  </Card.Header>
                  <Card.Body>
                    <h2>Name: {name}</h2>
                    <h2>Supply: {supply}</h2>
                    <Row>
                      <Col>
                        <SendButton />
                      </Col>
                      <Col>
                        <LinkButton />
                      </Col>
                      <Col>
                        <Button
                          variant="dark"
                          onClick={() => {
                            history.push('/ico');
                          }}
                        >
                          Sell your coin?
                        </Button>
                      </Col>
                    </Row>
                    <Button onClick={() => {handleClick();}}>
                    Send the details of my coin by email
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default ContractReceipt;
