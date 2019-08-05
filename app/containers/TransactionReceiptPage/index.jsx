import React, { Component } from 'react';
import { Container, Image, Col, Card, Row } from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import coin from '../../images/coins.gif';

class ContractReceipt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sender: 'loading',
      receiver: 'loading',
      amount: 'loading',
      tokenName: 'loading',
    };
  }

  async componentDidMount() {
    const transaction = await axios.get(
      `/api/transaction/${this.props.match.params.txHash}`,
    );

    this.setState({ sender: transaction.data.sender });
    this.setState({ receiver: transaction.data.receiver });
    this.setState({ amount: transaction.data.amount });
    this.setState({ tokenName: transaction.data.contract.name });
  }

  render() {
    const { sender, receiver, amount, tokenName } = this.state;
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
            Your tokens have been received
            <span role="img" aria-label="Party">
              🎉🎉🎉
            </span>
          </h1>
          <Row>
            <Col></Col>
            <Col>
              <Container style={{ textAlign: 'center' }}>
                <Image src={coin} />
                <Image src={coin} />
                <Image src={coin} />
                <Card bg="secondary" text="white" style={{ width: '40rem' }}>
                  <Card.Header>
                    <h1>Here&apos;s your receipt</h1>
                  </Card.Header>
                  <Card.Body>
                    <h2>Sender: {sender}</h2>
                    <h2>Receiver: {receiver}</h2>
                    <h2>Amount Sent: {amount}</h2>
                    <h2>Token Name: {tokenName}</h2>
                  </Card.Body>
                </Card>
              </Container>
            </Col>
            <Col></Col>
          </Row>
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
