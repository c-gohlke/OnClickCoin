import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeployICOButton from './DeployICOButton';


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

class ICOForm extends React.Component {
    render() {
        return (
            <div className="form">
                <Row /><Row>
                    <Col /><Col>
                        <Container>
                            <Card style={{ width: '60rem', background: 'white' }}>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>
                                        // How many token units a buyer gets per wei.
                                        // The rate is the conversion between wei and the smallest and indivisible token unit.
                                        // So, if you are using a rate of 1 with a ERC20Detailed token with 3 decimals called TOK
                                        // 1 wei will give you 1 unit, or 0.001 TOK.
                                        </Form.Label>
                                        <Form.Control
                                            type="number"
                                            id="rate"
                                            defaultValue="0.01"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>
                                            Wallet. The funds will go there
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="wallet"
                                            defaultValue="0xdazjd"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>
                                            The address of the coin you wish to sell
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="ierc20"
                                            defaultValue="0xdazjd"
                                        />
                                    </Form.Group>
                                    <DeployICOButton />
                                </Form>
                            </Card>
                        </Container>
                    </Col><Col />
                </Row><Row />
            </div>
        );
    }
}

export default ICOForm;
