const express = require("express");
const app = express();

app.get('/', (req, res) => {
	res.send("Ruta raiz login");
})

app.listen(4000, () => {
	console.log("Ejecutando login service port 4000");
})