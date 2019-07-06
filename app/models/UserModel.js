/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * User Schema
 */

const UserSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // TODO: obviously not safe
});

mongoose.model('User', UserSchema);

export default UserSchema;
