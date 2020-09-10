const express = require('express');
const asyncHandler = require('express-async-handler');
const referralsCtrl = require('../controllers/referrals.controller');

const router = express.Router();
module.exports = router;

router.route('/')
  .post(asyncHandler(insert));


async function insert(req, res) {
  let referrals = await referralsCtrl.insert(req.body);
  res.json(referrals);
}
