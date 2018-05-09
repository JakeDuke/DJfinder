
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
    }    
}

module.exports = handler;