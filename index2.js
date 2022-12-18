const { fetchMyIP } = require("./iss_promised");

/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */
fetchMyIP()
  .then(body => { console.log(body) });