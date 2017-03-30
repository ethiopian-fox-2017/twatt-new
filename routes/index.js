var express = require('express');
var router = express.Router();
require('dotenv').config();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send('Welcome');
// });

var OAuth = require('oauth');

router.get('/tweet/search/:q', function(req, res, next){
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APPCONSUMERKEY,
    process.env.APPSECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.q}`,
    process.env.USERTOKEN,
    process.env.USERSECRET,
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    });
})

router.get('/tweet/recent', function(req, res, next){
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APPCONSUMERKEY,
    process.env.APPSECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json`,
    process.env.USERTOKEN,
    process.env.USERSECRET,
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    });
})

router.post('/tweet/new', function(req, res, next){
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APPCONSUMERKEY,
    process.env.APPSECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );

  let status = encodeURIComponent(req.body.status)
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${status}`,
    process.env.USERTOKEN,
    process.env.USERSECRET,
    `${status}`,
    'text',
    function (e, data){
      if (e) console.error(e);
      res.send(data)
    });
})

module.exports = router;
