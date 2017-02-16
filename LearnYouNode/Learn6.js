const path = require("path");
let fs = require("fs");

let dirSearcher = function (PathToDir, ext, callback) {
    fs.readdir(pathToFile, function (err, data) {
        if (err) {
            return callback(err)
        }
        var filtered = data.filter((file) => path.extname(file) === ext);
        callback(null,filtered.join("\n"));

    })
}
module.exports = dirSearcher;