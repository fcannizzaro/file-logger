const fs = require('fs');
const util = require('util');
const moment = require('moment');
const flags = {
    flags: 'a'
};

var log;
var datelogs = false;

console.log = function() {

    if (datelogs) try {
        fs.mkdirSync("logs");
        create("logs/" + moment().format("YYYY-MM-DD") + '.log');
    } catch (err) {
        create("logs/" + moment().format("YYYY-MM-DD") + '.log');
    }

    const time = moment().format("YYYY/MM/DD-HH:mm:ss ~: ");
    log.write(time + util.format.apply(null, arguments) + '\n');
    process.stdout.write(util.format.apply(null, arguments) + '\n');
}

process.on('uncaughtException', function(err) {
    console.log(err);
});

function create(filename) {
    log = fs.createWriteStream(filename, flags);
}

console.error = console.log;

module.exports = function(file) {
    if (typeof file == 'boolean')
        datelogs = true;
    else
        create(file || 'out.log');
}