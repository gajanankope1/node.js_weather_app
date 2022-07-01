const request = require("request");

const forcast = (coordinates, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=c388c454ce5b4fe3a9c104123220606&q=${coordinates.lat},${coordinates.long}`;

    request({ url, json: true }, (error, response) => {
        if (error)
            callback("unable to get location", undefined);
        else
            callback(undefined, {location: response.body.location.name,condition:response.body.current.condition.text});
    });
}

module.exports = forcast;