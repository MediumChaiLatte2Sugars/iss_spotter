const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

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

fetchISSFlyOverTimes({latitude: 43.653226, longitude: -79.3831843}, (error, flyoverArray) => {
  if (error) {
    console.log("Error fetch details: ", error);
    return;
  } else {
    console.log(flyoverArray);
  }
});