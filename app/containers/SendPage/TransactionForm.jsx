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

    const parsedInfo = String(window.location.href).split('send?');
    const contractID = String(parsedInfo[1]).split('?')[0];
    this.state = { contractID };
  }

  render() {
    const { contractID } = this.state;
    return (
      <div className="TransactionForm">
        <Row />
        <Row>
          <Col />
          <Col>
            <Container>
              <Card style={{ width: '30rem', background: 'white' }}>
                <Card.Body>
                  <Card.Title>Transaction</Card.Title>
                  <Form>
                    <Form.Group>
                      <Form.Label>Contract Address</Form.Label>
                      <Form.Control
                        type="text"
                        id="contract"
                        defaultValue={contractID}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>To</Form.Label>
                      <Form.Control
                        type="text"
                        id="to"
                        defaultValue="0xfb16FF8087fefbD54cD398e14967dCC72DE5ACf9"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Number of coins to send (will send X * smallest unit)
                      </Form.Label>
                      <Form.Control
                        type="number"
                        id="amount"
                        defaultValue="10"
                      />
                    </Form.Group>
                    <TransactButton />
                  </Form>
                </Card.Body>
              </Card>
            </Container>
          </Col>
          <Col />
        </Row>
        <Row />
      </div>
    );
  }
}

export default TransactionForm;
