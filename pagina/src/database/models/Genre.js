module.exports = (sequelize, DataTypes)=>{
    const Genre = sequelize.define("Genre",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        genre:{type: DataTypes.STRING}
    },
    {
        tableName: "genre",
        timestamps: false
    });

    Genre.associate = (models) =>{
        Genre.hasMany(models.ProdGenre,{as:"genre_prodGenre", foreignKey:"genre_id"});
    };
    return Genre;
}