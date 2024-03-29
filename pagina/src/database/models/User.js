module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define("User",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        userName:{type: DataTypes.STRING},
        email:{type: DataTypes.STRING},
        password:{type: DataTypes.STRING},
        admin:{type: DataTypes.BOOLEAN}
    },
    {
        tableName: "users",
        timestamps: false
    });

    return User;
}