// console.log(__filename);
// console.log(__dirname);
"use strict"

//WORKING WITH EVENT: A singnal that somehting has happened.

const EventEmitter = require("events");


class Logger extends EventEmitter {
    log(message) {
        //Send an HTTP request
        console.log(message);
    
        //Raised an Event
        this.emit("messageLogged", { id: 1, url: 'http://' });
    }
}


let url = 'http://mylogger.io/log';



module.exports   = Logger;