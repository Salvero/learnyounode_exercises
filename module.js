module.exports = function (dirName, ext, callback) {
    var fs = require('fs'),
        path = require('path'),
        files = [];

    fs.readdir(dirName, function (err, files) {
        if (err) {
            return callback(err);
        }
        files = files.filter(function (el) {
            if (path.extname(el).slice(1) === ext) {
                return el;
            }
        });
        return callback(null, files);
    });
};
