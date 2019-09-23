module.exports = (sequelize, DataTypes) => {
  const Techtalk = sequelize.define(
    'Techtalk',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      authorName: {
        type: DataTypes.STRING,
      },
      coverImageUri: {
        type: DataTypes.STRING,
      },
      resourceUri: {
        type: DataTypes.STRING,
      },
      organization: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    { tableName: 'Techtalks' }
  )
  Techtalk.associate = models => {
    Techtalk.belongsTo(models.User, {
      as: 'author',
      foreignKey: {
        name: 'authorId',
        allowNull: true,
      },
    })
  }

  return Techtalk
}
