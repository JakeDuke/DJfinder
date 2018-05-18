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
}

