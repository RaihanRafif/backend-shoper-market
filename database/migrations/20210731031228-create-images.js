"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Images", {
      id: {
        type: Sequelize.UUID,
        default: Sequelize.UUIDV4,
        primaryKey: true,
      },
      image_url: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("Images");
  },
};
