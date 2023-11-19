const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const {service_is_up} = require("./messages");

require("./db/config")();
const app = express();

const router = require("./router");

app.use(express.json());
app.use(morgan("dev"));

app.use(cors()); //Published version should not require this I will be rolling client and server into one server prior to submission.
//Server status
app.get("/", (req, res) => res.status(200).json({
	message: service_is_up,
	success: true
}));

//Bring in the api endpoints
app.use("/v1", router);

//Error handling
app.use((error, req, res, next) => {
	console.log(error);
	return res.status(error.status || 500).json({
		error: {
			message: error.message,
			status: error.status
		}
	})
});

module.exports = app;