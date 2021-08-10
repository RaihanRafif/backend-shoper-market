const uuid = require("uuid");
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = "admin";
    return queryInterface.bulkInsert("users", [
      {
        id: uuid.v4(),
        username: "admin",
        password: bcrypt.hashSync(password, 12),
        email: "admin@gmail.com",
        role: "admin",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null);
  },
};
