require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require('passport');
var cookieSession = require("cookie-session");
var bodyParser = require('body-parser');
const passportSetup = require("./config/passport/passport.js");
const keys = require("./config/key");
var db = require("./models");
var app = express();
var PORT = process.env.PORT || 3000;

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]

}));
//Routes
var authRoute = require('./routes/authRoutes.js');

//set auth route
app.use("/auth", authRoute);




//load passport strategies
require('./config/passport/passport.js')(passport, db.user);


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
//require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});




module.exports = app;
