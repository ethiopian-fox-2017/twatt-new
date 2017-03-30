var OAuth = require('oauth');
require('dotenv').config();
var oauth = require('../config/config')
var tweet={}

tweet.getTweet = function(req,res,next) {
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.q}`,
    `${process.env.APP_TOKEN}`, //test user token dari twitter credential apps = gunakan .env
    `${process.env.USER_SECRET_TOKEN}`, //test user secret dari twitter credential apps = gunakan .env
    function (e, data){
    if (e) console.error(e);
    // console.log(require('util').inspect(data));
    // done();
    res.send(JSON.parse(data))
  });
}

tweet.getRecent = function(req,res,next) {
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json`,
    `${process.env.APP_TOKEN}`, //test user token dari twitter credential apps = gunakan .env
    `${process.env.USER_SECRET_TOKEN}`, //test user secret dari twitter credential apps = gunakan .env
    function (e, data){
    if (e) console.error(e);
    // console.log(require('util').inspect(data));
    // done();
    res.send(JSON.parse(data))
  });
}

tweet.postUpdate = function(req,res,next) {
  let input = encodeURIComponent(req.body.input)
  input = input.split('%20').join('+');
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${input}`,
    `${process.env.APP_TOKEN}`, //test user token dari twitter credential apps = gunakan .env
    `${process.env.USER_SECRET_TOKEN}`, //test user secret dari twitter credential apps = gunakan .env
    `${input}`,
    `text`,
    function (e, data){
    if (e) console.error(e);
    // console.log(require('util').inspect(data));
    // done();
    res.send(JSON.parse(data))
  });
}
module.exports = tweet
