'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
      modelNumber: 'A320',
      capacity: 180,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      modelNumber: 'B737-800',
      capacity: 189,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      modelNumber: 'B777-300ER',
      capacity: 396,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
