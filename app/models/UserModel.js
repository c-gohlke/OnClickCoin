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
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // TODO: obviously not safe
});

UserSchema.methods.validatePassword = function validate(password) {
  console.log('in validate function. this.password = ', this.password);
  console.log('password given is', password);
  // TODO: obviously not safe
  return this.password === password;
};

mongoose.model('User', UserSchema);

export default UserSchema;
