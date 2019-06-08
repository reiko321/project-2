$(document).ready(function() {
  console.log("Results page connected!");

  $(window).on("load", function() {
    var titleArray = [
      "Little Miss Sunshine",
      "Forrest Gump",
      "Love Actually",
      "Depspicable Me",
      "The Sound of Music",
      "It's a Wonderful Life",
      "9 to 5: Inside Out"
    ];
    var decider = Math.floor(Math.random() * 6);
    var title = titleArray[decider];
    var firstPart = "http://www.omdbapi.com/?t=";
    var secondPart = "&y=&plot=short&apikey=cd5d920a";
    var combine = firstPart + title + secondPart;

    $.ajax({
      url: combine,
      method: "GET"
    }).then(function(responseOMDB) {
      //console.log(responseOMDB);
      var movieTitle = responseOMDB.Title;
      var movieGenre = responseOMDB.Genre;
      var moviePoster = responseOMDB.Poster;

      //push to html

      var title = $("#movieTitle");
      var genre = $("#movieGenre");
      var poster = $("#moviePoster");

      title.text(responseOMDB.Title);
      genre.text(responseOMDB.Genre);
      poster.attr("src", responseOMDB.Poster);
    });
  });
});
