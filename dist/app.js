"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var port = 3000;
var app = express_1.default();
app.use(express_1.default.static(__dirname + "/public"));
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/views/home.html");
});
app.get("/about", function (request, response) {
    response.sendFile(__dirname + "/views/about.html");
});
app.get("/works", function (request, response) {
    response.sendFile(__dirname + "/views/works.html");
});
app.get("/photo-gallery", function (request, response) {
    response.sendFile(__dirname + "/views/photo-gallery.html");
});
app.listen(port, function () {
    console.log("Server listening on port: " + port);
});
