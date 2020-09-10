const Referrals = require('../models/referrals.model');

module.exports = {
  insert
}

async function insert(referrals) {
  return await new Referrals(referrals).save();
}
