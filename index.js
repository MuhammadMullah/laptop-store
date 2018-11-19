// read file 
const fs = require('fs');
const http = require('http');

// reading a file with fs module
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

// console.log(laptopData);


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end('A response');
});

var port = 8080;
server.listen(port, '127.0.0.1', () => {
    console.log(`Listening to port ${port}`);
});