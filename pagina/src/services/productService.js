const db = require("../database/models");
const Op = db.Sequelize.Op;

const productServices = {
    findAll() {
        const products = db.Volume.findAll({
            where:{deleted:0},
            include:[{association: "volProd"}]
        });
        return products;
    },
    genres() {
        const genres = db.Genre.findAll();
        return genres;
    },
    voluGenre(){
        const volGen = db.ProdGenre.findAll();
        return volGen;
    }
}

module.exports = productServices;