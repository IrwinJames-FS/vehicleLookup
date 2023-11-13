const Manufacturer = require("../models/Manufacturer");

/**
 * Create Manufacturer
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const create = async (req, res, next) => {
	try {
		const manufacturer = await Manufacturer.create(req.body);
		return res.status(200).json(manufacturer);
	} catch (error) {
		return next(error);
	}
};

/**
 * Get all manufacturers
 * @param {*} _ 
 * @param {*} res 
 * @param {*} next 
 */
const getAll = async (_, res, next) => {
	try {
		const manufacturers = await Manufacturer.find()
		return res.status(200).json(manufacturers);
	} catch (error) {
		return next(error);
	}
};

/**
 * Get Manufacturer by ID
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getById = async (req, res, next) => {
	const { id } = req.params;
	try {
		const manufacturer = await Manufacturer.findById(id);
		return manufacturer ? res.status(200).json(manufacturer):next();
	} catch (error) {
		return next(error);
	}
};

/**
 * Update Manufacturer by ID
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const updateById = async (req, res, next) => {
	const { id } = req.params;
	try {
		const manufacturer = await Manufacturer.findByIdAndUpdate(id, req.body, {new: true});
		return manufacturer ? res.status(202).json(manufacturer):next();
	} catch (error) {
		return next(error);
	}
}

/**
 * Delete by ID
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const deleteById = async (req, res, next) => {
	const { id } = req.params;
	try {
		const manufacturer = await Manufacturer.findByIdAndDelete(id);
		return res.status(manufacturer ? 202:204).json(manufacturer);
	} catch (error) {
		return next(error);
	}
}

const manufacturerNotFound = (req, res, next) => {
	const error = new Error("Manufacturer not found!");
	error.status = 404;
	return next(error);
}
