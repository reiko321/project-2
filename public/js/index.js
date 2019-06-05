// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

$(document).ready(function () {
    $("#desired-state-div").hide();
  });

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
  ]

  $(".swiper-slide").on("click", function () {
    $("#intro-sentence").hide();
    $("#desired-state-div").show();
    $("#current-state-div").hide();
    let currentState = $(this).attr("data-state");

    for (let i = 0; i < desiredStateArray.length; i++) {

      if (currentState === desiredStateArray[i].origState) {
        let changedState;
        let str = desiredStateArray[i].desiredState;
        changedState = str.toLowerCase();
        let stateDiv = $("<div>");
        let showDesiredState = $('<a href="/results" id="' + changedState + '" class="btn btn-info btn-block my-3" data-state="' + changedState + '"><h3>' + "I want to feel... " + desiredStateArray[i].desiredState + "!" + "</h3></a>");
        stateDiv.append(showDesiredState);
        $("#desired-state-div").append(stateDiv);
      } else {
        console.log("There tweren't any matching states!")
      }
    }
  });


  $(document).ready(function () {
    $("#desired-state-div").hide();
  });

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
  ]

  $(".swiper-slide").on("click", function () {
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
        let showDesiredState = $('<button id="' + changedState
         + '" class="btn btn-info btn-block my-3" data-toggle="modal" data-target="#exampleModal" data-shown="div-show" data-state="' + changedState
          + '"><h3>' + "I want to feel... " + desiredStateArray[i].desiredState
          + "!" + "</h3></button>");
        stateDiv.append(showDesiredState);
        $("#desired-state-div").append(stateDiv);
      } 
    }
  });

  {{!-- $(".blarg").on("click", function(){
    $("#desired-state-div").hide();
    $("#confirmation-div").show();
    $("#confirmation-div").append("So, you're feeling " + currentState + ", and you'd rather feel " + desiredState + "?");
  }); --}}

 $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
  })
