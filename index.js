const fs = require('fs');
const util = require('util');
const moment = require('moment');
var log;

console.log = function() {
    const time = moment().format("YYYY/MM/DD-HH:mm:ss ~: ");
    log.write(time + util.format.apply(null, arguments) + '\n');
    process.stdout.write(util.format.apply(null, arguments) + '\n');
}

process.on('uncaughtException', function(err) {
    console.log(err);
});

console.error = console.log;

module.exports = function(file) {
    log = fs.createWriteStream(file || 'out.log', {
        flags: 'a'
    });
}