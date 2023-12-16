import http from 'http';
import fs from 'fs';

const port = 3000;
const hostname = '127.0.0.1';

// while sending responses we normally send html for the browser to render
// so we don't simply send the html response as string, eg: res.end('<h1>Hello World</h1>');
// instead we send the file that we need as the response using built-in fs module

const htmlFile = fs.readFileSync('./index.html', 'utf8');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(htmlFile);
})

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));