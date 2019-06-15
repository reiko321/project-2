let currentState;
let desiredState;
$(document).ready(function() {
  $("#desired-state-div").hide();
  // Array stores all of the current state options
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

  // Slider/Swiper On-Click triggers the User Choice-Specific Options
  $(".swiper-slide").on("click", function() {
    // Hides/Shows Appropriate Divs/Content
    $("#intro-sentence").hide();
    $("#desired-state-div").show();
    $("#back-btn").show();
    $("#current-state-div").hide();

    // Obtains the User's Choice for "How Are You Feeling Now?" AKA: the Current State
    let currentState = $(this).attr("data-state");

    // For-Loop to List Out the Context-Specific "How Would You Like to Feel" choices, AKA: the Desired State
    for (let i = 0; i < desiredStateArray.length; i++) {
      // Checks to see if the User Choice matches with one (or more) Keys in the Desired State Array
      if (currentState === desiredStateArray[i].origState) {
        // Makes the Desired State lowercase for "data-class" purposes
        let str = desiredStateArray[i].desiredState;
        let changedState = str.toLowerCase();
        console.log("CS: " + changedState);

        // Create the "Desired State" buttons
        let stateDiv = $("<div>");
        let showDesiredState = $(
          '<button data-state="desired" data-desired-state="' +
            changedState +
            '" class="btn btn-info btn-block my-3" data-toggle="modal" data-target="#exampleModal" data-shown="div-show" data-orig-state="' +
            currentState +
            '"><h2>' +
            "I want to feel... " +
            desiredStateArray[i].desiredState +
            "!" +
            "</h2></button>"
        );
        stateDiv.append(showDesiredState);

        // Pushes results to the HTML
        $("#desired-state-div").append(stateDiv);
      }
    }
    // Triggers the Modal and Pushes Relevant Data Classes for Database Capture
    $('button[data-state="desired"]').on("click", function() {
      event.preventDefault();
      var updateCurrent = $(this).attr("data-orig-state");
      var updateDesired = $(this).attr("data-desired-state");
      console.log("blah: " + updateCurrent + " " + updateDesired);
      $("#modal-span").text($(this).attr("data-desired-state"));
      $("#confirm-state").attr("data-current-push",
        updateCurrent);
      $("#confirm-state").attr("data-desired-push",
        updateDesired);
    });
  });

  $("#myModal").on("shown.bs.modal", function() {
    $("#myInput").trigger("focus");
  });

  var glow = $("#feeling-now");
  setInterval(function() {
    glow.toggleClass("glow");
  }, 1000);

  // var API = {
  //   uploadStates: function(newStats)
  // }

  $("#confirm-state").on("click", function() {
    event.preventDefault();

    currentState = $("#confirm-state").attr("data-current-push");
    desiredState = $("#confirm-state").attr("data-desired-push");
    let newStates = {
      currentState: currentState,
      desiredState: desiredState
    };
    $.ajax({
      url: "/api/states",
      type: "POST",
      data: (newStates)
    });
    console.log(newStates);
  });
});
