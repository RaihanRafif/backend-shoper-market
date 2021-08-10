"use strict";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      product_name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      sex: DataTypes.STRING,
    },
    {}
  );
  product.associate = function (models) {
    // associations can be defined here
    product.hasMany(models.image),
      product.hasMany(models.size),
      product.hasMany(models.color);
  };
  return product;
};
