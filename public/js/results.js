$(document).ready(function() {
  console.log("Results page connected!");

  $(window).on("load", function() {
    var movieArray = [
      {
        movieTitle: "Aliens",
        desiredState: "entertained",
        contentType: "movie"
      },
      {
        movieTitle: "The Matrix",
        desiredState: "entertained",
        contentType: "movie"
      },
      {
        movieTitle: "Mad Max: Fury Road",
        desiredState: "entertained",
        contentType: "movie"
      },
      {
        movieTitle: "Terminator 2: Judgement Day",
        desiredState: "entertained",
        contentType: "movie"
      },
      {
        movieTitle: "The Raid: Redemption",
        desiredState: "entertained",
        contentType: "movie"
      },
      {
        movieTitle: "Little Miss SunShine",
        desiredState: "cheered",
        contentType: "movie"
      },
      {
        movieTitle: "Love Actually",
        desiredState: "cheered",
        contentType: "movie"
      },
      {
        movieTitle: "Clueless",
        desiredState: "cheered",
        contentType: "movie"
      },
      {
        movieTitle: "Forrest Gump",
        desiredState: "cheered",
        contentType: "movie"
      },
      {
        movieTitle: "Toy Story",
        desiredState: "cheered",
        contentType: "movie"
      },
      {
        movieTitle: "Rudy",
        desiredState: "inspired",
        contentType: "movie"
      },
      {
        movieTitle: "Rocky",
        desiredState: "inspired",
        contentType: "movie"
      },
      {
        movieTitle: "Remember the Titans",
        desiredState: "inspired",
        contentType: "movie"
      },
      {
        movieTitle: "The Shawshank Redemption",
        desiredState: "inspired",
        contentType: "movie"
      },
      {
        movieTitle: "The Blind Side",
        desiredState: "inspired",
        contentType: "movie"
      }
    ];

    var desiredResultsArray = ["entertained", "inspired", "cheered"];
    var decider = Math.floor(Math.random() * 2);
    var randomDesiredState = desiredResultsArray[decider];
    console.log(randomDesiredState);

    for (let i = 0; i < movieArray.length; i++) {
      if (randomDesiredState === movieArray[i].desiredState) {
        let title = movieArray[i].movieTitle;
        var firstPart = "http://www.omdbapi.com/?t=";
        var secondPart = "&y=&plot=short&apikey=cd5d920a";
        var combine = firstPart + title + secondPart;

        $.ajax({
          url: combine,
          method: "GET"
        }).then(function(responseOMDB) {
          console.log(responseOMDB);

          //   let movieDisplay = $('<div class="swiper" style="background-position: center; background-size: cover; width: 600px; height: 800px;background-image:url(' + responseOMDB.Poster + ')"></div>');
          let movieDisplay = $(
            '<div class="card mx-auto my-2" style="width: 18rem;"><img class="card-img-top" src="' +
              responseOMDB.Poster +
              '" alt="Movie Poster Img"><div class="card-body"><h5 class="card-title text-dark">' +
              responseOMDB.Title +
              "</h5></div></div>"
          );

          $("#results-two-div").append(movieDisplay);
          // $(".swipers-wrapper").append(movieDisplay);
        });
      }
    }

    $.ajax({
      url: "http://api.icndb.com/jokes/random",
      method: "GET"
    }).then(function(responseNorris) {
        // console.log(responseNorris.value.joke);
        let norrisJoke = responseNorris.value.joke;
        let displayNorris = $('<div class="border bg-light text-dark text-center mt-2"><p><h3>' + norrisJoke + '</h3></p><div>');
        $("#results-three-div").append(displayNorris);
    });
  });
});
