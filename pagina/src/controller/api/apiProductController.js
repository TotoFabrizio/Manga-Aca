const productsServices = require("../../services/productService");

const controller = {
    allProducts: async(req,res) =>{
        const products = await productsServices.findAll();

        res.json({
            product: products,
        })
    }
};

module.exports = controller;