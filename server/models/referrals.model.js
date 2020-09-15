const mongoose = require('mongoose');

const ReferralsSchema = new mongoose.Schema({
  refer_firstname: {
    type: String,
    
  },
  refer_lastname: {
    type: String,
    
  },
  refer_entity: {
    type: String,
    
  },
  refer_email: {
    type: String,

    unique: true,
    // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
    match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
  },
  client_firstname: {
    type: String,
    
  },
  client_middlename: {
    type: String,
  },
  client_lastname: {
    type: String,
    
  },
  client_email: {
    type: String,
    
    unique: true,
    // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
    match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
  },
  client_gender: {
    type: String,
    
  },
  client_birth: {
    type: Date,

  },
  client_address1: {
    type: String,

  },
  client_address2: {
    type: String,
  },
  client_city: {
    type: String,

  },
  client_state: {
    type: String,

  },
  client_zipcode: {
    type: String,
  },
  client_contact_by_email: {
    type: Boolean,
  },
  client_send_message: {
    type: Boolean,
  },
  client_primary_phonenumber: {
    type: String,
  },
  client_secondary_phonenumber: {
    type: String,
  },
  client_insurance: {
    type: String,
  },
  client_description: {
    type: String,
  },
  client_aware_type: {
    type: Boolean,
  },
  client_how_did_hear: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
}, {
  versionKey: false
}); 

module.exports = mongoose.model('Referrals', ReferralsSchema);
