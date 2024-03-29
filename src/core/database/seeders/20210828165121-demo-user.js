'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          name: 'Admin',
          email: 'admin@gmail.com',
          gender: 'male',
          password: bcrypt.hashSync('admin123', bcrypt.genSaltSync(10)),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Customer',
          email: 'customre@gmail.com',
          gender: 'female',
          password: bcrypt.hashSync('customer123', bcrypt.genSaltSync(10)),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {
      truncate: true,
      cascade: true,
    });
  },
};
