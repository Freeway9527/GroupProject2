'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('managers', [{
      id: 1,
      firstName: 'Big',
      lastName: 'Daddy',
      department: 'Information Technology',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      firstName: 'Master',
      lastName: 'Chief',
      department: 'Human Resource',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      firstName: 'Solid',
      lastName: 'Snake',
      department: 'Operations',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      firstName: 'Samanosuke',
      lastName: 'Akechi',
      department: 'Marketing',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      firstName: 'Lora',
      lastName: 'Croft',
      department: 'Finance',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('managers', null, {});
  }
};
