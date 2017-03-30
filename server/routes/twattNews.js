const express = require('express');
const router = express.Router();
const helper = require ('../helpers/twattNew');


router.post('/tweet', helper.twitterOauth)

module.exports = router;
