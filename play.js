const connect = require("./client");
const setupInput = require("./input");

console.log("Welcome to the game. Connecting...");
setupInput(connect());

