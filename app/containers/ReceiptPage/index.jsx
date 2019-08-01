import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Container, Image, Button } from 'react-bootstrap';
import axios from 'axios';

import PropTypes from 'prop-types';
import SendButton from './RerouteSendButton';
import LinkButton from './EtherscanLinkButton';
import coin from '../../images/coins.gif';
import history from '../../utils/history';

class ContractReceipt extends Component {
  constructor(props) {
    super(props);

    const transactionID = this.props.match.params.txHash;
    const name = transactionID;
    const supply = transactionID;

    this.state = {
      name,
      supply,
      transactionID,
    };
  }

  async componentDidMount() {
    const tx = await axios.get('api/transaction/transactionID');
    console.log('tx is ', tx);
    this.setState({ name: tx.data.name });
  }

  render() {
    const { name, supply, transactionID } = this.state;
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
                    <h2>TransactionID: {transactionID}</h2>
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
                    <Button>Send the details of my coin by email</Button>
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
