const { Schema, model } = require("mongoose");

/**
 * The manufacturer
 */
const Manufacturer = Schema({
	name: {type: String, required: [true, "A manufacturer requires a name"]},
	established: {type: Date, required: [true, "A manufacturer requires an established date"]},
	averageYearlyRevenue: {type: Number, default: 0}
});

module.exports = model("Manufacturer", Manufacturer);