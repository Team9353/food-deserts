const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

const key = process.env.BACKEND_API;

let PlaceDetails = function () {
    this.places = [];
};

let FinalResults = function () {
    this.results = [];
}

let TempResults = function () {
    this.results = [];
}


router.get("/query", async function (req, res, next) {
    let lat = req.query.lat;
    let long = req.query.long;

    //calculated later
    let time_limit = 35 * 60;

    //calculated later
    let radius = 50000;

    //passed in from front end
    let mode = "bicycling";

    let answer;
    let results;
    let PD = new PlaceDetails();
    let FR = new FinalResults();
    let TR = new TempResults();

    let host = "https://maps.googleapis.com";
    let path = `/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=grocery_or_supermarket&key=${key}`;
    const total = host + path;
    try {
        answer = await axios({
            url: total,
            method: "get"
        });
        results = answer.data.results;
    } catch (error) {
        console.error(error);
    }

    PD.places.push(["name", "location", "place_id", "vicinity"]);
    for (let i = 0; i < results.length; i++) {
        let temp = results[i];
        PD.places.push([temp.name, temp.geometry.location, temp.place_id, temp.vicinity]);
        TR.results.push([temp.name, temp.geometry.location]);
    }

    for (let i = 0; i < TR.results.length; i++) {
        let answer2;
        let origins=`${lat},${long}`;
        let lat2 = TR.results[i][1]["lat"];
        let long2 = TR.results[i][1]["lng"];
        let url2 = "https://maps.googleapis.com/maps/api/distancematrix/json?"
            + `origins=${origins}`
            + `&destinations=${lat2},${long2}`
            + `&mode=${mode}`
            + `&key=${key}`;

        let results2;
        try {
            answer2 = await axios({
                url: url2,
                method: "get"
            });
            results2 = answer2.data
        } catch (error) {
            console.error(error);
        }

        let travel_time = results2['rows'][0]['elements'][0]['duration']['value'];

        if(travel_time <= time_limit) {
            FR.results.push([TR.results[i][0], TR.results[i][1], travel_time]);
        }
    }

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(FR.results));
});

module.exports = router;
