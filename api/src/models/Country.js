const { DataTypes, Model } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  class Country extends Model {}
  Country.init(
    {
      ID: { type: DataTypes.STRING, primaryKey: true, allowNull: false, unique: true },
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      img: { type: DataTypes.TEXT, allowNull: false },
      continent: { type: DataTypes.STRING, allowNull: false },
      capital: { type: DataTypes.STRING, allowNull: false },
      subregion: { type: DataTypes.STRING, allowNull: true },
      area: { type: DataTypes.FLOAT, allowNull: true },
      population: { type: DataTypes.INTEGER, allowNull: true },
    },
    { sequelize, timestamps: false, modelName: "Country" }
  );
};
