import React, { Component } from 'react';
import {
  Container,
  Image,
  Button,
  Form,
  Col,
  Card,
  Row,
} from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import SendButton from './RerouteSendButton';
import LinkButton from './EtherscanLinkButton';
import coin from '../../images/coins.gif';
import history from '../../utils/history';

class ContractReceipt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'loading',
      supply: 'loading',
      txHash: 'loading',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { name, supply, address, netname } = this.state;
    // First let's try to send just a hardcoded email
    const emailFound = document.getElementById('email').value;
    console.log(name, supply, address, netname);
    const link = `https://${netname}.etherscan.io/token/${address}`;

    try {
      const { data } = axios.post('/send-mail', {
        email: emailFound,
        nameCoin: name,
        supplyCoin: supply,
        linkCoin: link,
      });
    } catch (error) {
      console.log(Object.keys(error), 'this the error', error.message);
    }
  }

  async componentDidMount() {
    const contract = await axios.get(
      `/api/contract/${this.props.match.params.txHash}`,
    );

    this.setState({ name: contract.data.name });
    this.setState({ supply: contract.data.supply });
    this.setState({ txHash: contract.data.txHash });
  }

  render() {
    const { name, supply, txHash } = this.state;
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
            Your coin was successfully created
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
                    <h2>Transaction Hash: {txHash}</h2>
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
                      <Form.Group>
                        <Form.Label>
                          We will use this email only once and delete it
                          afterwards.
                        </Form.Label>
                        <Form.Control
                          id="email"
                          type="email"
                          placeholder="Enter email"
                        />
                        <Form.Text className="text-muted"></Form.Text>
                      </Form.Group>
                    </Form>
                    <Button
                      onClick={e => {
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

ContractReceipt.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ txHash: PropTypes.string }),
  }),
};

export default ContractReceipt;
