const http = require('http');

const server = http.createServer((request, response) =>{
    console.log('Headers: ', request.headers);
    console.log('Method: ', request.method);
    console.log('Url: ', request.url);
    
    if("/"){
        response.setHeader('Content-Type', 'text/html');
        response.end('<h1> Richard is a Man </h1>');
    }   
});

server.listen(8000)