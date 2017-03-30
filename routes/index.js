let routes = require('express').Router();
let oauth = require('oauth');
require('dotenv').config();

let myOauth = new oauth.OAuth(
  //using CONSUMER KEY
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMER_KEY,
  process.env.CONSUMER_SECRET,
  '1.0',
  'http://127.0.0.1:3000/twitter/callback',
  'HMAC-SHA1',
  null
);

routes.get('/', (req,res) => {
  myOauth.get(
        'https://api.twitter.com/1.1/statuses/user_timeline.json?count=3', //user timeline
        // 'https://api.twitter.com/1.1/statuses/home_timeline.json', //home timeline
        process.env.TOKEN, //test user token
        process.env.TOKEN_SECRET, //test user secret
        function(e, data) {
          if (e) console.error(e);
          res.send(data);
          // console.log(require('util').inspect(data));
          // done();
        }
  )
});

routes.post('/', (req, res) => {
  myOauth.post(
        `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.status}`, //user timeline
        // 'https://api.twitter.com/1.1/statuses/home_timeline.json', //home timeline
        process.env.TOKEN, //test user token
        process.env.TOKEN_SECRET, //test user secret
        req.body.status,
        'text',
        function(e, data) {
          if (e) console.error(e);
          res.send(data);
          // console.log(require('util').inspect(data));
          // done();

        }
  )
})

module.exports = routes;