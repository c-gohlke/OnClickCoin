import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Navbar from '../../components/Header/Navbar';

/*
Defines the send page of the app
*/

const Info = () => (
  <div>
    <Navbar />
    <Row />
    <Row>
      <Container style={{ fontFamily: 'Open Sans' }}>
        <h1>A free open-source Ethereum based token generator</h1>
        <Card>
          <Card.Header as="h5">Why OnClickCoin?</Card.Header>
          <Card.Body>
            <Card.Text>
              Our aim is to provide a very easy-to-use website that allows
              people to create their own ERC-20 token. By making it as simple as
              possible - without the requirement to log in, set up an email
              address or pay for using it - we hope crypto enthusiasts will use
              this project to create new tokens for their friends and therefore
              raise awareness and increase public interest in the technology.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header as="h5">What is this?</Card.Header>
          <Card.Body>
            <Card.Text>
              This is a proof of concept application to showcase the ease with
              which you can create a token using the ethereum blockchain. It is
              also nice to be able to tell that you can create your own
              &quot;cryptocurrency&quot; in less than a minute and less than
              three clicks.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header as="h5">How?</Card.Header>
          <Card.Body>
            <h4>Metamask</h4>
            This applications uses <a href="https://metamask.io">Metamask</a> a
            web browser extension to interact with the Ethereum blockchain. You
            can install it on firefox and chrome as well as on mobile.
            <br />
            <br />
            <h4>Faucets, testnets and mainNet</h4>
            Although the application is entirely free you will need to pay a
            couple of cents in $ETH to deploy on the mainnet and have a real{' '}
            <a href="https://theethereum.wiki/w/index.php/ERC20_Token_Standard">
              ERC20 token
            </a>
            . If you want to deploy entirely for free you can try the
            application on a testet like the{' '}
            <a href="https://rinkeby.io">Rinkeby network</a> and request some
            testnet ether on this{' '}
            <a href="https://faucet.rinkeby.io/">faucet</a>.
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header as="h5">Is this useful?</Card.Header>
          <Card.Body>
            <Card.Text>
              Maybe?
              <br />
              You could use that to digitalize assets or just for the bragging
              rights of telling you have your own coin.
              <br />
              Also it was nice to provide a free alternative to the following
              website <a href="https://tokenmint.io/">here</a> (40$ for a token,
              400$ for an ICO!). The service is entirely free and we collect no
              data (at all).
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header as="h5">What else?</Card.Header>
          <Card.Body>
            <Card.Text>
              We aim to add new functionnalities in the future, like different
              type of token contracts and maybe an ICO function. OnClickICO
              coming soon!
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header as="h5">Like what you see?</Card.Header>
          <Card.Body>
            <Card.Text>
              <span role="img" aria-label="Star">
                ⭐
              </span>{' '}
              or submit a pull request{' '}
              <a href="https://github.com/clement2705/OnClickCoin">
                @project-code
              </a>
              . <br />
              Made by <a href="https://github.com/clement2705">CG</a> and{' '}
              <a href="https://github.com/hugoroussel">HR</a>. <br />
              Contact us for any questions, help or advice :
              onclickcoin@gmail.com
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Row>
    <Row />
  </div>
);

export default Info;
