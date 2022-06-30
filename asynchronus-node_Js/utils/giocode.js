const request = require("request");

const geocode = (address, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=c388c454ce5b4fe3a9c104123220606&q=${address}`;

    request({ url, json: true }, (error, response) => {
        if (error)
            callback("unable to get location", undefined);
        else
            callback(undefined, {lat: response.body.location.lat, long: response.body.location.lon });
    });
}

module.exports=geocode;