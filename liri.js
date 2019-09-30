// Require .env File
require("dotenv").config();

// Link keys.js page
var keys = require("./keys.js");

let request = require("request");

// require file systems
var fs = require("fs");

//initialize Spotify
var spotify = new Spotify(keys.spotify);
var spotify = require("node-spotify-npi");

// Connects omdb & bandsintown API's
let omdb = (keys.omdb);
let bandsintown = (keys.bandsintown);

//processe's user inputs
let userInput = process.argv[2];
let userQuery = process.argv. slice[3].join(" ");


function userCommand(userInput, userQuery) 

userCommand(userInput, userQuery);

function spotifyThisSong();

function movieThis();

function whatThis();