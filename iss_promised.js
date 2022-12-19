const request = require('request-promise-native');

/*
 * Makes a request to api.ipify.org to obtain the user's IP address
 * Input:
 * Returns: Promise of request for IP
 */
const fetchMyIP = function() {

  // use request to fetch IP address from JSON API
  return request("https://api.ipify.org?format=json");

};

/*
 * Makes a request to ipwho.is using the provided IP address to get its geographical information (latitude/longitude)
 * Input: JSON string containing the IP address
 * Returns: Promise of request for lat/lon
 */
const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};

/*
 * Makes a request to iss-flyover.herokuapp.com using the provided latitude and longitude to get the next ISS flyover times
 * Input: JSON body containing the latitude and longitude data from ipwho.is
 * Returns: Promise of request for flyover times
 */
const fetchISSFlyOverTimes = function(body) {

  const { latitude, longitude } = JSON.parse(body);
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);

};

/*
 * Chains requests made to several APIs to obtain ISS flyover data for the user's current location
 * Input: None
 * Returns: Promise for fly over data for user's location
 */
const nextISSTimesForMyLocation = function() {

  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const { response } = JSON.parse(body);
      return response;
    });

};


module.exports = { nextISSTimesForMyLocation };