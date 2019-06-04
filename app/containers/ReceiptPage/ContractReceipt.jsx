import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Navbar from '../../components/Header/Navbar';
import SendButton from './RerouteSendButton';
import LinkButton from './EtherscanLinkButton';
import Footer from '../../components/Footer/Footer';

class ContractReceipt extends Component {
  constructor(props) {
    super(props);
    const url = String(window.location);

    const parseName = url.split('tokenname:')[1];
    const parseSupply = url.split('supply:')[1];

    const name = parseName.split('?supply')[0];
    const supply = parseSupply.split('?sendAddr')[0];

    console.log('name is', name);
    console.log('supply is', supply);

    this.state = {
      name,
      supply,
    };
  }

  render() {
    const { name, supply } = this.state;
    return (
      <>
        <div>
          <Navbar />
          <div className="receipt" />
          <Row />
          <Row>
            <Col />
            <Col>
              <Card style={{ background: 'white' }}>
                <Card.Img />
                <Card.Header>Your new coin : {name}</Card.Header>
                <Card.Body>
                  <Card.Title>Your coin was successfully created</Card.Title>
                  <Card.Text />
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Name: {name}</ListGroupItem>
                  <ListGroupItem>Supply: {supply}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Row>
                    <Col>
                      <SendButton />
                    </Col>
                    <Col>
                      <LinkButton />
                    </Col>
                    <Col>Sell your coin?</Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col />
          </Row>
          <Row />
        </div>
      </>
    );
  }
}

export default ContractReceipt;
