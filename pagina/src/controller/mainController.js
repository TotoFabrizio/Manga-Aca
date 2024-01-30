const productServices = require("../services/productService");

const controller = {
    index: async (req, res) =>{
        const products = await productServices.findAll();
        res.render("index",{productos: products});
    }
}

module.exports = controller;