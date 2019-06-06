var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });
  // app.get("/", function(req, res, next) {
  //   res.render("index", { layout: false });
  // });

  // Render Other Pages
  // the actual "db" content ntb edited/updated
  app.get("/results", function(req, res) {
    res.render(path.join(__dirname, "../views/results.handlebars"));
  });
  app.get("/history", function(req, res) {
    res.render(path.join(__dirname, "../views/history.handlebars"));
  });
  app.get("/about", function(req, res) {
    res.render(path.join(__dirname, "../views/about.handlebars"));
  });
  app.get("/other-resources", function(req, res) {
    res.render(path.join(__dirname, "../views/other-resources.handlebars"));
  });
  app.get("/signin", function(req, res) {
    res.render(path.join(__dirname, "../views/signin.handlebars"));
  });
  app.get("/signup", function(req, res) {
    res.render(path.join(__dirname, "../views/results.handlebars"));
  });

  app.get("*", function(req, res) {
    res.render("../views/index.handlebars");
  });
};
