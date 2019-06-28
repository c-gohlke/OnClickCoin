# On Click Coin

This is a proof of concept application to showcase the ease with which you can create a token using the ethereum blockchain. It is also nice to be able to tell that you can create your own "cryptocurrency" in less than a minute and less than three clicks.

Have a look at [OnClickCoin](onclickcoin.herokuappp.com) 
           
## Getting Started



### Prerequisites

What things you need to install the software and how to install them

```
Give examples
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

Replace the .env file with your credentials. The current values, being public on github are obviously compromised.
The account specified in the .env file will be the one used to deploy the contract if the client does not have a web3 provider, so you are advised to not hold any mainnet tokens on that account.
```
INFURA_API_KEY=eb949230c4d64a3c8e951a64a1c3b20b
ADDRESS=0x8244Df0ACF6d2Dac25699A4F21E54f561C54Ed69
PRIVATE_KEY=220B66D89BEFC1CC3B8C1049A694A838B42A1F53CA8081F6C99F9CA4BD5FCBF5
```
If the client has a web3 provider (i.e. the [Metamask](https://metamask.io/) extention), the client's credentials will be used to sign the transaction

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
This way the whole project will keep the same coding style, and the commit log will be more readable as previous work won't be overwritten by someone else's linting.


## Authors
* **Clement Gohlke**
* **Hugo Roussel**

