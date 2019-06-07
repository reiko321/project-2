var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });
  // app.get("/", function(req, res, next) {
  //   res.render("index", { layout: false });
  // });

  // Render Other Pages
  // the actual "db" content ntb edited/updated
  app.get("/results", function(req, res) {
    res.render("results");
  });
  app.get("/history", function(req, res) {
    res.render("history");
  });
  app.get("/about", function(req, res) {
    res.render("about");
  });
  app.get("/other-resources", function(req, res) {
    res.render("other-resources");
  });
  app.get("/signin", function(req, res) {
    res.render("signin");
  });
  app.get("/signup", function(req, res) {
    res.render("results");
  });

  app.get("*", function(req, res) {
    res.render("index");
  });
};
