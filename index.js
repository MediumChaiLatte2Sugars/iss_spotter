const { fetchMyIP } = require("./iss");

fetchMyIP((error, ip) => {
  if (error) {
    console.log("Error fetch details: ", error);
    return;
  } else {
    console.log(ip);
  }

});