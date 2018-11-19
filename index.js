// read file 
const fs = require('fs');
const http = require('http');

// reading a file with fs module
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

console.log(laptopData);


const server = http.createServer((req, res) => {
    console.log('Someone is in the server!');
});


