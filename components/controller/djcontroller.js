var model = require('../models/djmodel')

var controller = {
    add_artist: function(name) {
        model.create(name);
        console.log(model.read_all());
    }
}


controller.add_artist("JOn");