const { DataTypes, Model } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  class TouristActivity extends Model {}
  TouristActivity.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      difficulty: { type: DataTypes.INTEGER, allowNull: false },
      duration: { type: DataTypes.INTEGER, allowNull: false },
      season: { type: DataTypes.ENUM("Summer", "Winter", "Spring", "Autumn"), allowNull: false },
    },
    { sequelize, timestamps: false, modelName: "TouristActivity" }
  );
};
