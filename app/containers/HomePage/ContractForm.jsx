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
import axios from 'axios';
import DeployButton from './DeployButton';
import LoggedIn from './LoggedIn';
import loading from '../../images/loading.gif';

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
    <Form.Group>
      <Form.Label>Decimals</Form.Label>
      <Form.Control type="number" id="decimals" defaultValue="2" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Total Supply</Form.Label>
      <Form.Control type="number" id="supply" defaultValue="1000" />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label>Network Name</Form.Label>
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
    <Image src={loading} />
  </div>
);

const Anonymous = () => (
  <div>
    You&apos;re currently anonymous. Log in for more features&nbsp;
    <Button size="sm" href="/login">
      Login/Register
    </Button>
  </div>
);

class ContractForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      isDeploying: false,
      isAnonymous: true,
      username: 'anonymous',
    };
  }

  // TODO: use redux to store app states
  async getUsername() {
    const response = await axios.get('/currentUser');
    this.setState({
      isAnonymous: response.data === 'anonymous',
      username: response.data,
    });
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

  componentDidMount() {
    this.getUsername();
  }

  render() {
    return (
      <div>
        <div className="form">
          <Row />
          <Row>
            <Col />
            <Col>
              <Container>
                <Card style={{ width: '40rem', background: 'white' }}>
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
                          onClick={() => {
                            this.toggleHidden();
                          }}
                        >
                          advanced settings (recommended)
                        </Button>
                        {!this.state.isHidden && <Advanced />}
                      </Form.Group>
                      <Form.Group>
                        {this.state.isAnonymous && <Anonymous />}
                        {!this.state.isAnonymous && (
                          <LoggedIn username={this.state.username} />
                        )}
                      </Form.Group>
                      <DeployButton handleToUpdate={this.handleToUpdate} />
                    </Form>
                  </Card.Body>
                </Card>
                {this.state.isDeploying && <Deploying />}
              </Container>
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
