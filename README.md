# On Click Coin

This is a proof of concept application to showcase the ease with which you can create a token using the Ethereum blockchain. It is also nice to be able to tell that you can create your own "cryptocurrency" in less than a minute and less than three clicks. For a more specific documentation visit our [official docs](https://github.com/clement2705/OnClickCoin/blob/master/docs/docs.md)

Take a look at [OnClickCoin](https://onclickcoin.herokuapp.com/) 
           
## Getting Started
![alt text](https://github.com/clement2705/OnClickCoin/blob/assets/Homepage.png)

Simply fill in the parameters of your token and Press on "Click here to create your coin". You will then have to wait ~15 seconds (time for one Ethereum block). You will then get redirected to your receipt page of your token.

### Prerequisites

Before starting with the installation, you must have Node.js and NPM installed. You can download them from the [Node.js website](https://nodejs.org/en/)

To check whether you currently have node or npm installed, type the following which will output version you own, if installed
```
node -v
npm -v
```

### Installing

Clone the repository to your local machine:
```
git clone https://github.com/clement2705/OnClickCoin.git
```

Move to the repository and install the dependencies, specified in package.json
```
cd OnClickCoin
npm install
```

Replace the .env file with your credentials. The values below, being public on github, are obviously compromised.
The account specified in the .env file will be the one used to deploy the contract if the client does not have a web3 provider, so you are advised to hold no mainnet tokens on that account.

```
INFURA_API_KEY=eb949230c4d64a3c8e951a64a1c3b20b
ADDRESS=0x8244Df0ACF6d2Dac25699A4F21E54f561C54Ed69
PRIVATE_KEY=220B66D89BEFC1CC3B8C1049A694A838B42A1F53CA8081F6C99F9CA4BD5FCBF5
```
If the client has a web3 provider (e.g the [Metamask](https://metamask.io/) extention), the client's credentials will be used to sign the transaction.

Run the server, then visit http://localhost:3000/
```
npm start
```

## Deployment
Deployment to [OnClickCoin](onclickcoin.herokuappp.com) happens automatically via heroku when a new push to the master branch is detected

## Built With

* [React](https://reactjs.org/docs/getting-started.html)
* [Express](https://expressjs.com/en/api.html)
* [Babel](https://babeljs.io/docs/en/)
* [Web3](https://web3js.readthedocs.io/en/1.0/web3-eth.html)

## Contributing

Before submitting a pull request, make sure to run
```
npm run lint
```
This way the whole project will keep the same coding style, and the commit log will be more readable, as previous work won't be overwritten by someone else's linting.


## Authors
* **Clement Gohlke**
* **Hugo Roussel**

