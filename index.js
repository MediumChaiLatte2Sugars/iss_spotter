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

nextISSTimesForMyLocation((error, passTimes) => {
  
  if (error) {
    return console.log("It didn't work!", error);
  }
  
  // success, print out the deets!
  for (let flyover of passTimes){

    // extracting date from flyover data
    let date = new Date(Number(flyover.risetime) * 1000);

    console.log(`Next pass at ${date.toString()} for ${flyover.duration} seconds!`);

  }
  
});