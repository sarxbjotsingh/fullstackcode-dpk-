// let a =10;
// let b=20;
// let c = a+b;

// console.log(c);
// console.log("Current Directory:", __dirname);
// console.log("Current File:", __filename);
// setTimeout(() => console.log("Hello after 2 seconds"), 5000);
// setInterval(() => console.log("Repeating every 3 seconds"), 1000);

// const add = require('./math');
// console.log(add(5, 3)); // Output: 8

// const fs = require('fs');
// fs.readFile('data.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });
// const fs = require('fs');
// fs.writeFile('data.txt', 'Hello, Node.js!', (err) => {
//     if (err) throw err;
// })

const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Node.js!');
});
server.listen(3000, () => console.log('Server running on port 3000'));
