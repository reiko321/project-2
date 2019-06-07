const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../key");
const db = require("../../models");

passport.serializeUser((user, done) => {

  done(null, user.id);

});

passport.deserializeUser((id, done) => {
  db.user.findByPk(id).then((user) => {

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

    db.user
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

          db.user.create({
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

