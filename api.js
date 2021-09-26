const express = require("express");
const { networkInterfaces } = require("os");
/* const { runInNewContext } = require("vm"); */
let mockData = require("./mockData.json");
/* import fetch from "node-fetch"; */

const router = express.Router();

router.get("/", function(req, res) {
    res.json(mockData);
});

router.post("/new_post", function(req, res) {

    
    const newCity = {
        "id": mockData.length +1,
        "cityName": req.body.cityName,
        "country": req.body.country,
        "arrival": req.body.arrival,
        "departure": req.body.departure,
        "image": req.body.image,
        "position": {
        "lat": Number(req.body.lat),
        "lng": Number(req.body.lng)
        },
        "author": req.body.author,
        "authorPic": req.body.authorPic,
        "description": req.body.description,
    };


    mockData.push(newCity);
    console.log(newCity);
    

    res.json({
        "status": "ok",
        "message": "New city inserted succesfully",
    });
});


    router.delete("/modify_post/:id", function(req, res) {

    const newArray = mockData.filter(function(element) {
        return element.id !== Number(req.params.id);
    });
    mockData = newArray;

    res.json({
        "status": "ok",
        "message": "city deleted"
    })
});
 
    router.get("/modify_post/:id", function(req, res) {
    
    const newArray = mockData.filter(function(element) {
        return element.id === Number(req.params.id);
    });

    if (newArray.length === 1) {
        res.json(newArray[0]);
    } else {
        res.json("City not found");
    }
});  

module.exports = router;