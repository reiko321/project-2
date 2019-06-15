const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../key");
const db = require("../../models");

passport.serializeUser((User, done) => {

  done(null, User.id);

});

passport.deserializeUser((id, done) => {
  db.user.findByPk(id).then((User) => {

    done(null, User);
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

    db.User
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

          db.User.create({
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

