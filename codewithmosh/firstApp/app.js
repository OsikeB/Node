// const log = require('./logger');


// log("Jesus");

//WORKING WITH PATH

// const path = require('path');

// let pathObj = path.parse(__filename);

// console.log(pathObj);

//WORKING WITH OPERATING SYSTEM

// const os = require('os');

// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

//WORKING WITH FILES, SYNC JS AND ASYNC JS

// let fs = require('fs');

// let files = fs.readdirSync("./");

// console.log(files);

// fs.readdir("$", function(err, file){
//     if(err) console.log("Error", err);
//     else console.log("Result", file);
// });

// const EventEmitter = require("events");

// const Logger = require('./logger');
// const logger = new Logger();

//Register a listener
// logger.on("messageLogged", function(arg){
//     console.log("Listener Called", arg)
// });

// logger.log('message');

const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write("Hello World");
        res.end();
    }

    if(req.url === "/app/courses"){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }   
});



server.listen(3000);

console.log("Listening on Port 3000...")