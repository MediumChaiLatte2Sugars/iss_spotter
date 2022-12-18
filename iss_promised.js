const request = require('request-promise-native');

const fetchMyIP = function() {
  
  // use request to fetch IP address from JSON API
   return request("https://api.ipify.org?format=json");

};

module.exports = { fetchMyIP };