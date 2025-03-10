const { test } = require('../controllers/oauth.controller')

const router = require('express').Router()

router.get('/test', test)

module.exports = router
