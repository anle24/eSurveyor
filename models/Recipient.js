const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchmea = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchmea;
