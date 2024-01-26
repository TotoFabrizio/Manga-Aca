module.exports = (sequelize, DataTypes)=>{
    const Genre = sequelize.define("Product",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        genre:{type: DataTypes.STRING},
    });

    Genre.associate = (models) =>{
        Genre.hasMany(models.prodGenre,{as:"genre_prodGenre", foreignKey:"genre_id"});
    }
    return Genre;
}