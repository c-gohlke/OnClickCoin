import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from '../../components/Header/Navbar';

/*
Defines the send page of the app
*/

const Info = () => (
  <div>
    <Navbar />
    <Row />
    <Row>
      <Container>
        <h1>A free open-source Ethereum based token generator</h1>
        <h2>What is this?</h2>
        This is a proof of concept application to showcase the ease with which
        you can create a token using the ethereum blockchain. It is also nice to
        be able to tell that you can create your own &quot;cryptocurrency&quot;
        in less than a minute and less than three clicks.
        <h2>How?</h2>
        <h4>Metamask</h4>
        This applications uses <a href="https://metamask.io">Metamask</a> a web
        browser extension to interact with the Ethereum blockchain. You can
        install it on firefox and chrome as well as on mobile.
        <h4>Faucets, testnets and mainNet</h4>
        Although the application is entirely free you will need to pay a couple
        of cents in $ETH to deploy on the mainnet and have a real{' '}
        <a href="https://theethereum.wiki/w/index.php/ERC20_Token_Standard">
          ERC20 token
        </a>
        . If you want to deploy entirely for free you can try the application on
        a testet like the <a href="https://rinkeby.io">Rinkeby network</a> and
        request some testnet ether on this{' '}
        <a href="https://faucet.rinkeby.io/">faucet</a>.<h2>Is this useful?</h2>
        Maybe?
        <h2>Like what you see?</h2>
        ⭐️ or submit a pull request{' '}
        <a href="https://github.com/clement2705/OnClickCoin">
          @project-code
        </a>. <br />
        Made by <a href="https://github.com/clement2705">CG</a> and{' '}
        <a href="https://github.com/hugoroussel">HR</a>
      </Container>
    </Row>
    <Row />
  </div>
);

export default Info;
