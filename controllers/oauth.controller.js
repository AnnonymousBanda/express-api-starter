const { catchAsync } = require('../utils/error.util')

const test = catchAsync((req, res) => {
	res.status(200).json({
		message: 'Test successful',
	})
})

module.exports = { test }
