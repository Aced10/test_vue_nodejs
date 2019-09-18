const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const bodyParser = require('body-parser');
const passportConf = require('./config/passport');
const LoginController = require('./controllers/login');

const passportGoogle = passport.authenticate('googleToken', {session: false });
const app = express();

app.use(bodyParser.json());

router.route('/google').post(passportGoogle, LoginController.googleOAuth);

app.use('/login', router);

app.listen(4001, () => {
	console.log("Ejecutando login service port 4001");
})