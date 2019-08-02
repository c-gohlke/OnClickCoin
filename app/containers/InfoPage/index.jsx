import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

/*
Defines the send page of the app
*/

const Info = () => (
  <div>
    <Row />
    <Row>
      <Container style={{ fontFamily: 'Roboto Mono' }}>
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
          <Card.Header as="h5">What is a crypto-currency token?</Card.Header>
          <Card.Body>
            <Card.Text>
            A cryptocurrency token is a crypto-currency running on top of another currency, it this case Ethereum.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card>
          <Card.Header as="h5">Does my coin have value?</Card.Header>
          <Card.Body>
            <Card.Text>
            The crypto-currency you just created has no intrinsic value. <br/>
            If you didn’t use the Metamask extension we used an external account to create your coin on a testnet.
            A testnet is an alternate network running in parallel to the « real » network for developpers to create and experiment on. 
            Testnets can be attacked, modified or wiped out. So are your coins.
            Also since we created your coins (unless you used Metamask), we have control over them. 
            Send us an email at onclickcoin@gmail.com to claim ownership. Check <a href="https://www.youtube.com/watch?v=SB_oU68Q9zA.">here</a> also.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card>
          <Card.Header as="h5">What if I want my coin to have value?</Card.Header>
          <Card.Body>
            <Card.Text>
            You will need to create your coins on the Ethereum mainnet. Contrary to testnets the Ethereum network is immutable, uncensorable and considered the most secure platform for creating and transferring digital assets. You will need however to pay a small fee in ether, the network currency. Afterwards you can assign value to the coins your created by either backing them with real world assets or by creating a use case for them.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />


        <Card>
          <Card.Header as="h5">What are possible use cases for my coins?</Card.Header>
          <Card.Body>
            <Card.Text>
            Here are some common use cases for digital assets : gaming items, cryptocurrency, virtual real estate, access tokens, reward points, membership cards, collectibles, authenticity tokens, souvenirs, memes, coupons and vouchers, gift certificates, ticketing, licenses, degrees, certification and many more. <br/><br/>
            Our personal favorite : the bragging right of telling you have your own crypto-currency.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card>
          <Card.Header as="h5">Is this website free?</Card.Header>
          <Card.Body>
            <Card.Text>
            Yes and no. But mostly yes. <br/>We aim to provide a free alternative to all the paying websites giving the same service, with an easy to use interface, no data collection and absolute security. If you have ether in your Metamask account, you will be able to create your coin for free in a no strings attached way. However if you don’t have ether and don’t want to buy it, we can deploy the token with our own funds and charge you the network fee plus a small convenience fee. It is the only case were will charge something. (Not supported yet) 
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card>
          <Card.Header as="h5">Metamask</Card.Header>
          <Card.Body>
            <Card.Text>
            This applications uses <a href="https://metamask.io">Metamask</a> a
            web browser extension to interact with the Ethereum blockchain. You
            can install it on firefox and chrome as well as on mobile.
            </Card.Text>
          </Card.Body>
        </Card>

        <br />
        <Card>
          <Card.Header as="h5">Like what you see?</Card.Header>
          <Card.Body>
            <Card.Text>
              Star <span role="img" aria-label="Star">
                ⭐
              </span>{' '}
              or submit a pull request{' '}
              <a href="https://github.com/clement2705/OnClickCoin">
                on the project source code
              </a>
              . <br />
              {/*
              Si les gens veulent nous trouver
              Made by <a href="https://github.com/clement2705">CG</a> and{' '}
              <a href="https://github.com/hugoroussel">HR</a>. <br />
              */}
              
              Contact us for any feedback, questions, help or advice :
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
