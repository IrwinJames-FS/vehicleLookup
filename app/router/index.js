const router = require("express").Router();

const vehicleRouter = require("./vehicleRouter");
const manufacturerRouter = require("./manufacturerRouter");

//Vehicle endpoints
router.use("/vehicle", vehicleRouter);

//Manufacturer endpoints
router.use("/manufacturer", manufacturerRouter);

module.exports = router;