"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Orders", {
      id: {
        type: Sequelize.UUID,
        default: Sequelize.UUIDV4,
        primaryKey: true,
      },
      product_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_discount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      transaction_id: {
        type: Sequelize.UUID,
        references: {
          model: "Transactions",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: "Users",
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
    return queryInterface.dropTable("Orders");
  },
};
