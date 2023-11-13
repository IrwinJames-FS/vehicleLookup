const { Schema, model } = require("mongoose");

/**
 * The manufacturer
 */
const Vehicle = Schema({
	model: {type:String, unique: [true, "The vehicle's name should be unique"], required: [true, "The vehicle's model name is required"]},
	manufacturer: {type: Schema.Types.ObjectId, ref: 'Manufacturer', required: [true, "The vehicle's manufacturer is required"]},
	vehicleType: {
		type: [String],
		required: true,
		enum: [
			"SUV",
			"Hatchback",
			"Sedan",
			"Convertable",
			"Coupe",
			"Station Wagon",
			"Crossover",
			"Minivan",
			"Pickup Truck",
			"Van",
			"Luxury Car",
		]
	},
	releaseDate: {type: Date, required: [true, "The vehicle's release date is required"]},
});

module.exports = model("Vehicle", Vehicle);