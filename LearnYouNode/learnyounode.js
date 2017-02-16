/*
    Learnyounode first exe
console.log("HELLO WOLRD");
*/

/*
    Learnyounode second exe
var sum = 0;
for(var i = 2; i <= process.argv.length - 1; i++) {
    sum += +process.argv[i];
}
console.log(sum)
*/
/*
    Learnyounode thrid exe

var fs = require('fs');

var string = fs.readFileSync(process.argv[2], "UTF-8");

var stringArray = [];
stringArray = string.split('\n');

console.log(stringArray.length-1)
*/

// Learnyounode fourth

/*
   learnyounode five

const path = require("path");
let fs = require("fs");

const PathToDir = process.argv[2];
const ext = "." + process.argv[3];

let dirSearcher = function (PathToDir, ext, callback) {
    fs.readdir(PathToDir, function (err, data) {
        if (err) {
            return callback(err)
        }
        var filtered = data.filter((file) => path.extname(file) === ext);
        console.log(filtered);

    })
}
*/


   Learnyounode six

let myFir = require(".\16");

myDir(process.argv[2], process.argv [3], function(err, data){
    if(err) {
        return console.log(err);
    }
    console.log(data);
})
