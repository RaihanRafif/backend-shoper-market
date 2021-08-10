module.exports = (sequelize, DataTypes) => {
  const size = sequelize.define(
    "size",
    {
      size: DataTypes.STRING,
      productId: DataTypes.STRING,
    },
    {}
  );
  size.associate = function (models) {
    size.belongsTo(models.product);
  };
  return size;
};
