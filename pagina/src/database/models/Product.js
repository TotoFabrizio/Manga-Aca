module.exports = (sequelize, DataTypes)=>{
    const Products = sequelize.define("Product",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        title:{type: DataTypes.STRING},
        description:{type: DataTypes.TEXT},
        price:{type: DataTypes.INTEGER},
    },
    {
        tableName: "product",
        timestamps: false
    });

    Products.associate = (models) =>{
        Products.hasMany(models.ProdGenre,{as:"prod_prodGenre", foreignKey:"prod_id"});
        Products.hasMany(models.Volume,{as:"volProd", foreignKey:"prod_id"});
    };
    return Products;
}