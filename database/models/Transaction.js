module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define(
    "transaction",
    {
      status: DataTypes.STRING,
      userId: DataTypes.STRING,
      total_payment: DataTypes.INTEGER,
    },
    {}
  );
  transaction.associate = function (models) {
    transaction.hasMany(models.order), transaction.belongsTo(models.user);
  };
  return transaction;
};
