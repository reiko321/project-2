let axios = require("axios");


axios.get("http://api.icndb.com/jokes/random").then(
  function(response) {
    console.log(response.data.value.joke);
  }
);