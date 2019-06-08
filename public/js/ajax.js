/*$("#confirm").on("click", function () {
    $.ajax({
        url: "http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=cd5d920a",
        method: "GET"

    }).then(function (responseOMDB) {

        console.log(responseOMDB);
        //push to html weather

        var title = $("#movieTitle");
        var genre = $("#movieGenre");
        var poster = $("#moviePoster");
       
        title.text(responseOMDB.data.Title);
        genre.text(responseOMDB.data.Genre);
        poster.attr("src", responseOMDB.data.Poster);

       
        






    });

}); */