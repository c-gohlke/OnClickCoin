import React, { Component } from 'react';
import LinkButton from './EtherscanLinkButton';
import SendButton from './RerouteSendButton';
import Navbar from '../../components/Header/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Footer from '../../components/Footer/Footer';

class ContractReceipt extends Component {
  constructor(props) {
    /* the name and the Supply's information of the token are passed on through the URL.

    The URL's form is:
    pathname/receipt/: { name of the net } ?
    { sender's address } ? { name of the token } ? {initial supply }

    This URL is created by deployErc20Contract() function in server/api/deployErc20Contract
    */

    super(props);
    const url = String(window.location);

    const parseName = url.split('tokenname:')[1];
    const parseSupply = url.split('supply:')[1];

    const name = parseName.split('?supply')[0];
    const supply = parseSupply.split('?sendAddr')[0];

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
          <div className="receipt"></div>
          <Row></Row>
          <Row>
            <Col></Col>
            <Col>
              <Card style={{ background: 'white' }}>
                <Card.Img />
                <Card.Header>Your new coin : {name}</Card.Header>
                <Card.Body>
                  <Card.Title>Your coin was successfully created</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Name: {name}</ListGroupItem>
                  <ListGroupItem>Supply: {supply}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Row>
                    <Col><SendButton /></Col>
                    <Col><LinkButton /></Col>
                    <Col>Sell your coin?</Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
          <Row></Row>

        </div>

      </>
    );
  }
}


{/*
                  <div>
            <br />
            <br />
            <br />
            <br />
            
            <br />
            <table width="100%" border="1">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td> {name}</td>
                </tr>
                <tr>
                  <td>Current supply:</td>
                  <td> {supply}</td>
                </tr>
              </tbody>
            </table>
            <br />
            <div>
              <br />
              Your contract has been successfully created! Link to your
              transaction receipt:
            <br />
              <br />
              <LinkButton />
            </div>
            <br />
            <br />
            <div>
              <br />
              Press here to send some of your tokens to friends!!!:
            <br />
              <br />
              <SendButton />
            </div>
          </div>
          
      </div>
        
        
        */}

export default ContractReceipt;
