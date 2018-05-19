let controller = {
    axios: {},
    view: {},
    newArtist: function (artist) {
        this.axios.post('/create', {
                newArtist: artist
            })
            .then((responce) => {
                console.log(responce.data);
            })
            .catch((error) => {
                if(error) {
                    console.log(error);
                }
        })
    },
    updateArtist: function (id, newObject) {
        console.log(id)
        console.log(newObject)
        this.axios.post('/update', {
               newArtist: newObject,
               id: id
            })
            .then((responce) => {
                console.log(responce.data);
            })
            .catch((error) => {
                if(error) {
                    console.log(error);
                }
        })
    },
    removeArtist: function (id) {
        this.axios.post('/remove', {
               id: id
            })
            .then((responce) => {
                console.log(responce.data);
            })
            .catch((error) => {
                if(error) {
                    console.log(error);
                }
        })
    },
}

