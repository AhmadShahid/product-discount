'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('Categories', ['parentId']);
    await queryInterface.addIndex('Categories', ['discountId']);
    await queryInterface.addIndex('Products', ['discountId']);
    await queryInterface.addIndex('Products', ['categoryId']);
    return queryInterface;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('Categories', ['parentId']);
    await queryInterface.removeIndex('Categories', ['discountId']);
    await queryInterface.removeIndex('Products', ['discountId']);
    await queryInterface.removeIndex('Products', ['categoryId']);
    return queryInterface;
  }
};
