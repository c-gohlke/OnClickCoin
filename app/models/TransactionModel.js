/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const TransactionSchema = new Schema(
  {
    sender: { type: String, required: true },
    receiver: { type: String },
    amount: { type: Number },
    txHash: { type: String, unique: true, required: true },
    contract: { type: Object, required: true },
    username: { type: mongoose.Schema.Types.ObjectId },
    netname: { type: String, required: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  },
);

module.exports = mongoose.model('Transaction', TransactionSchema);
