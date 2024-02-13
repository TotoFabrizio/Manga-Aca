const db = require("../database/models");
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");

const userServices = {
    findAll() {
        const users = db.User.findAll();
        return users;
    },
    async loguser(user){
        let userToLogin = undefined;
        let userToFind = await db.User.findOne({where: {email: user.email}})
        if(userToFind){
            if(bcrypt.compareSync(user.password,userToFind.password)){
                userToLogin = userToFind;
            }
            return userToLogin;
        }else{
            return null
        }
    }
}

module.exports = userServices;