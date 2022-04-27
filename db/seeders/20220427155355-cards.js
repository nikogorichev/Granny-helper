'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      id_granny: 1,
      link: 'https://yablyk.com/wp-content/uploads/2018/04/shoten-links.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_granny: 2,
      link: 'https://yablyk.com/wp-content/uploads/2018/04/shoten-links.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  }
};
