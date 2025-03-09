const router = require('express').Router()

router.get('/login', (req, res) => {
	return res.json({ status: 200, message: 'Login' })
})

module.exports = router
