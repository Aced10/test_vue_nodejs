import axios from 'axios';

const url = 'http://localhost:4000/';

class LoginService {
	static loginFacebook() {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(url);
				const data = res.data;
				resolve(
					data.map(user => ({
						user
					}))
				)
			} catch (err) {
				reject(err);
			}
		})

		return {user:'Prueba', name:'Prueba 1'};
	}

	
}

export default LoginService;