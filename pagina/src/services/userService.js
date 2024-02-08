const db = require("../database/models");
const Op = db.Sequelize.Op;

const userServices = {
    findAll() {
        const users = db.User.findAll();
        return users;
    }
}

module.exports = userServices;