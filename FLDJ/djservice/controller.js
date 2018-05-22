let controller = {
	model: {},
	logic: {},
	create: function(artist) {
       	this.model.create();
	},
	update: function(id, newValue) {
		this.model.update();
	},
	remove: function(id) {
		this.model.remove();
	},
	read_all: function() {
		this.model.read_all()
	}
};

module.exports = controller;
