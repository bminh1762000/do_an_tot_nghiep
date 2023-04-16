const express = require("express");

const router = express.Router();

const directoryController = require("../controllers/directory");

router.get("/directory", directoryController.getDirectory);

module.exports = router;
