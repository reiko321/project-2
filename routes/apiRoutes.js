// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our History model
var db = require("./models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the history for one ID
  app.get("/api/history/id/:id", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.History
      .findAll({
        where: {
          id: req.params.id
        }
      })
      .then(function (results) {
        // We have access to the History as an argument inside of the callback function
        res.json(results);
      });
  });

  // // GET route for getting all history
  // app.get("/api/history/", function (req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.History
  //     .findAll({})
  //     .then(function (results) {
  //       // We have access to the History as an argument inside of the callback function
  //       res.json(results);
  //     });
  // });

  // POST route for saving states initially
  app.post("/api/confirms", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.History
      .create({
        current_state: req.body.current_state,
        desired_state: req.body.desired_state
      }).then(function (results) {
        // We have access to the new entry as an argument inside of the callback function
        res.json(results);
      });
  });

 // PUT route for updating from history page.
  app.post("/api/history", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.History
    .update(req.body, {
      where: {
        successful: req.body.successful
      }
    })
    .then(function (results) {
      res.json(results);
  });

  // DELETE route for deleting entries. We can get the id of the entry we want to delete from
  // req.params.id
  app.delete("/api/history/:id", function (req, res) {
    db.History
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function (results) {
        // We have access to the new History as an argument inside of the callback function
        res.json(results);
      });
  });

};
