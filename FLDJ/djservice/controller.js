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
	}
};

module.exports = controller;
