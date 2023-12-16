import http from 'http';
import fs from 'fs';

const port = 3000;
const hostname = '127.0.0.1';

// while res.end(htmlFile) helps, when it comes to large html documents this affects performance
// greatly so its always best to use streams to read and write data streams using pipe
// streams is simply used to read or write data in smaller chunks from the buffer and not entirely at once
// pipes are used to read and write data streams in a more efficient way

// const readHtmlFileStream = fs.createReadStream('./index.html', 'utf8');

// if readHtmlFileStream is created outside the server handler:
// The readHtmlFileStream is created once when the module is loaded. When the stream is piped using 
// readHtmlFileStream.pipe(res), it starts reading the file from the beginning. However, 
// on subsequent requests, the stream has already been consumed, and it won't "rewind" to the beginning 
// automatically.

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })

    const readHtmlFileStream = fs.createReadStream('./index.html', 'utf8');
    //make sure to read the stream here or each time u reload the stream is lost 

    // Pipe the file stream directly to the response stream
    readHtmlFileStream.pipe(res);
})

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));