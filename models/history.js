module.exports = function(sequelize, DataTypes) {
    var History = sequelize.define("History", {
      currentState: DataTypes.STRING,
      desiredState: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    History.associate = function(models) {
      History.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
        }
      });
    };
  
    return History;
  };