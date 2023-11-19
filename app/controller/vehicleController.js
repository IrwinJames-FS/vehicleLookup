const Vehicle = require("../models/Vehicle");
const { vehicle_not_found } = require("../messages");

/**
 * Create Vehicle
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const create = async (req, res, next) => {
	try {
		const vehicle = await Vehicle.create( req.body);
		return res.status(202).json(vehicle);
	} catch (error) {
		return next(error);
	}
}

/**
 * Get all Vehicles
 * @param {*} _ 
 * @param {*} res 
 * @param {*} next 
 */
const getAll = async (_, res, next) => {
	try {
		const vehicles = await Vehicle.find().select("-__v").populate('manufacturer', "name").exec();
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
	const { id } = req.params;
	try {
		const vehicle = await Vehicle.findById(id).select("-__v").populate('manufacturer', "name").exec();
		return vehicle ? res.status(200).json(vehicle):next();
	} catch (error) {
		return next(error);
	}
}

/**
 * Update Vehicle by ID
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const updateById = async (req, res, next) => {
	const { id } = req.params;
	try {
		const vehicle = await Vehicle.findByIdAndUpdate(id, {$set: req.body}, {new: true}).exec();
		return vehicle ? res.status(202).json(vehicle):next();
	} catch (error) {
		return next(error);
	}
}

/**
 * Delete Vehicle by ID
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const deleteById = async (req, res, next) => {
	const { id } = req.params;
	try {
		const vehicle = await Vehicle.findByIdAndDelete(id).exec();
		return res.status(vehicle ? 202:204).json(vehicle);
	} catch (error) {
		return next(error);
	}
}

/**
 * Vehicle not found middleware
 * @param {*} req 
 * @param {*} res 
 * @param {*} next  
 */
const vehicleNotFound = (req, res, next) => {
	const error = new Error(vehicle_not_found);
	error.status = 404;
	return next(error);
}

module.exports = {
	create,
	getAll,
	getById,
	updateById,
	deleteById,
	vehicleNotFound
}