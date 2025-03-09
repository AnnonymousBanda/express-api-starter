const handleDevError = (err, res) => {
	return res.status(500).json({
		status: 500,
		message: err.message,
		stack: err.stack,
	})
}

const handleProdError = (res) => {
	return res.status(500).json({
		status: 500,
		message: 'Internal Server Error',
	})
}

const globalErrorHandler = (err, req, res, next) => {
	console.error(err)

	if (process.env.NODE_ENV === 'development') {
		return handleDevError(err, res)
	} else {
		return handleProdError(res)
	}
}

process.on('unhandledRejection', (err) => {
	console.log('unhandledRejection!')
	console.error(err)

	process.exit(1)
})

process.on('uncaughtException', (err) => {
	console.log('uncaughtException!')
	console.error(err)

	process.exit(1)
})

module.exports = { globalErrorHandler }
