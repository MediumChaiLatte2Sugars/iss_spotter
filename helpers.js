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

module.exports = { printPassTimes };