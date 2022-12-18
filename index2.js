const { fetchMyIP, fetchCoordsByIP } = require("./iss_promised");

/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */
fetchMyIP()
  .then(fetchCoordsByIP)
  .then(body => { console.log(body); })
