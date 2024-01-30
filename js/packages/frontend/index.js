// https://medium.com/@mohammedijas/hello-world-in-node-js-b333275ddc89
const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => {
 console.log(req.headers);
 res.statusCode = 200;
 res.end('<html><body><h1>Welcome to KZ sandbox!</h1></body></html>');
})
server.listen(port, hostname);