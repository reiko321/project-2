// var $currentStateBtn = $();
$(document).ready(function() {
  $("#desired-state-div").hide();

  let desiredStateArray = [
    {
      desiredState: "Entertained",
      origState: "happy",
      desired: false
    },
    {
      desiredState: "Grounded",
      origState: "happy",
      desired: false
    },
    {
      desiredState: "Inspired",
      origState: "bored",
      desired: false
    },
    {
      desiredState: "Amused",
      origState: "bored",
      desired: false
    },
    {
      desiredState: "Cheery",
      origState: "sad",
      desired: false
    },
    {
      desiredState: "Motivated",
      origState: "sad",
      desired: false
    }
  ];

  $(".swiper-slide").on("click", function() {
    $("#intro-sentence").hide();
    $("#desired-state-div").show();
    $("#back-btn").show();
    $("#current-state-div").hide();
    let currentState = $(this).attr("data-state");

    for (let i = 0; i < desiredStateArray.length; i++) {
      if (currentState === desiredStateArray[i].origState) {
        let changedState;
        let str = desiredStateArray[i].desiredState;
        changedState = str.toLowerCase();
        let stateDiv = $("<div>");
        let showDesiredState = $(
          '<button id="' +
            changedState +
            '" class="btn btn-info btn-block my-3" data-toggle="modal" data-target="#exampleModal" data-shown="div-show" data-state="' +
            changedState +
            '"><h3>' +
            "I want to feel... " +
            desiredStateArray[i].desiredState +
            "!" +
            "</h3></button>"
        );
        stateDiv.append(showDesiredState);
        $("#desired-state-div").append(stateDiv);
        $("#modal-span").text(desiredStateArray[i].desiredState);
        $("#confirm").attr("data-current-push", currentState);
        $("#confirm").attr("data-desired-push", changedState);
      }
    }
  });

  $("#myModal").on("shown.bs.modal", function() {
    $("#myInput").trigger("focus");
  });

  $("#confirm").on("click", function() {
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
