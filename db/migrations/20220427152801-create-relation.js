module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Relations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_child: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Child_users',
          key: 'id',
        },
      },
      id_granny: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Granny_users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Relations');
  },
};
