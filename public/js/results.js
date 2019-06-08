
$(document).ready(function () {
    console.log("Results page connected!");

    /* let movieQuery = {
         movie: removeAllListeners,
         desiredState: entertained
     }; */

    $(window).on("load", function () {
        var titleArray = ["Little Miss Sunshine", "Forrest Gump", "Love Actually", "Depspicable Me", "The Sound of Music", "It's a Wonderful Life", "9 to 5: Inside Out"];
        var decider = Math.floor(Math.random() * 6);
        var title = titleArray[decider];
        var firstPart = "http://www.omdbapi.com/?t=";
        var secondPart = "&y=&plot=short&apikey=cd5d920a";
        var combine = firstPart + title + secondPart;

        $.ajax({
            url: combine,
            method: "GET"

        }).then(function (responseOMDB) {

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


   /* $(window).on("load", function () {

        function getMeBookDetails(LCCN) {
            var baseURL = "https://openlibrary.org/api/books?bibkeys=isbn:";
            var LCCN = LCCN;
            var combine = baseURL + LCCN + "&jscmd=details&format=json";
            console.log(combine);

            $.ajax({
                url: combine,
                method: "GET"

            }).then(function (response) {
                // handle success
                console.log(response.data);

                var data = response.data;

                for (var key in data) {
                    var value = data[key];

                    console.log(
                        "Here is a good book for your mood: " + value.details.title
                    );

                    console.log(
                        "Here is the url where you can find info about the book and how to download it: " +
                        value.preview_url
                    );
                }
            })

        }

        function getMeABook() {
            const tagArray = ["historical", "motivational", "inspiring", "cheerful"];

            var baseUrl = "http://openlibrary.org/search.json?subject=";
            var decider = Math.floor(Math.random() * 3);
            var tag = tagArray[decider];

            var combine = baseUrl + tag;

            $.ajax({
                url: combine,
                method: "GET"

            }).then(function (response) {
                // handle success
               // console.log(response);
               var obj = JSON.parse(response);
               console.log(obj);
               
             console.log(response.start.docs);
              //  var LCCN = response.data.docs[decider].isbn[decider];

                //  console.log(response.data.docs[0].title_sugest);
                //var LCCN = response.docs[0].isbn[0];
                //.title_suggest
                // getMeBookDetails(LCCN);
            })

        }

        getMeABook();




    });
    
    

});
