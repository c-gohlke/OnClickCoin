/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContractSchema = new Schema(
  {
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    decimals: { type: Number, required: true },
    supply: { type: Number, required: true },
    sender: { type: String, required: true },
    txHash: { type: String, required: true, unique: true },
    address: { type: String, required: true, unique: true },
    username: { type: String },
    netname: { type: String, required: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  },
);

module.exports = mongoose.model('Contract', ContractSchema);
