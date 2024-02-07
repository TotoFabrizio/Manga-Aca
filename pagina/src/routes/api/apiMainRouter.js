var express = require('express');
var router = express.Router();

const apiController = require("../../controller/api/apiProductController");

router.get('/product', apiController.allProducts);


module.exports = router;