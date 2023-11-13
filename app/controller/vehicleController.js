const Vehicle = require("../models/Vehicle");

/**
 * Get all Vehicles
 * @param {*} _ 
 * @param {*} res 
 * @param {*} next 
 */
const getAll = async (_, res, next) => {
	try {
		const vehicles = await Vehicle.find().populate().exec();
		return res.status(200).json(vehicles);
	} catch (error) {
		return next(error);
	}
}

/**
 * Get Vehicle by ID
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getById = async (req, res, next) => {
	try {
		const vehicle = await Vehicle.findById().populate().exec();
		return res.status(200).json(vehicle);
	} catch (error) {
		return next(error);
	}
}