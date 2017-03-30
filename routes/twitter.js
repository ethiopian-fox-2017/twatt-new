var express = require('express');
var router = express.Router();
var twitter = require('../controllers/twitter')

/* GET users listing. */
router.get('/search/twit',twitter.getTwit)

      .get('/search/hashtag',twitter.getTag)

      .get('/timeline', twitter.timeline)

      .get('/home', twitter.gethome)

      .get('/', twitter.gethome)

      .post('/', twitter.twit)

module.exports = router;
