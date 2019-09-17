const passport = require('passport');
const GooglePlusStrategy = require('passport-google-plus-token');
const keys = require('./keys');

passport.use('googleToken',
	new GooglePlusStrategy({
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret
	}, async (accessToken, refreshToken, profile, done) => {
		try {
			console.log('profile', profile);
			console.log('accessToken', accessToken);
			console.log('refreshToken', refreshToken);
			return profile;		
			done(null, profile);
		} catch(error) {
			done(error, false, error.message);
		}
	})
)
