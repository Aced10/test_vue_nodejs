const path = require('path');

module.exports = {
	outputDir: path.resolve(__dirname, '../images/public'),
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:4000'
			}
		}
	}
}