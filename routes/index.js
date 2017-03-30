var express = require('express');
var router = express.Router();
var tweet = require('../controller/tweet')


/* GET home page. */
router.get('/tweet/search', tweet.getTweet);
router.get('/tweet/user', tweet.getRecent);
router.post('/tweet/update', tweet.postUpdate);

module.exports = router;
