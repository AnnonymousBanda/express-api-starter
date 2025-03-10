const { disconnectDB } = require('../database')

const uncaughtException = () => {
	process.on('uncaughtException', async (err) => {
		console.log('UNCAUGHT EXCEPTION! Shutting down...')
		console.log(err.name + '! ' + err.message)

		if (process.env.NODE_ENV !== 'test') console.error(err)

		await disconnectDB()
		process.exit(1)
	})
}

const unhandledRejection = (server) => {
	process.on('unhandledRejection', async (err) => {
		console.log(err.name + '! ' + err.message)
		console.log('UNHANDLED REJECTION! Shutting down...')

		if (process.env.NODE_ENV !== 'test') console.error(err)

		await disconnectDB()
		server.close(() => {
			process.exit(1)
		})
	})
}

const catchAsync = (fn) => {
	return async (req, res, next) => {
		try {
			await fn(req, res, next)
		} catch (err) {
			next(err)
		}
	}
}

module.exports = { unhandledRejection, uncaughtException, catchAsync }
