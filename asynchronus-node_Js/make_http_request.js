const https = require("https");

const url = "https://api.weatherapi.com/v1/current.json?key=c388c454ce5b4fe3a9c104123220606&q=sangola";

const request = https.request(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
        data = data + chunk.toString();
    });

    response.on("end", () => {
        console.log(JSON.parse(data));
    });
})

request.on("error", (error) => {
    console.log("error occured")
})

request.end();