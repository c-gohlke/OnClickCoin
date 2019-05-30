import React from 'react';
import './ContractForm.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
        <Col></Col>
        <Col>
          <Card style={{ width: '30rem', background: "grey" }}>
            <Card.Body>
              <Card.Title>Parameters</Card.Title>
              <Form>
                <Form.Group id="symbol">
                  <Form.Label>Symbol</Form.Label>
                  <Form.Control type="text" placeholder="ABC" />
                </Form.Group>
                <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="JohnDoeCoin" />
                </Form.Group>
                <Form.Group id="decimals">
                  <Form.Label>Decimals</Form.Label>
                  <Form.Control type="number" placeholder="2" />
                </Form.Group>
                <Form.Group id="totalSupply">
                  <Form.Label>Total Supply</Form.Label>
                  <Form.Control type="number" placeholder="1000" />
                </Form.Group>
                <DeployButton />
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>














    {/*
    <form id="ContractForm">
      <fieldset>
        <legend>Your Coin Parameters</legend>
        <label htmlFor="symbol">
          <span>Ticker Symbol of your coin</span>
          <input id="symbol" defaultValue="BCC" />
        </label>
        <br />
        <br />
        <label htmlFor="name">
          <span>Name your coin</span>
          <input id="name" defaultValue="Bitconnect" />
        </label>
        <br />
        <br />
        <label htmlFor="decimals">
          <span>Divisibility</span>
          <input id="decimals" defaultValue="2" />
        </label>
        <br />
        <br />
        <label htmlFor="supply">
          <span>How many coins should be created?</span>
          <input id="supply" defaultValue="21000000" type="number" />
        </label>
        <br />
        <br />
      </fieldset>
    </form>*/}
  </div >

);

export default ContractForm;
