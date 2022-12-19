const { nextISSTimesForMyLocation } = require("./iss_promised");
const { printPassTimes } = require("./helpers");

/*
 * Obtains and displays the next ISS flyover times for the user's current location
 */
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("Something went wrong! ", error.message);
  });
