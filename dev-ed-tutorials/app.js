//Node JS

/* Module,
 most files is inside a module in Node.js

 in node most of code are rapt in a function
*/
/*
THIS IS WHAT IS HAPPENNING IN NODE JS BUT
IS BEHIND THE SCENE

every thing is wrap in here:
(function(exports, require, module, __filename, __dirname){
    // Module code actually lives in here


    
}) 
EXAMPLES


*/


const getUserInfo = require('./sayName');

console.log(getUserInfo);
getUserInfo.sayName()
getUserInfo.sayAddress()

console.log(`Filename: ${__filename}`);
console.log(`Dirname: ${__dirname}`);