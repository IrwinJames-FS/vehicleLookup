const colors = require("colors");
colors.enable();

require("dotenv").config();

const port = process.env.port || 3000;

const app = require("./app");

app.listen(port, () => console.log(`Listening on port ${port}`.cyan));

