const express = require('express');
const router = express.Router();
const OAuth = require('oauth');

router.get('/', function(req, res, next) {
  res.send('Welcome to Twatt')
})

module.exports = router