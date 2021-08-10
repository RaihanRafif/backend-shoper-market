"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      productId: DataTypes.STRING,
      product_price: DataTypes.INTEGER,
      product_discount: DataTypes.INTEGER,
      product_qty: DataTypes.INTEGER,
      userId: DataTypes.STRING,
      transactionId: DataTypes.STRING,
    },
    {}
  );
  order.associate = function (models) {
    // associations can be defined here
    order.belongsTo(models.user), 
    order.belongsTo(models.product);
    order.belongsTo(models.transaction);
  };
  return order;
};
