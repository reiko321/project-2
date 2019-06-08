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


function queryMovies(desiredState){
  axios.get("http://www.omdbapi.com/?t=" + desiredState + "&y=&plot=short&apikey=cd5d920a").then(
    function(response) {
      console.log("Title: " + response.data.Title);
      console.log("Genre: " + response.data.Genre);
      console.log("Movie Poster URL: " + response.data.Poster);
      let resultDiv = $('<div class="card mb-1 text-dark" style="max-width: 202px;"><img class="card-img-top" alt="Mind(Re)Set Result" src="'
        + response.data.Poster + '"> <div class="card-body"> <h3 class="card-title">'
        + response.data.Title + '</h3> <p class="card-text">' + response.data.Genre + '</p> </div> </div>');
      $("#results-one-div").append(resultDiv);
    }
  );
  
};

module.exports = queryMovies;