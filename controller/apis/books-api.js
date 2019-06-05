const axios = require("axios");

function getMeBookDetails(LCCN) {
   var baseURL = "https://openlibrary.org/api/books?bibkeys=isbn:";
   var LCCN = LCCN;
   var combine = baseURL + LCCN + "&jscmd=details&format=json";
   console.log(combine);

   axios.get(combine)
       .then(function (response) {
           // handle success
           console.log(response.data);

           var data = response.data;

           for (var key in data) {
               var value = data[key];

               console.log("Here is a good book for your mood: " + value.details.title);

               console.log(("Here is the url where you can find info about the book and how to download it: " + value.preview_url));


           }

       })
       .catch(function (error) {
           // handle error
           console.log(error);
       })
       .finally(function () {


       });

}

function getMeABook() {
   const tagArray = ["historical", "motivational", "inspiring", "cheerful"];

   var baseUrl = "http://openlibrary.org/search.json?subject=";
   var decider = Math.floor(Math.random() * 3);
   var tag = tagArray[decider];

   var combine = baseUrl + tag;

   axios.get(combine)
       .then(function (response) {
           // handle success
           //  console.log(response.data.docs[0]);
           var LCCN = response.data.docs[decider].isbn[decider];
           //.title_suggest
           getMeBookDetails(LCCN);
       })
       .catch(function (error) {
           // handle error
           console.log(error);
       })
       .finally(function () {


       });
}

getMeABook();