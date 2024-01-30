const db = require("../database/models");
const Op = db.Sequelize.Op;

const productServices = {
    findAll() {
        const products = db.Volume.findAll({
            where:{deleted:0},
            include:[{association: "volProd"}]
        });
        return products;
    }
}

module.exports = productServices;