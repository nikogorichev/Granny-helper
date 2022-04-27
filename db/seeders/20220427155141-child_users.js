'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Child_users', [{
      name: 'Lexa',
      email: 'lexa@lexa.ru',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Igorbek',
      email: 'Igor@back.kz',
      password: '456',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Child_users', null, {});
  }
};
