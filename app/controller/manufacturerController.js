const Manufacturer = require("../models/Manufacturer");
const {manufacturer_not_found} = require("../messages");

const popArgs = ['models', 'model vehicleType -manufacturer']
/**
 * Create Manufacturer
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const create = async (req, res, next) => {
	try {
		const manufacturer = await Manufacturer.create(req.body);
		return res.status(202).json(manufacturer);
	} catch (error) {
		console.log(error);
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
		const manufacturers = await Manufacturer.find().select("-__v").populate(...popArgs).exec()
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
		const manufacturer = await Manufacturer.findById(id).select("-__v").populate(...popArgs).exec();
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
		const manufacturer = await Manufacturer.findByIdAndUpdate(id, {$set:req.body}, {new: true});
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
		const manufacturer = await Manufacturer.deleteOne({_id: id}); //deleteOne should allow for middleware to be utilized.
		return res.status(manufacturer ? 202:204).json(manufacturer);
	} catch (error) {
		return next(error);
	}
}

const manufacturerNotFound = (req, res, next) => {
	const error = new Error(manufacturer_not_found);
	error.status = 404;
	return next(error);
}

module.exports = {
	create,
	deleteById,
	manufacturerNotFound,
	getAll,
	getById,
	updateById,
}