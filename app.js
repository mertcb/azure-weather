const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { response } = require("express");

const app = express();
var server;

const apiKey = "8116be7751adafe0c1f2d31a48becc05"; // revoked, change your API KEY

app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index", { weather: null, error: null })
    //res.send("Hello,world");
})

app.post("/", (req, res) => {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=tr`

    request(url, (err, body, response) => {
        if (err) {
            res.render('index', { weather: null, error: "Bir hata oluştu" })
        } else {
            let weather = JSON.parse(response);
            console.log(weather);
            if (weather.main == undefined) {
                res.render('index', { weather: null, error: "Bir hata oluştu, şehir bulunamadı" })
            } else {
                res.render('index', { weather: weather, error: null })
            }
        }
    })
})

app.set("port", process.env.PORT || 3000)

exports.listen = () => {
    server = app.listen(app.get("port"), () => {
        console.log("Weather application listens on port " + app.get("port"))
    })
}

this.listen();
