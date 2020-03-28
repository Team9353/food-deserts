const express = require("express");
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv').config;

let key = 'AIzaSyCZdfP3LaN1LCLl06tUUxjGg0DR13X86Zk';
let placeDetails = function() {
    this.places = [];
}

router.get('/query', async function(req, res, next) {
    let lat = req.query.lat;
    let long = req.query.long;
    let radius = 50000;
    let answer;
    let results;
    let PD = new placeDetails();

    let host = 'https://maps.googleapis.com'
    let path = '/maps/api/place/nearbysearch/json?location=' + lat + ',' + long
        + '&radius=' + radius + '&type=grocery_or_supermarket&key='+ key;
    const total = host + path;
    try {
        answer = await axios({
            url: total,
            method: 'get'
        })
        results = answer.data.results;
    } catch(error) {
        console.error(error);
    }

    PD.places.push(["name", "location", "place_id", "vicinity"])
    for(let i = 0; i < results.length; i++) {
        temp = results[i];
        console.log(temp.name)
        console.log(temp.geometry.location)
        PD.places.push([temp.name, temp.geometry.location, temp.place_id, temp.vicinity]);
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(PD.places));
});


module.exports = router;