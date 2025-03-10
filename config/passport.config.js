const OutlookStrategy = require('passport-outlook').Strategy

// configure passport to use oauth strategy, in this case, outlook
const configPassport = (passport) => {
	passport.use(
		new OutlookStrategy(
			{
				clientID: process.env.OUTLOOK_CLIENT_ID,
				clientSecret: process.env.OUTLOOK_CLIENT_SECRET,
				callbackURL: '/oauth/outlook/callback',
			},
			(accessToken, refreshToken, profile, done) => {
				user = {
					profile,
					accessToken,
				}

				return done(null, user)
			}
		)
	)
}

module.exports = configPassport
