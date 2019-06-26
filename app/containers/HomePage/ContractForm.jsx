import React from 'react';
import Button from 'react-bootstrap/Button';
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

const Advanced = () => (
  <Form.Group>
    <Form.Group>
      <Form.Label>Decimals</Form.Label>
      <Form.Control type="number" id="decimals" defaultValue="2" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Total Supply</Form.Label>
      <Form.Control type="number" id="supply" defaultValue="1000" />
    </Form.Group>
  </Form.Group>
);

class ContractForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    };
  }

  toggleHidden() {
    this.setState(prevState => ({ isHidden: !prevState.isHidden }));
  }

  render() {
    return (
      <div className="form">
        <Row />
        <Row>
          <Col />
          <Col>
            <Container>
              <Card style={{ width: '30rem', background: 'white' }}>
                <Card.Body>
                  <Card.Title>Parameters</Card.Title>
                  <Form>
                    <Form.Group>
                      <Form.Label>Symbol</Form.Label>
                      <Form.Control
                        type="text"
                        id="symbol"
                        defaultValue="BTC"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        id="name"
                        defaultValue="JohnDoeCoin"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Button
                        variant="link"
                        className="ContractButton"
                        size="sm"
                        onClick={() => this.toggleHidden()}
                      >
                        advanced settings
                      </Button>
                      {!this.state.isHidden && <Advanced />}
                    </Form.Group>
                    <DeployButton />
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

export default ContractForm;
