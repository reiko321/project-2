const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../key")
const Sequelize = require("sequelize");
const db = require("../../models/index.js");




module.exports = function (passport, user) {
  var User = user;

  passport.serializeUser((user, done) => {

    done(null, user.id);

  });

  passport.deserializeUser((id, done) => {
    User.findByPk(id).then((user) => {

      done(null, user);
    });
  });




  passport.use(

    new GoogleStrategy({

      //options for google strategy
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret

    }, (accessToken, refreshToken, profile, done) => {

      //passport callback
      console.log("passport callback function fired");

      User
        .findOne({
          where:
          {
            googleID: profile.id
          },

        })
        .then(currentUser => {
          if (currentUser) {
            done(null, currentUser)
            console.log("current user is: " + currentUser);

          }
          else {

            User.create({
              googleID: profile.id,
              displayName: profile.displayName
            })
              .then((newUser) => {
                console.log("new user created: " + newUser);
                done(null, newUser);

              })
          }


        })



    })
  );

}

