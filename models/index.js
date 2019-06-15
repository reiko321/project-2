"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
//==========
//==========
// For LIVE Deployment (comment out when testing):
// var env = process.env.NODE_ENV;

// For TESTING (comment out when deploying):
var env = process.env.NODE_ENV || "development";
//==========
//==========
var config = require(path.join(__dirname, "..", "config", "config.json"))[env];
//==========
//==========
// For LIVE Deployment (comment out when testing):
// var sequelize = new Sequelize(process.env[config.use_env_variable], config);

// For TESTING (comment out when deploying):
var sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
//==========
//==========
var db = {};

fs.readdirSync(__dirname)
  .filter(function(file) {
    return file.indexOf(".") !== 0 && file !== "index.js";
  })
  .forEach(function(file) {
    console.log(__dirname, file);

    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
