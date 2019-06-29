import { bytecodeCrowdsale, abiCrowdsale } from '../../contracts/ICO/crowdsale';
import getPermission from './getPermission';
const axios = require('axios');

const Web3 = require('web3');


async function deployCrowdsale(symbol, name, decimals, supply) {
    // TODO: move folder somewhere else. This happens client-side
    if (typeof web3 !== 'undefined') {
        await getPermission();
        window.web3 = new Web3(window.ethereum);

        // Create the data for the deploy transaction encoding the
        // arguments of the constructor with the constructor item of the contract ABI
        const abiPackedArgs = window.web3.eth.abi.encodeFunctionCall(
            abiCrowdsale,
            [rate, wallet, ierc20],
        );

        // remove the function signature (hash of the method signature)
        // so the object can be added directly to the bytecode
        const removeMethodSignature = abiPackedArgs.substring(10);

        const bcode = `0x${bytecodeCrowdsale}${removeMethodSignature}`;

        const accounts = await window.ethereum.enable();

        let netname;

        // returns the id of the ethereum network the client is working on
        const netID = await window.web3.eth.net.getId();

        switch (netID) {
            case '1':
                netname = '';
                break;
            case '2':
                netname = 'morden';
                break;
            case '3':
                netname = 'ropsten';
                break;
            case 4:
                netname = 'rinkeby';
                break;
            case '42':
                netname = 'kovan';
                break;
            default:
                netname = 'Unknown';
        }

        // sends the transaction via metamask
        await window.web3.eth
            .sendTransaction({
                from: accounts[0],
                value: 0,
                chainId: netID,
                data: bcode,
            })
            .on('transactionHash', hash => {
                console.log('transaction received, hash is', hash);
                alert('This will take a minute please be patient');
            })
            .on('confirmation', (confirmationNumber, receipt) => {
                console.log('transaction has been confirmed');
                window.location.replace(
                    `${window.location.origin}/receipt?netname:${netname}?address:${
                    receipt.contractAddress
                    }?tokenname:${name}?supply:${supply}?sendAddr:${accounts[0]}`,
                );
            })
            .on('error', console.error);
    }
    // when the client does not have metamask, go through infura http provider
    else {
        console.log('Client does not have a web3 provider');
        window.alert('This will take a minute please be patient');

        // TODO: remove hardcoded rinkeby
        const netname = 'rinkeby';
        axios
            .post('/deploy-contract', {
                symbol,
                name,
                decimals,
                supply,
                netname,
            })
            .then(function redirect(response) {
                console.log('transaction confirmed');
                console.log('response is', response.data);
                window.location.replace(
                    `${window.location.origin}/receipt?netname:${netname}?address:${
                    response.data.contractAddr
                    }?tokenname:${name}?supply:${supply}?sendAddr:${
                    response.data.account
                    }`,
                );
            });
    }
}

export default deployCrowdsale;