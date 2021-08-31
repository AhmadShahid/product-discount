'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          id: 1,
          name: 'Electronic',
          description: 'All Electronic items',
          discountId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Sports',
          description: 'All Sports items',
          discountId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Cricket',
          description: 'All Cricket items',
          parentId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'Mobiles',
          description: 'All Mobile items',
          discountId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: 'SameSung',
          description: 'All SameSung items',
          parentId: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 6,
          name: 'S3 Series',
          description: 'All S3 Series items',
          parentId: 5,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {
      truncate: true,
      cascade: true,
    });
  },
};
