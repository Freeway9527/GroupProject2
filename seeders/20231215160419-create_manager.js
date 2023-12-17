'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Managers', [{
      id: 1,
      firstname: 'Big',
      lastname: 'Daddy',
      department: 'Information Technology',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      firstname: 'Master',
      lastname: 'Chief',
      department: 'Human Resource',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      firstname: 'Solid',
      lastname: 'Snake',
      department: 'Operations',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      firstname: 'Samanosuke',
      lastname: 'Akechi',
      department: 'Marketing',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      firstname: 'Lora',
      lastname: 'Croft',
      department: 'Finance',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Managers', null, {});
  }
};
