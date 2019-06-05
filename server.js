require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
//var db = require("./models");
var app = express();
var PORT = process.env.PORT || 3000;

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//Models
var models = require("./models");

//Routes
var authRoute = require('./routes/authRoutes.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
// Added this static route to use the Slider library-->
app.use("/scripts", express.static(__dirname + "./node_modules/swiper/dist/"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

//Sync Database
models.sequelize.sync().then(function () {
  console.log('Nice! Database looks fine')

}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")
});

app.listen(5000, function (err) {
  if (!err)
    console.log("Site is live"); else console.log(err)

});

module.exports = app;
