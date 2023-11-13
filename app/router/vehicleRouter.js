const router = require("express").Router();
const { create, getAll, getById, updateById, deleteById, vehicleNotFound } = require("../controller/vehicleController");

//Create
router.post("/", create);

//Read
router.get("/", getAll);

//Read By ID
router.get("/id/:id", getById);

//Update By ID
router.put("/id/:id", updateById);

//Delete By ID
router.delete("/id/:id", deleteById);

//Not found handler
router.use(vehicleNotFound);

module.exports = router;