const express = require('express')

const { globalErrorHandler } = require('./controllers/error.controller')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/oauth', require('./routes/oauth.route'))

app.use((req, res, next) => {
	return res.status(404).json({
		status: 404,
		message: 'Endpoint does not exist',
	})
})

app.use(globalErrorHandler)

module.exports = app
