var path = require("path");

var Spotify = require("node-spotify-api");

var spotify = new Spotify({
  id: "cdeb18114adf4c16950cb4dfb8e714c8",
  secret: "c63db428d5f74e15ad12a61d6b58bf4b"
});

var resultFunctions = {

  getMeASong: function getMeASong(res) {
    spotify.search(
      {
        type: "playlist",
        query: "happy",
        limit: 1
      },
      function (err, data) {
        if (err) {
          return console.log("Error occurred: " + err);
        }
        //console.log(data.playlists.items);
        console.log(data.playlists.items[0].external_urls.spotify);

        var song = data.playlists.items[0].external_urls.spotify;
        var firstPart = song.slice(0, 24);
        var secondPart = song.slice(34, 56)
        var combine = firstPart + "/embed/playlist/" + secondPart;
        console.log(combine);

        function sendHbs(combine) {
          var hbsObject = {
            combine: combine
          };
          console.log(hbsObject);
          res.render("results", hbsObject);
          return
        }
        sendHbs(combine);





      }
    )
  }




}





module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });
  // app.get("/", function(req, res, next) {
  //   res.render("index", { layout: false });
  // });

  // Render Other Pages
  // the actual "db" content ntb edited/updated
  app.get("/results", function (req, res) {
    /* function getMeASong() {
      spotify.search(
        {
          type: "playlist",
          query: "happy",
          limit: 1
        },
        function (err, data) {
          if (err) {
            return console.log("Error occurred: " + err);
          }
          //console.log(data.playlists.items);
          console.log(data.playlists.items[0].external_urls.spotify);

          var song = data.playlists.items[0].external_urls.spotify;
          var firstPart = song.slice(0, 24);
          var secondPart = song.slice(34, 56)
          var combine = firstPart + "/embed/playlist/" + secondPart;
          console.log(combine);

          function sendHbs(combine) {
            var hbsObject = {
              combine: combine
            };
            console.log(hbsObject);
            res.render("results", hbsObject);
            return
          }
          sendHbs(combine);





        }
      )
    } */


    resultFunctions.getMeASong(res);
  });
  app.get("/history", function (req, res) {
    res.render("history");
  });
  app.get("/about", function (req, res) {
    res.render("about");
  });
  app.get("/other-resources", function (req, res) {
    res.render("other-resources");
  });
  app.get("/signin", function (req, res) {
    res.render("signin");
  });
  app.get("/signup", function (req, res) {
    res.render("results");
  });
  app.get("*", function (req, res) {
    res.render("index");
  });
}
