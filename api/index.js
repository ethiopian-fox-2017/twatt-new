const express = require('express');
const router = express.Router();
const OAuth = require('oauth');
const twattController = require('../controllers/twatt');

router.post('/', twattController.post_timeline)
router.get('/search', twattController.search)
router.get('/home', twattController.home_timeline)
router.get('/user', twattController.user_timeline)

module.exports = router