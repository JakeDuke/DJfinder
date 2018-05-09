let model = require('../components/models/djmodel');

let terminal_input = process.argv.slice(2);
console.log(terminal_input)
let command = terminal_input[0];
let args = terminal_input.slice(1);

console.log(model[command](...args));

console.log(model.read_all());