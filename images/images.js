const express = require("express");
const app = express();

app.get('/', (req, res) => {
	res.send("Ruta raiz images");
})

app.listen(5000, () => {
	console.log("Ejecutando images service port 5000");
})