let jsonfile = require('jsonfile');
let path = require('path');

let model = {
    
	create: function(new_entry) {
        let db = require('./db.json');
        let data = db.data;
        data[db.meta.nextID] = new_entry;
        db.meta.nextID = db.meta.nextID + 1;
        jsonfile.writeFileSync(path.join(__dirname, './db.json'), db)
    },

    read_all: function() {
        let db = require('./db.json');
        return db.data

    }   
};


module.exports = model;

