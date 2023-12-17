'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employees', [{
      id: 1,
      email: 'xiongxeng@gmail.com',
      address: 'Minneapolis, MN, USA',
      salary: 50000,
      position: "Engineer",
      status: true,
      managerId: 1,
      hireDate: "2022-1-1",
      terminateDate: "2025-1-1",
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: 2,
      email: 'glanderriley@gmail.com',
      address: 'Saint Paul, MN, USA',
      salary: 70000,
      position: "Production",
      status: false,
      managerId: 3,
      hireDate: "2021-6-6",
      terminateDate: "2031-6-5",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      email: 'heukon@gmail.com',
      address: 'Saint Paul, MN, USA',
      salary: 70000,
      position: "Admin",
      status: false,
      managerId: 2,
      hireDate: "2021-6-6",
      terminateDate: "2031-6-5",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      email: 'sumpteralexander@gmail.com',
      address: 'Saint Paul, MN, USA',
      salary: 70000,
      position: "Design",
      status: false,
      managerId: 4,
      hireDate: "2021-6-6",
      terminateDate: "2031-6-5",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      email: 'newsomepeter@gmail.com',
      address: 'Minneapolis, MN, USA',
      salary: 70000,
      position: "Accounting",
      status: false,
      managerId: 4,
      hireDate: "2021-6-6",
      terminateDate: "2031-6-5",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
  ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('employees', null, {});
  }
};
