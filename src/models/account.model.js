const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

const Account = mongoose.model('account', AccountSchema);

module.exports = Account;
