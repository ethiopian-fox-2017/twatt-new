const express = require('express');
var OAuth = require('oauth');
require('dotenv').config()

let twatt = {}

 twatt.twitterOauth = function(req, res, next){
   var oauth = new OAuth.OAuth(
       'https://api.twitter.com/oauth/request_token',
       'https://api.twitter.com/oauth/access_token',
        process.env.CUSEMER_KEY ,
        process.env.CUSEMER_SECRET ,
       '1.0A',
       null,
       'HMAC-SHA1'
     );
 oauth.post(
     `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.status}`,
      process.env.ACCESS_TOKEN, //test user token
      process.env.ACCESS_SECRET, //test user secret
      `${req.body.status}`,
      'text',
     function (e, data, respon){
       if (e) console.error(e);
       // console.log(require('util').inspect(data));
       res.send(data)
     });
 }

 module.exports = twatt
