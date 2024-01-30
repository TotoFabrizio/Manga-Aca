module.exports = (sequelize, DataTypes)=>{
    const Volume = sequelize.define("Volume",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        volume:{type: DataTypes.INTEGER},
        img:{type: DataTypes.STRING},
        prod_id:{type: DataTypes.INTEGER},
        deleted:{type: DataTypes.BOOLEAN,default: 0}
    },
    {
        tableName: "volumeprod",
        timestamps: false
    });

    Volume.associate = (models) =>{
        Volume.belongsTo(models.Product,{as:"volProd", foreignKey:"prod_id"});
    };
    return Volume;
}