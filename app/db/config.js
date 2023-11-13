const {connect} = require("mongoose");
module.exports = async () => {
	try {
		console.log("Connecting to mongodb".yellow);
		await connect(process.env.mongoURI);
		console.log("Connected to mongodb".cyan);
	} catch (error) {
		console.log(error.message.red);
	}
}