const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org?format=json", (error, response, body) => {
    
    if (error) {
      return callback(error, null);
    }

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null);
    }

    const ip = JSON.parse(body).ip;
    return callback(null, ip);

  });
};

/**
 * Makes a single API request to retrieve the user's location info.
 * Input:
 *   - A string of the user's IP address
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - An object containing the latiude and longitude coordinates of the user (null if error). Example: "{latitude: 43.212321 longitude: -41.412241}"
 */
const fetchCoordsByIP = function(ip, callback) {
  // use request to fetch geo location from JSON API
  request("http://ipwho.is/" + ip, (error, response, body) => {
    
    if (error) {
      return callback(error, null);
    }

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching location. Response: ${body}`;
      return callback(Error(msg), null);
    }

    const data = JSON.parse(body);

    // if error data received
    if (data["success"] === false) {
      const msg = `Houston, we have a problem! Error: Success status was false. Server says: ${data["message"]}`;
      return callback(Error(msg), null);
    }

    return callback(null, { latitude: data.latitude, longitude: data.longitude });

  });
};



module.exports = { fetchMyIP, fetchCoordsByIP };