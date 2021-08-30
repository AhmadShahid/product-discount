'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Products',
      [
        {
          id: 1,
          name: 'Green AC',
          code: '1001',
          description: 'Energy Efficient ac',
          categoryId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Malik Bat',
          code: '1002',
          description: 'Malik Factory',
          categoryId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'S3',
          code: '1003',
          description: 'S3',
          categoryId: 6,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          code: '1004',
          name: 'Dell Inspiron',
          description: 'Dell Inspiron',
          discountId: 1,
          categoryId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {
      truncate: true,
      cascade: true,
    });
  },
};
