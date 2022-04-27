module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Granny_users', [{
      name: 'Rozachka',
      email: 'rozaOchka@mail.ru',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Lida',
      email: 'lidOchka@mail.ru',
      password: '456',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Granny_users', null, {});
  },
};
