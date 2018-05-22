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

router.post("/update", function(req, res) {
    // clean user input

    // call controller
    let artist = req.body.newArtist;
    let id = req.body.id;

    model.update(id, artist);
    // send response
    res.send(artist)
})

router.post("/remove", function(req, res) {
    // clean user input

    // call controller
    
    let id = req.body.id;

    model.remove(id);
    // send response
    res.send(String(id))
})

router.post("/read_all", function(req, res) {
  
    let db = model.read_all();
    res.send(db)
})

router.post("/:operation", (req, res) => {

    let operation = req.params.operation;
    
});



module.exports = router;