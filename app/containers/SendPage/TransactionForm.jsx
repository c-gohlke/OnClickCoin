import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import TransactButton from './TransactionButton';
/*
This class creates the TransactionForm Component for the send page
The form takes 3 inputs:
- the contract address
Defaulted to the address of the contract that has been created from the Home Page

- the recipient address
- the amount of tokens to be sent
*/

class TransactionForm extends Component {
  constructor(props) {
    super(props);

    /* The URL of the send page is of the form:
    pathname /send/: {contractID}
    */

    // this creates an array, with array[0] everything before
    // "send/:", and array[1] everything after "send/:"
    const parsedInfo = String(window.location.href).split('send?');
    const contractID = String(parsedInfo[1]).split('?')[0];
    this.state = { contractID };
  }

  render() {
    const { contractID } = this.state;
    return (
      <div>
        <form id="TransactionForm"></form>
        <Row></Row>
        <Row>
          <Col></Col>
          <Col>
            <Container>
              <Card style={{ width: '30rem', background: 'white' }}>
                <Card.Body>
                  <Card.Title>Transaction</Card.Title>
                  <Form>
                    <Form.Group>
                      <Form.Label>Contract Address</Form.Label>
                      <Form.Control type="text" id="contract" placeholder="0x123abc" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>To</Form.Label>
                      <Form.Control
                        type="text"
                        id="to"
                        placeholder="0x5678"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Numbers</Form.Label>
                      <Form.Control type="number" id="amount" placeholder="10" />
                    </Form.Group>
                    <TransactButton />
                  </Form>
                </Card.Body>
              </Card>
            </Container>
          </Col>
          <Col></Col>
        </Row>
        <Row></Row>
      </div>



    );
  }
}

{/*
              <div>
        <form id="TransactionForm">
          <br />
          Enter your contract address
          <br />
          <br />
          <input id="contract" placeholder={contractID} />
          <br />
          <br />
          Enter your friend address
          <br />
          <br />
          <input id="to" placeholder="0xabc123" />
          <br />
          <br />
          How many coins should be sent?
          <br />
          <br />
          <input id="amount" placeholder="1" type="number" />
          <br />
        </form>
      </div>
      
      
      */}
export default TransactionForm;
