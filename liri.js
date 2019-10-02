// Require .env File
require("dotenv").config();

// Link keys.js page
var keys = require("./keys.js");

// let request = require("request");

// require file systems
// var fs = require("fs");

//initialize Spotify
// var spotify = new Spotify(keys.spotify);
// var spotify = require("node-spotify-npi");

// Connects omdb & bandsintown API's
let omdb = (keys.omdb);
//we are using the public key so dont need to hide it
// let bandsintown = (keys.bandsintown);

//processe's user inputs
let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");


function userCommand(userInput){

    // console.log("user command is: " + userInput)
    // console.log("user query is: " + userQuery)

    if (userInput === "spotify-this"){
        spotifyThisSong()
    }
} 

userCommand(userInput, userQuery);

function spotifyThisSong(){
    //code goes here
    console.log("spotify this song fired off")
    //can build axios calls here
    console.log(userQuery)

};

function movieThis(){
    //code goes here

};

function whatThis(){
    //code goes here

}
;
//"https://rest.bandsintown.com/artists/" + userQuery + "?app_id=codingbootcamp";

//use this for testing 
//"https://rest.bandsintown.com/artists/pink?app_id=codingbootcamp";
