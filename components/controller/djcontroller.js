

let controller = {
    view: {},
	model: {},
    add_artist: function(name) {
        this.model.create(name);
        this.view.render(this.model.read_all());
    },
    add_full_artist: function(name, price, genre) {
        let new_artist = {name, price, genre};
        let string_artist = JSON.stringify(new_artist);
        this.model.create(string_artist);
        this.view.render(this.model.read_all());
    },
    update: function(id, key, newValue) {
        this.model.update(id, key, newValue);
        this.view.render(this.model.read_all());
    },    
    help: function() {
		let operations = Object.keys(this);
		this.view.render(operations);
    },
    render_all_componenents: function() {
        let all_artists = this.model.get_all();
        all_artists.forEach(this.view.render_component);
    }
}

module.exports = controller;

