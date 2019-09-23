module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('Techtalks', 'authorId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }),
  down: queryInterface => queryInterface.removeColumn('Techtalks', 'authorId'),
}
