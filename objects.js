// Onjects notes:
/*
Objects are JS data type that hold Key and Value pairs of data.
Onjects can hols numbers, strings, booleans, arrays, and other objects, etc.
*/
// curly brakcets denote objects, objects REQUIRE two main attributes: *Key and *value
let netflix = {
    id: 1, 
    name: 'The Office',
    isRunning: false,
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot'
            }, 
            {
                episode: 2,
                episodeName: 'Diversity Day'
            },
            {
                episode: 3,
                episodeName: 'Health Care'
            },
            {
                episode: 4,
                episodeName: 'The Allieance'
            },
            {
                episode:5,
                episodeName: 'Basketball'
            }]
        }
    },
    season2: {},
    season3: {}
};

// Use dot and bracket notation to console.log episodeName of episode 2
console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);
// Loop up how to find index of item in a nest array of objects
//console.log(netflix.season1.seasonInfo.episodeInfo.indexOf(ep => ep.episodeName.startsWith('D')))

//*JSON Objects
/*
 - JSON Stands for: JavaScript Object Notation
 - derived from JSON syntax, JSON format is text only. 
 - Exists as a string.
    - Useful when fetching data from a server (back-end application or logic).
    - Needs to be convarted to a native JavaScript object if we want access 
*/

//Bracket Notation / Property Accessors
//Property Accessors: dot notation ., braket notation []
// Created a variable that stores an empty object

let superHero = {};

// Target object as a whole w/ bracket notation, inject/give a key which is a string
superHero['name'] = 'Spider-Man';
// Assigning a second key and value
superHero['alterEgo'] = 'Peter Parker';

console.log(superHero);
console.log(superHero['name'], superHero['alterEgo']);
console.log(superHero.name);

// All keys in object are strings even though they aren't wrapped in quotes when represented in the object itself

let test = Object.keys(superHero);
console.log(test);
console.log(typeof test[0]);

// -------------
let spaceObject = {
    "Space Here": true,
    noSpaces: true
}
//Square brackets is good when 
console.log(spaceObject.noSpaces);
console.log(spaceObject["Spaces Here"]);