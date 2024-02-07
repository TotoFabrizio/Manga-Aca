var express = require('express');
var router = express.Router();

const mainController = require("../controller/mainController");
const apiMainRouter = require("./api/apiMainRouter");

/* GET home page. */
router.get('/', mainController.index);

router.use("/api",apiMainRouter);

module.exports = router;
