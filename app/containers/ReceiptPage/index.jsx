import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Container, Image, Button, Form } from 'react-bootstrap';

import SendButton from './RerouteSendButton';
import LinkButton from './EtherscanLinkButton';
import coin from '../../images/coins.gif';
import history from '../../utils/history';


const axios = require('axios');




class ContractReceipt extends Component {
  constructor(props) {
    // TODO: use redux to store name, supply etc.
    super(props);
    const url = String(window.location);
    console.log(url)
    const parseName = url.split('tokenname:')[1];
    const parseSupply = url.split('supply:')[1];
    const parseAddress = url.split('address:')[1];
    const parseNetname = url.split('netname:')[1];


    const name = parseName.split('?supply')[0];
    const supply = parseSupply.split('?sendAddr')[0];
    const address = parseAddress.split('?tokenname')[0];
    const netname = parseNetname.split('?address')[0];

    this.state = {
      name,
      supply,
      address,
      netname
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    const { name, supply, address, netname} = this.state;
    // First let's try to send just a hardcoded email
    const emailFound = document.getElementById("email").value;
    console.log(name, supply, address, netname)
    const link = `https://${netname}.etherscan.io/token/${address}`;
    console.log(link);

    try {
      const { data } =  axios.post('/send-mail', {
        email: emailFound,
        nameCoin: name,
        supplyCoin: supply,
        linkCoin: link 
      });
    } catch (error) {
      console.log(Object.keys(error), 'this the error', error.message);
    }
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
                    <Form>
                      <Form.Group >
                        <Form.Label>Email address.</Form.Label>
                        <Form.Control id="email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                      </Form.Group>
                      </Form>
                    <Button
                      onClick={(e) => {
                        this.handleClick(e);
                      }}
                    >
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
