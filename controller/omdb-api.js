// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
let axios = require("axios");

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=cd5d920a").then(
  function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Genre: " + response.data.Genre);
    console.log("Movie Poster URL: " + response.data.Poster);
  }
);