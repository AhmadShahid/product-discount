'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Discounts',
      [
        {
          id: 1,
          name: 'Black Friday Sale',
          discountValue: 8,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Winter Sale',
          userId: 1 ,
          discountValue: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Discounts', null, {
      truncate: true,
      cascade: true,
    });
  },
};
