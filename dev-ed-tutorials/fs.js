const fs = require('fs');

//Event Loop; the code cannot be block;
// fs.writeFile('message.txt', 'hello there node', (err) => {
//     if(err) throw err;


//     console.log("File Name Has Been written")
// });


fs.readFile('./message.txt', 'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data)
})


