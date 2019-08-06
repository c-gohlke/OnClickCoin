import React from 'react';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';
import DeployButton from './DeployButton';
import Hint from '../Hint';
// import './ContractForm.css';
import Deploying from './Deploying';
import AdvancedParams from './AdvancedParams';

class ContractForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      isDeploying: false,
    };
  }

  handleToUpdate = () => {
    this.setState({ isDeploying: true });
  };

  toggleHidden() {
    this.setState(prevState => ({ isHidden: !prevState.isHidden }));
  }

  toggleAnonymous() {
    this.setState(prevState => ({ isAnonymous: !prevState.isAnonymous }));
  }

  render() {
    return (
      <div>
        <div className="form">
          <Row />
          <Row>
            <Col />
            <Col>
              {this.state.isDeploying && <Deploying />}
              {!this.state.isDeploying && (
                <>
                  <Container>
                    <Card bg="dark" text="white" style={{ width: '40rem' }}>
                      <Card.Body>
                        <Card.Title>Parameters</Card.Title>
                        <Form>
                          <Form.Group>
                            <Form.Label>
                              Symbol{' '}
                              <Hint message=" Usually a three letter symbol, but can be more" />
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="symbol"
                              placeholder="TOK"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>
                              Name{' '}
                              <Hint message="name of your cryptocurrency" />
                            </Form.Label>
                            <Form.Control
                              type="text"
                              id="name"
                              placeholder="MyCryptoCoin"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>
                              Total Supply{' '}
                              <Hint message="number of coins created" />
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="supply"
                              defaultValue="1000"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>
                              Decimals{' '}
                              <Hint
                                message="0 for whole coins, 1 for tenth of coins. USD/EURO
                                has 2 decimals. 18 is the standard for most
                                cryptocurrencies"
                              />
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="decimals"
                              defaultValue="18"
                            />
                          </Form.Group>

                          <Form.Group>
                            <Button
                              variant="link"
                              className="ContractButton"
                              size="sm"
                              onClick={() => {
                                this.toggleHidden();
                              }}
                            >
                              <h5>advanced settings</h5>
                            </Button>
                            {!this.state.isHidden && <AdvancedParams />}
                          </Form.Group>
                          <DeployButton handleToUpdate={this.handleToUpdate} />
                        </Form>
                      </Card.Body>
                    </Card>
                  </Container>
                </>
              )}
            </Col>
            <Col />
          </Row>
          <Row />
        </div>
      </div>
    );
  }
}

export default ContractForm;
