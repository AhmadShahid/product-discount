'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Discounts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },

      discountValue: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true,
      },

      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
      },

      createdAt: {
        type: Sequelize.DATE,
      },

      updatedAt: {
        type: Sequelize.DATE,
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Discounts');
  },
};
