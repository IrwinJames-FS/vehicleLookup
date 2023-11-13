const express = require("express");
const morgan = require("morgan");

require("./db/config")();
const app = express();

const router = require("./router");

app.use(express.json());
app.use(morgan("dev"));

//Server status
app.get("/", (req, res) => res.status(200).send("Service is up"));

//Bring in the api endpoints
app.use("/v1", router);

//Error handling
app.use((error, req, res, next) => res.status(error.status || 500).json({
	error: {
		message: error.message,
		status: error.status
	}
}));

module.exports = app;