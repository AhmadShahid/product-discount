'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Admin',
          email: 'admin@gmail.com',
          gender: 'male',
          password: bcrypt.hashSync('admin', bcrypt.genSaltSync(8)),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Test',
          email: 'test@gmail.com',
          gender: 'female',
          password: bcrypt.hashSync('test', bcrypt.genSaltSync(8)),
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
