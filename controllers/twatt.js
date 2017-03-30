const OAuth = require('oauth');

let oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.TWITTER_API_KEY,
  process.env.TWITTER_API_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);

module.exports = {

  home_timeline: function(req, res, next) {

    oauth.get(
      `https://api.twitter.com/1.1/statuses/home_timeline.json`,
      process.env.TWITTER_ACCESS_TOKEN,
      process.env.TWITTER_ACCESS_TOKEN_SECRET,
      function (e, data){
        if (e) console.error(e);
        res.send(JSON.parse(data))
      });

  }, // home_timeline

  user_timeline: function(req, res, next) {

    oauth.get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json`,
      process.env.TWITTER_ACCESS_TOKEN,
      process.env.TWITTER_ACCESS_TOKEN_SECRET,
      function (e, data){
        if (e) console.error(e);
        res.send(JSON.parse(data))
      });

  }, // user_timeline

  search: function(req, res, next) {

    let q = encodeURIComponent(req.query.q)
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${q}`,
      process.env.TWITTER_ACCESS_TOKEN,
      process.env.TWITTER_ACCESS_TOKEN_SECRET,
      function (e, data){
        if (e) console.error(e);
        res.send(JSON.parse(data))
      });

  }, // search

  post_timeline: function(req, res, next) {

    oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json`,
      process.env.TWITTER_ACCESS_TOKEN,
      process.env.TWITTER_ACCESS_TOKEN_SECRET,
      { "status": req.query.status },
      function (e, data){
        if (e) console.error(e);
        res.send(JSON.parse(data))
      });

  } // post_timeline

}