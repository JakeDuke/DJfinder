var vue = new Vue ({
    el: '#app',
    data: {
        artists: [],
        artist: {
            key: undefined,
            name: undefined,
            location: undefined,
            price: undefined,
            style: undefined,
            dates: undefined,
            about: undefined
        }
    },
    computed: {
        axiosInstance: function () {
            return axios.create({
                baseURL: 'http://localhost:3001/api',
            })
        }
    },
    methods: {
        newArtist: function () {
            // let a_name = this.name;
            // let a_location = this.location;
            // let a_price = this.price;
            // let a_style = this.style;
            // let a_dates = this.dates;
            // let a_about = this.about;
            
            this.axiosInstance.post('/create', {
            newArtist: this.artist   
            })
                .then((responce) => {
                    console.log(responce.data);
                    this.resetForm();
                    this.getAllArtist();
                    
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
            this.axiosInstance.post('/update', {
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
        getAllArtist: function () {
            this.axiosInstance.post('/read_all', {
                })
                .then((responce) => {

                    this.artists = [];

                    for (elem in responce.data) {
                        console.log(responce.data[elem]);
                        this.artists.push(responce.data[elem]);
                    }
                    console.log(this.artists);
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })
        },
        resetForm: function() {
            Object.keys(this.artist).forEach( key => this.artist[key] = '');
        }
    }
})

Vue.component('item', {
    template: '#item-template',
    // props: ['name', 'location', 'price', 'style', 'dates', 'about'],
    props: ["artist"],
    data: function () {
      return {
        
      }
    },
    computed: {
        axiosInstance: function() {
            return vue.axiosInstance;
         }
    },
    methods: {
        toggle: function () {
            console.log|(this.props)
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        removeArtist: function (id) {
            this.axiosInstance.post('/remove', {
                    id: id
                })
                .then((responce) => {
                    console.log(responce.data);
                    vue.getAllArtist();
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
                })
                  
        }
    }       
})