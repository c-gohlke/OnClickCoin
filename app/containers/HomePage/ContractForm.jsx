import React from 'react';
import './ContractForm.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeployButton from './DeployButton';

/*
This class creates the form to define the constructor of the new ERC-20 token
Ticker Symbol refers to the abbreviation of the coin
Name refers to the name of the coin
Decimals refers to if the coin is atomic and if not to how many decimals it should be divisible.
Supply refers to the initial supply of the coin
*/

/*
This class creates the form to define the constructor of the new ERC-20 token
Ticker Symbol refers to the abbreviation of the coin
Name refers to the name of the coin
Decimals refers to if the coin is atomic and if not to how many decimals it should be divisible.
Supply refers to the initial supply of the coin
*/

const ContractForm = () => (
  <div className="form">
    <Container>
      <Row>
        <Col />
        <Col>
          <Card style={{ width: '30rem', background: 'grey' }}>
            <Card.Body>
              <Card.Title>Parameters</Card.Title>
              <Form>
                <Form.Group>
                  <Form.Label>Symbol</Form.Label>
                  <Form.Control type="text" id="symbol" placeholder="ABC" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="name"
                    placeholder="JohnDoeCoin"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Decimals</Form.Label>
                  <Form.Control type="number" id="decimals" placeholder="2" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Total Supply</Form.Label>
                  <Form.Control type="number" id="supply" placeholder="1000" />
                </Form.Group>
                <DeployButton />
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col />
      </Row>
    </Container>
  </div>
);

export default ContractForm;
