const jwt = require('jsonwebtoken');
const { secret } = require('../config/keys');

signToken = user => {
    return jwt.sign(user, secret, {expiresIn: "1 day"});
}

module.exports = {
    googleOAuth: async (req, res, next) => {
        console.log(req.user)
        let user = {
            provider: req.user.provider,
            providerId: req.user.id,
            firstName: req.user.name.givenName, 
            lastName: req.user.name.familyName,
            email: req.user.emails[0].value,
            photo: req.user.photos[0].value
        }
        const token = signToken(user);
        res.status(200).json({ token });
    }
}