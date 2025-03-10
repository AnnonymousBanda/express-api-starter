const express = require('express')

const { apiRouter } = require('./routes')
const {
	notFound,
	globalErrorHandler,
} = require('./controllers/error.controller')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter)

app.use(notFound)

app.use(globalErrorHandler)

module.exports = app
