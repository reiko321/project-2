const router = require("express").Router();
const passport = require("passport");
var authController = require('../controller/authcontroller.js');

router.get("/signin", (req, res) => {
    res.render("signin");
})


//logout

router.get("/logout", (req, res) => {

    //handle with passport
    res.send("logging out");
});
//auth with google
router.get("/google", passport.authenticate("google", {
    scope: ["profile"]
}));

//callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    
    res.send(req.user);
})

module.exports = router;