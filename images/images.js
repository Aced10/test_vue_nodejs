const express = require("express");
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
let upload = multer({ dest: 'uploads/' })


let Storage = multer.diskStorage({
	destination: function(req, file, callback) {
 		callback(null, "./uploads");
	},
	filename: function(req, file, callback) {
	 	callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
	}
});

let upload = multer({
	storage: Storage
}).array("imgUploader", 1); //Field name and max count

app.get('/', (req, res) => {
	res.send("Ruta raiz images");
})


app.post('/api/Upload', (req, res) => {
  	upload(req, res, function(err) {
		if (err) {
		 	return res.end("Se presento un error!");
		}
		return res.end("Se cargo el archivo de manera correcta!.");
 	});
})

app.get('/saveSelect', upload.single('avatar'), (req, res) => {
	res.send("Ruta raiz images");
})

app.get('/saveImage', (req, res) => {
	res.send("Ruta raiz images");
})


app.listen(5000, () => {
	console.log("Ejecutando images service port 5000");
})

