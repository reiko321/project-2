module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("User", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    googleID: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    displayName: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    last_login: {
      type: Sequelize.DATE
    },

    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });
  User.associate = function(models) {
    User.hasMany(models.History);
  };
  return User;
};
