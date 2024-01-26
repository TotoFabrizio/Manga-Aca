const db = require("../database/models");
const Op= db.Sequelize.Op;

const productsServices = {
    findAll() {
        const products = db.Product.findAll({
            where:{visible:0},
        });//TODO modificar la base de datos para que el genero pertenezca a los titulos y hacer una tabla que sea el id del titulo con los volumenes y las imagens que tiene.
    }
}

module.exports = productsServices;