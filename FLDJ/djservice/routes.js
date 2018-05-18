const express = require("express");
let router = express.Router();
let controller = require("./controller");
let model = require("./model");


controller.model = model;

router.post("/create", function(req, res) {
    // clean user input

    // call controller
    let artist = req.body.newArtist;

    model.create(artist);
    // send response
    res.send(artist)
})

router.post("/:operation", (req, res) => {

    let operation = req.params.operation;
    
});



module.exports = router;