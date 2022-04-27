'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Relations', [{
      id_child: 1,
      id_granny: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_child: 2,
      id_granny: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Relations', null, {});
  },
};
