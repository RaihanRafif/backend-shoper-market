"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Colors", {
      id: {
        type: Sequelize.UUID,
        default: Sequelize.UUIDV4,
        primaryKey: true,
      },
      color: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      product_id: {
        type: Sequelize.UUID,
        references: {
          model: "Products",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        default: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        default: new Date(),
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Colors");
  },
};
