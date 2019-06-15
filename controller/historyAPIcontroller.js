// var db = require("../models");

// module.exports = function(app) {
//   //Post info to History table via the modal confirmation button
//   app.post("/api/states", function(req, res) {
//     db.History.create(req.body).then(function(dbHistory) {
//       res.json(dbHistory);
//     });
//   });

//   //Show user History
//   app.get("/api/history/:user_id", function(req, res) {
//     var query = {};
//     if (req.query.user_id) {
//       query.UserId = req.query.user_id;
//     }
//     db.History.findAll({
//       include: [db.User]
//     }).then(function(dbHistory) {
//       res.json(dbHistory);
//     });
//   });

//   //Delete History Entry
//   app.delete("/api/history/:id", function(req, res) {
//     db.History.destroy({
//       where: { id: req.params.id }
//     }).then(function(dbHistory) {
//       res.json(dbHistory);
//     });
//   });
// };
