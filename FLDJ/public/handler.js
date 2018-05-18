let handler = {
    controller: {},
    handle_terminal: function () {
        // process.argv stuff
        let terminal_input = process.argv.slice(2);
        let command = terminal_input[0];
        let args = terminal_input.slice(1);
  
        this.controller[command](...args)

        // this.controller.add_artist(userinput)
    },
    handle_browser: function () {
        // dom stuff

        this.controller[command](...args)
    },
    form_handler: function () {
        var inputName = document.getElementById("inputName");
        var inputLocation = document.getElementById("inputLocation");
        var inputPrice = document.getElementById("inputPrice");
        var inputStyle = document.getElementById("inputStyle");
        var inputDates = document.getElementById("inputDates");
        var textareaInput = document.getElementById("textareaInput");
    
        let artist = {
            name: inputName.value,
            location: inputLocation.value,
            price: inputPrice.value,
            style: inputStyle.value,
            dates: inputDates.value,
            about: textareaInput.value
        }
        
        controller.newArtist(artist); 

        this.clear_input();

    },
    clear_input: function () {
        var inputName = document.getElementById("inputName");
        var inputLocation = document.getElementById("inputLocation");
        var inputPrice = document.getElementById("inputPrice");
        var inputStyle = document.getElementById("inputStyle");
        var inputDates = document.getElementById("inputDates");
        var textareaInput = document.getElementById("textareaInput");

        inputName.value = '';
        inputLocation.value = '';
        inputPrice.value = '';
        inputStyle.value = '';
        inputDates.value = '';
        textareaInput.value = '';
    }
        
}

