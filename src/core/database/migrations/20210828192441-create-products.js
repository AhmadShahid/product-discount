'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
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

      code: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      discountId: {
        type: Sequelize.INTEGER,
        references: { model: 'Discounts', key: 'id' },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: { model: 'Categories', key: 'id' },
        onUpdate: 'cascade',
        onDelete: 'cascade',
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
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  },
};
