import http from 'http';

const port = 3000;
const hostname = '127.0.0.1';

/*
    In a Node.js HTTP server, the callback function provided to http.createServer is called whenever a 
    new HTTP request is made to the server. This function takes two arguments: req (request) and res 
    (response).

    req (request):
        The req object represents the incoming HTTP request from the client. It contains information 
        about the request, such as the URL, HTTP method (GET, POST, etc.), headers, and potentially 
        other data related to the client's request. You can use req to extract information about what 
        the client is asking for.

    res (response):
        The res object represents the server's response to the client's request. It provides methods for 
        sending data back to the client, setting response headers, and controlling the HTTP response. 
        The res object is used to send the response back to the client.
*/


const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Extract information from the request
    const url = req.url;

    // Send the URL back as the response
    res.end(`Requested URL: ${url}`);
});

server.listen(3000, () => console.log(`Server running at http://${hostname}:${port}`));