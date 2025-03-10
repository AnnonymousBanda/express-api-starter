const express = require('express')
const morgan = require('morgan')
const passport = require('passport')

const { apiRouter, oauthRouter } = require('./routes')
const {
	notFound,
	globalErrorHandler,
} = require('./controllers/error.controller')
const configPassport = require('./config/passport.config')

const app = express()

// initialize passport
app.use(passport.initialize())
configPassport(passport)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.use('/api', apiRouter)
app.use('/oauth', oauthRouter)

app.all('*', notFound)

app.use(globalErrorHandler)

module.exports = app
