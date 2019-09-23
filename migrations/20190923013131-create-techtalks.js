module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Techtalks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      authorName: {
        type: Sequelize.STRING,
      },
      coverImageUri: {
        type: Sequelize.STRING,
      },
      resourceUri: {
        type: Sequelize.STRING,
      },
      organization: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: queryInterface => {
    return queryInterface.dropTable('Techtalks')
  },
}
