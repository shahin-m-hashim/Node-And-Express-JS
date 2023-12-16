import http from 'http';

const port = 3000;
const hostname = '127.0.0.1';

const msg = 'Hello There' // to simply render text files we specify content type as text/plain
const msgObj = { name: 'Shahin', status: 'test' } // to render objects we need to use json stringify

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' })
    // res.end(msg);

    // to send objects as json response we need to convert it to json using JSON.stringify()
    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.end(JSON.stringify(msgObj));
})

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));