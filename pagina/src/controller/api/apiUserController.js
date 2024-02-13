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
    },
    login: async(req,res)=>{
        if(req.body && req.body != null){
            const loged = await userServices.loguser(req.body);
            if(loged == null){
                const errors = [{ msg: "credenciales invalidas" }];
                res.json(errors);
            }
            delete loged.dataValues.password;
            res.json(loged);
        }else{
            const errors = [{ msg: "credenciales invalidas" }];
            res.json(errors);
        }
        console.log(loged)
    }
};

module.exports = controller;