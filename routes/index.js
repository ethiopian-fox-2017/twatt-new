var express = require('express');
var router = express.Router()
var OAuth = require('oauth');

require('dotenv').config()

var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.APPLICATION_CONSUMER_KEY,
      process.env.APPLICATION_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );

let updateStatus = function (status, cb) {

  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${status}`,
    process.env.USER_TOKEN, //test user token
    process.env.USER_SECRET, //test user secret
    status,
    'text',
    function (e, data, res){
      if (e) console.error(e);
      // console.log(require('util').inspect(data));
      cb(data)
      // done()
    });
}

router.post('/', function (req,res,next) {
  updateStatus(req.body.status, function (data) {
    res.send(data)
  })
})


module.exports = router
