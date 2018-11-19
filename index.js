// read file 
const fs = require('fs');
const http = require('http');
const url = require('url');

// reading a file with fs module
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

// console.log(laptopData);


const server = http.createServer((req, res) => {

    const pathName = url.parse(req.url, true).pathname;

    if (pathName === '/products' || pathName === '') {
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end('Displaying the PRODUCTS page');
    }

    else if (pathName === '/laptop') {
        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end('Displaying the LAPTOP page');
    }

    else {
        res.writeHead(404, { 'Content-type': 'text/html'});
        res.end('URL NOT FOUND');
    }
});

var port = 8080;
server.listen(port, '127.0.0.1', () => {
    console.log(`Listening to port ${port}`);
});