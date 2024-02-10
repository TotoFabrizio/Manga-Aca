var express = require('express');
var router = express.Router();

const apiProdController = require("../../controller/api/apiProductController");
const apiUserController = require("../../controller/api/apiUserController")

router.get('/product', apiProdController.allProducts);
router.get('/lastproduct', apiProdController.lastProduct);

router.get("/user", apiUserController.allUsers);



module.exports = router;