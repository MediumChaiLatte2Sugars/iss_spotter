const { nextISSTimesForMyLocation } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("Error fetch details: ", error);
//     return;
//   } else {
//     console.log(ip);
//   }

// });

// fetchCoordsByIP( "42", (error, location) => {
//   if (error) {
//     console.log("Error fetch details: ", error);
//     return;
//   } else {
//     console.log(location);
//   }

// });

// fetchISSFlyOverTimes({latitude: 43.653226, longitude: -79.3831843}, (error, flyoverArray) => {
//   if (error) {
//     console.log("Error fetch details: ", error);
//     return;
//   } else {
//     console.log(flyoverArray);
//   }
// });

/**
 * Input:
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns:
 *   undefined
 * Sideffect:
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
const printPassTimes = (passTimes) => {
  
  for (let flyover of passTimes) {

    // extracting date from flyover data
    let date = new Date(0);
    date.setUTCSeconds(flyover.risetime);
    const duration = flyover.duration;

    console.log(`Next pass at ${date} for ${duration} seconds!`);

  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  
  if (error) {
    return console.log("It didn't work!", error);
  }
  
  // success, print out the deets!
  printPassTimes(passTimes);
  
});