const userServices = require("../../services/userService");

const controller = {
    allUsers: async(req,res) =>{
        const users = await userServices.findAll();
        let count = 0;

        users.map((user)=>{
            delete user.dataValues.password;
            count++;
        })
        res.json({
            users: users,
            cantUser: count
        })
    }
};

module.exports = controller;