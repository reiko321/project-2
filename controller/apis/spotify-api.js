var Spotify = require("node-spotify-api");

var spotify = new Spotify({
  id: "cdeb18114adf4c16950cb4dfb8e714c8",
  secret: "c63db428d5f74e15ad12a61d6b58bf4b"
});

module.exports = {

  getMeASong: function getMeASong() {
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
       
        console.log(data.playlists.items[0].external_urls.spotify);
        
        var song = data.playlists.items[0].external_urls.spotify;

        console.log(song);
        
        var firstPart = song.slice(0, 24);
        var secondPart = song.slice(34, 56)
        var combine = firstPart + "/embed/playlist/" + secondPart;
        //console.log(combine);
        
        function sendHbs(combine) {
          var hbsObject = {
            combine: combine
          };
         // console.log(hbsObject);
          res.render("results", hbsObject);
          return
        }
        sendHbs(combine);

    
        


      }
    )
  }




}




