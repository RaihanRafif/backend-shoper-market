

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.order), 
    user.hasMany(models.transaction);
  };
  return user;
};
