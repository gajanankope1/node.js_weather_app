const request = require("request");
const geocode = require("./utils/giocode");
const forcast = require("./utils/forcast");

/*  const giocodingurl="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2FqYW5hbmtvcGUiLCJhIjoiY2w0emo2a2JqMzhwZTNpcXpseGQzOTh5eSJ9._KSFR8xm4j47UgIa1GZtjQ";

request({ url: giocodingurl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
}) */

// accepting location through command line
const place=process.argv[2];
console.log(place);

geocode("pune", (error, location_coordinates) => {
    if (error) {
        return console.log("Error:", error);
    }
    forcast(location_coordinates, (error, location) => {
        if (error) {
           return console.log("Error:", error);
        }
        console.log("Data:", location_coordinates);
        console.log("Data:", location);
    });
});