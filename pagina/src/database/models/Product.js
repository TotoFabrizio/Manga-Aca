module.exports = (sequelize, DataTypes)=>{
    const Products = sequelize.define("Product",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        title:{type: DataTypes.STRING},
        description:{type: DataTypes.TEXT},
        volume:{type: DataTypes.INTEGER},
        price:{type: DataTypes.INTEGER},
        img:{type: DataTypes.STRING},
        visible:{type: DataTypes.BOOLEAN,default: 0}
    });

    Products.associate = (models) =>{
        Products.hasMany(models.prodGenre,{as:"prod_prodGenre", foreignKey:"prod_id"});
    }
    return Products;
}