# twatt-new

a simple demo using [twitter oauth API](https://dev.twitter.com/overview/api).

## ROUTES

List of routes:

Route | HTTP | Description
----- | ---- | -----------
`/tweet/search?q=` | GET | Get all tweets which match with the query
`/tweet/user` | GET | Get user timeline
`/tweet/update` | POST | Posting new tweet to user timeline

Example :
- `/tweet/search?q=jakarta` will search in twitter with keycode = jakarta

## Usage
With only npm:

> `npm install`

> `npm start` or `npm run dev`

Access the website via `http://localhost:3000`.
