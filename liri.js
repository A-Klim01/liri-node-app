// Require .env File
require("dotenv").config();

// Link keys.js page
var keys = require("./keys.js");
let request = require("request");
var axios = require("axios");

// require file systems
var fs = require("fs");

 //initialize Spotify
var Spotify = require("node-spotify-api");

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});
 
 

// Connects omdb 
let omdb = (keys.omdb);

//processe's user inputs
let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");


function userCommand(userInput, userQuery){

   
    switch(userInput){
        case "spotify-this": spotifyThisSong(userQuery);
        break;
        case "concert-this": concertThis(userQuery);
        break;
        case "movie-this": moviethis(userQuery);
        break;
       
        case "do-what-it-says": dowhatItSays();
        break;
        default: console.log("I don't know what you're asking")

    }
} 

userCommand(userInput, userQuery);

function spotifyThisSong(userQuery){
    //console.log("spotify this song fired off")
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
function concertThis(userQuery){
    //https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp
    var queryURL = "https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(function(response){
        //console.log(response);
        var showInfo = response.data;
        for(var i=0; i<showInfo.length; i++){
            var show = showInfo[i];

            console.log("venue country:  " +show.venue.country + " and  Venue city : " +show.venue.city);
            console.log("show date and time: " +show.datetime);
            console.log("venue name: " +show.venue.name);
            console.log("-----------------------------------------")
        }
    })

}

function moviethis(userQuery){
    let omdb = (keys.omdb);
    axios.get(queryURL).then(function(response){
        console.log(response.data);
    })

};

function dowhatItSays(){
    
    fs.readFile("random.txt", "utf8", function(err, data){
        if(err){
            console.log(err)
        }
        var dataArr = data.split(",");
        userCommand(dataArr[0], dataArr[1])

    })

}
;


