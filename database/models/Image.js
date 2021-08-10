"use strict";
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define(
    "image",
    {
      image_url: DataTypes.STRING,
      productId: DataTypes.INTEGER,
    },
    {}
  );
  image.associate = function (models) {
    // associations can be defined here
    image.belongsTo(models.product);
  };
  return image;
};
