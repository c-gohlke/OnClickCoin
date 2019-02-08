const endpoint = [
    "https://rinkeby.infura.io/v3/eb949230c4d64a3c8e951a64a1c3b20b",
    "https://kovan.infura.io/v3/eb949230c4d64a3c8e951a64a1c3b20b",
    "https://ropsten.infura.io/v3/eb949230c4d64a3c8e951a64a1c3b20b",
    "https://mainnet.infura.io/v3/eb949230c4d64a3c8e951a64a1c3b20b"
];
const chainId = [4, 42, 3,1];
const sendAddress = "0x2afd357E96a3aCbcd01615681C1D7e3398d5fb61";
const sendPrivKey =
  "a33fca62081a2665454fe844a8afbe8e2e02fb66af558e695a79d058f9042f0d";
const receiveAddr = "0x8244Df0ACF6d2Dac25699A4F21E54f561C54Ed69";
const gasPrice = "10000000000";
const gasLimit = "800000";
const sendAmount = "0.0001";

export {
  endpoint,
  sendAddress,
  sendPrivKey,
  receiveAddr,
  gasPrice,
  gasLimit,
  chainId,
  sendAmount
};
