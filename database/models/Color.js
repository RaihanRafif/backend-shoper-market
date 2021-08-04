const { Model, DataTypes } = require("sequelize");
const connection = require("../connection");

class Color extends Model {}

Color.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    color: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
  },
  {
    modelName: "Colors",
    sequelize: connection,
    timestamps: true,
    underscored: true,
  }
);

module.exports = Color;
