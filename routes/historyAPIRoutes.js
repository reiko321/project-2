var db = require("../models");

module.exports = function(app) {
  //Create new history table entry
  app.post("/api/history", function(req, res) {
    db.History.create(req.body).then(function(dbHistory) {
      res.json(dbHistory);
    });
  });
};
