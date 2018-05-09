

let controller = {
    view: {},
	model: {},
    add_artist: function(name) {
        this.model.create(name);
        this.view.render(this.model.read_all());
    }
}

module.exports = controller;

