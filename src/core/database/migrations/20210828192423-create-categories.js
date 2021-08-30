'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Categories', {
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

      description: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      discountId: {
        type: Sequelize.INTEGER,
        references: { model: 'Discounts', key: 'id' },
      },
      parentId: {
        type: Sequelize.INTEGER,
        references: { model: 'Categories', key: 'id' },
      },
      createdAt: {
        type: Sequelize.DATE,
      },

      updatedAt: {
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Categories');
  },
};
