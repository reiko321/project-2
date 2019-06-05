var Spotify = require("node-spotify-api");

var spotify = new Spotify({
    id: "cdeb18114adf4c16950cb4dfb8e714c8",
    secret: "c63db428d5f74e15ad12a61d6b58bf4b"
});

function getMeASong() {
    spotify.search({
        type: 'playlist',
        query: "depressed",
        limit: 1
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.playlists.items);



    });
}
getMeASong();