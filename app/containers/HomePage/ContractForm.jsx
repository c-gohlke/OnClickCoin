import React from 'react';
import {
  Button,
  Form,
  Card,
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import DeployButton from './DeployButton';
import loading from '../../images/simple_loading.gif';

/*
This class creates the form to define the constructor of the new ERC-20 token
Ticker Symbol refers to the abbreviation of the coin
Name refers to the name of the coin
Decimals refers to if the coin is atomic and if not to how many decimals it should be divisible.
Supply refers to the initial supply of the coin
*/

// TODO: file restructure
// TODO: can't choose network when web3 provider. Impossible to force change IMO, provide better UI (no dropdown if web3 provider available)
const Advanced = () => (
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
                            <Form.Label>Symbol. Usually a three letter symbol, but can be more</Form.Label>
                            <Form.Control
                              type="text"
                              id="symbol"
                              placeholder="TOK"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Name. The name of your crypto-currency</Form.Label>
                            <Form.Control
                              type="text"
                              id="name"
                              placeholder="MyCryptoCoin"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Total Supply : the number of coins created</Form.Label>
                            <Form.Control type="number" id="supply" defaultValue="1000" />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>
                              Decimals. 0 for whole coins, 1 for tenth of coins, 2 for cents and so
                              on. 18 is the standard
                            </Form.Label>
                            <Form.Control type="number" id="decimals" defaultValue="18" />
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
                            {!this.state.isHidden && <Advanced />}
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
