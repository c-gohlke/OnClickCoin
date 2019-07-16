const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'username' });

module.exports = mongoose.model('User', UserSchema);
