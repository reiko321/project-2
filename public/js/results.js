$(document).ready(function() {
  console.log("Results page connected!");

    let movieQuery = {
        movie: removeAllListeners,
        desiredState: entertained
    };

  $("#results-display").on("click", function(){
      $.ajax("/api/movies", function(){
      type: "POST",
      data: movieQuery
          }).then(
            function(response){
          console.log("GAME OVER, MAN!");
      }
      )
  })

  $("#results-display").on("click", function() {
      let resultOne = $(this).attr("data-desired-push");
  
      var queryURL =
        "https://api.giphy.com/v1/gifs/search?q=" +
        resultOne +
        "&api_key=ACXLyhgAnWu2x7cLRHvyYUobXHDiTbSP&limit=5";
      console.log("Result One: " + resultOne);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(queryURL);
  
        console.log(response);
        var results = response.data;
  
        for (var i = 0; i < results.length; i++) {
          let resultDiv = $(
            '<div class="card mb-1 text-dark" style="max-width: 202px;"><img class="card-img-top" alt="Mind(Re)Set Result" src="' +
              results[i].images.fixed_height.url +
              '"> <div class="card-body"> <h3 class="card-title">' +
              results[i].rating +
              '</h3> <p class="card-text">' +
              results[i].rating +
              "</p> </div> </div>"
          );
          $("#results-one-div").append(resultDiv);
        }
      });
    });
});
