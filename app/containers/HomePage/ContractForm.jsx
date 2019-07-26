import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import DeployButton from './DeployButton';
import LoggedIn from './LoggedIn';
import loading from '../../images/loading2.gif';

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
      <Form.Label>Decimals. 0 for whole coins, 1 for tenth of coins, 2 for cents and so on..</Form.Label>
      <Form.Control type="number" id="decimals" defaultValue="2" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Total Supply : the number of coins created</Form.Label>
      <Form.Control type="number" id="supply" defaultValue="1000" />
    </Form.Group>
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
  <div >
    <Card>
      <Card.Body>
        Your Token is being deployed on the blockchain. Please wait about 15
        seconds until the transaction is confirmed.
      </Card.Body>
    </Card>
    <Image src={loading} style={{zIndex: '100'}}/>
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
            {this.state.isDeploying && <Deploying />}
              {!this.state.isDeploying && (
                <>
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
                          placeholder="BAT"
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          id="name"
                          placeholder="BATman Coin"
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
