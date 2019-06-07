module.exports = function (sequelize, DataTypes) {
  const History = sequelize.define("history",
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
      current_state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        },
        desired_state: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1, 160]
          }
        },
        selected_results: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1, 160]
          }
        },
        successful: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true
        },

      },
  {
      freezeTableName: true,
      underscored: true
    });

  return History;
};

