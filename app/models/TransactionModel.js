/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * User Schema
 *
 * -1 userID means anonymous/not logged in
 * -1 contractAddress means it was a transaction, not a contract deployment. Separate Collections better?
 * sender is address of person sending, receiver is address of person receiving payment. If it's a contract, put -1
 */

const TransactionSchema = new Schema(
  {
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    decimals: { type: Number, required: true },
    supply: { type: Number, required: true },
    sender: { type: String, required: true },
    receiver: { type: String, default: '-1' },
    transactionHash: { type: String, unique: true, required: true },
    contractAddress: { type: String, default: -1 },
    userID: { type: mongoose.Schema.Types.ObjectId },
    netname: { type: String, required: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  },
);

mongoose.model('Transaction', TransactionSchema);

module.exports = mongoose.model('Transaction', TransactionSchema);
