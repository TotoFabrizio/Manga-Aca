module.exports = (sequelize, DataTypes)=>{
    const ProdGenre = sequelize.define("Product",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        prod_id:{type: DataTypes.INTEGER},
        genre_id:{type: DataTypes.INTEGER},
    });

    ProdGenre.associate = (models) =>{
        ProdGenre.belongsTo(models.Product,{as:"prod_prodGenre", foreignKey:"prod_id"});
        ProdGenre.belongsTo(models.Genre,{as:"genre_prodGenre", foreignKey:"genre_id"});
    }
    return ProdGenre;
}