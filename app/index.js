const express = require("express");

const app = express();

const router = require("./router");

app.use(express.json());

//Server status
app.get("/", (req, res) => res.status(200).send("Service is up"));

//Bring in the api endpoints
app.use("/api", router);

//Error handling
app.use((error, req, res, next) => res.status(error.status || 500).json({
	error: {
		message: error.message,
		status: error.status
	}
}));

module.exports = app;