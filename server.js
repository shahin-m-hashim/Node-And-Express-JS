import http from 'http';
import fs from 'fs';

const port = 3000;
const hostname = '127.0.0.1';

const homePage = fs.readFileSync('./page/index.html');
const style = fs.readFileSync('./page/styles.css');
const svg = fs.readFileSync('./page/logo.svg');
const jsLogic = fs.readFileSync('./page/browser-app.js');

/*
    The problem with this method to read and process html files is that it will only handle one file
    at a time. If we have a lot of different files, we will have to write a lot of code to handle each 
    file. Suppose our html file has a lot of css and js files, we will have to write a lot of code to
    handle each file for the server to receive all of those along with the html file, which is not 
    efficient and unreadable. This is where express.js comes in handy.
*/

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homePage);
    }
    else if (req.url === '/styles.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(style);
    }
    else if (req.url === '/logo.svg') {
        res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
        res.end(svg);
    }
    else if (req.url === '/browser-app.js') {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(jsLogic);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 Page Not Found</h1><a href = '/'>Go Back Home</a>");
    }
});

// now in the browser's address bar, type http://localhost:3000 and hit enter
// then try http://localhost:3000/about
// and finally try something not in our routing, like http://localhost:3000/blahblah
// this will throw the corresponding error


/*
HTTP routing is a way to handle different requests made to a web server and determine how to respond to 
each request. It's like a traffic cop directing incoming requests to the appropriate destination.

When a user visits a website or interacts with a web application, their actions generate HTTP requests. 
These requests can be for different pages, resources, or actions on the server.

HTTP routing helps the server understand which code or functionality should be executed based on the 
requested URL. It maps specific URLs to specific functions or handlers that generate the appropriate 
response.

For example, if a user visits "http://example.com/about", the server needs to know what to do with this 
request. With HTTP routing, you can define a route that matches the "/about" URL and specify the code or 
function that should be executed to handle that request. This could be displaying information about the 
website or fetching data from a database.

In real life scenarios, its best to use frameworks like Express.js to handle routing much more efficiently.

*/

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));