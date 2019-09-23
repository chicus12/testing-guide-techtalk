module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('Techtalks', 'date', {
      type: Sequelize.DATE,
    }),

  down: queryInterface => queryInterface.removeColumn('Techtalks', 'date'),
}
