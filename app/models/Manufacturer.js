const { Schema, model } = require("mongoose");
const Vehicle = require("./Vehicle");
/**
 * The manufacturer
 */
const Manufacturer = Schema({
	name: {type: String, required: [true, "A manufacturer requires a name"], unique: [true, "A manufacturer's name should be unique"]},
	established: {type: Date, required: [true, "A manufacturer requires an established date"]},
	revenue: {type: Number, default: 0}
});

//cascade models that are related to this manufacturer
Manufacturer.pre('deleteOne', function(next){
	const id = this.getQuery()['_id'];
	Vehicle.deleteMany({manufacturer: id}).exec();
	next();
});

module.exports = model("Manufacturer", Manufacturer);