// Require .env File
require("dotenv").config();

// Link keys.js page
var keys = require("./keys.js");
 let request = require("request");

// require file systems
 var fs = require("fs");

 //initialize Spotify
var Spotify = require("node-spotify-api");

 var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});
 
 

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
        spotifyThisSong();
        //break;
        //case "movie-this"():
            //movieThis();
    }
} 

userCommand(userInput, userQuery);

function spotifyThisSong(){
    console.log("spotify this song fired off")
    spotify.search({ type:'track' , query: userQuery }, function (error, data) {
        if (error) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0].name); //track name
        console.log(data.tracks.items[0].album.artists[0].name); //artist name
        console.log(data.tracks.items[0].external_urls); //link to song
        // console.log(data)
    });    
    }

;

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
