let model = require('../components/models/djmodel');
let controller = require('../components/controller/djcontroller');
let handler = require('../components/handler/djhandler');
let view = require('../components/view/djview');


controller.view = view;
controller.model = model;
handler.controller = controller;

handler.handle_terminal();