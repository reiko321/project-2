var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  // Render Other Pages
  // the actual "db" content ntb edited/updated
  app.get("/results", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("results", {
        msg: "Results!",
        examples: dbExamples
      });
    });
  });
  app.get("/history", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("history", {
        msg: "Results!",
        examples: dbExamples
      });
    });
  });
  app.get("/about", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("about", {
        msg: "Results!",
        examples: dbExamples
      });
    });
  });
  app.get("/other-resources", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("other-resources", {
        msg: "Results!",
        examples: dbExamples
      });
    });
  });
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
