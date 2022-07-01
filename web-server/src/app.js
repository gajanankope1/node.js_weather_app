const path = require("path");
const express = require("express");
const hbs = require("hbs");
const forcast = require("./utils/forcast");
const geocode = require("./utils/giocode");
const request = require("request");

// // console.log(__dirname);
// console.log(path.join(__dirname,"../public"));

const app = express();

//define path for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handelbars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather App",
        name: "andrew work"
    })
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About App",
        name: "stephen playming"
    })
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help App",
        name: "max stemyer"
    })
});

app.get("/weather", (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "you must provide address"
        });
    }

    geocode(req.query.search, (error, location) => {
        if (error) {
            return res.send({ error })
        }
        forcast(location, (error, address) => {
            if (error) {
                return res.send({ error });
            }
            res.send({
                location,
                address
            });
        })
    });
});

app.get("/products", (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "you must provide search term"
        });
    }
    console.log(req.query);
    res.send({
        products: []
    });
});

app.get("/help/*", (req, res) => {
    res.send("help article not found");
})

app.get("*", (req, res) => {
    res.send("my 404 page");
})

app.listen(2000, () => console.log("server is run on port:2000"));