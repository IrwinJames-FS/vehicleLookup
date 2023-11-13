const router = require("express").Router();

const {create, getAll, manufacturerNotFound, getById, updateById, deleteById } = require("../controller/manufacturerController");

//Create
router.post("/", create);

//Read
router.get("/", getAll);

//Read by ID
router.get("/id/:id", getById);

//Update by ID
router.put("/id/:id", updateById);

//Delete by ID
router.delete("/id/:id", deleteById);

//Not found handler
router.use(manufacturerNotFound);