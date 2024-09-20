const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req) {
        console.log("This is a request");
        res.setHeader('Content-Type', 'text/plain')
        res.end("Hello World\n");
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
}) 