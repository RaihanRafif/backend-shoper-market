"use strict";
module.exports = (sequelize, DataTypes) => {
  const color = sequelize.define(
    "color",
    {
      color: DataTypes.STRING,
      productId: DataTypes.INTEGER,
    },
    {}
  );
  color.associate = function (models) {
    // associations can be defined here
    color.belongsTo(models.product);
  };
  return color;
};
