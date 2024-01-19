const express = require('express');

const app = express();
// create an express application server. The express() function is a top-level function
// this is similar to creating a server in Node.js with http.createServer().

const port = 3000;
const host = '127.0.0.1';

// express has a bunch of really easy shorthand methods that are very efficient
// by default, every browser will perform a GET request when you visit a URL

// app.get('/', (req, res) => {
//     res.sendFile('./public/index.html', { root: __dirname });
// });

// this is a shorthand method for creating a route handler for GET requests to the root path, '/'
// here we need to specify the absolute directory of the project root using __dirname or
// use path to join the root directory path with the file path. but since index.html is also
// a static file, we can use the express.static() method. we simply dump in static  files into the 
// public directory and express will serve them for us

app.use(express.static('./public'));
// this is a method for serving static files from the specified directory (commonly called public)
// not only that, this helps us to handle all files easily without using else-if statements
// its also used for middleware functions that are executed before the route handler
// static files are simply files that never gets changed by the server are served to the client 

app.all('*', (req, res, next) => {
    res.status(404).send('<h1 style="text-align:center">Error 404: Page not found</h1>');
});
// this is a shorthand method for creating a route handler for all requests to any path

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});
// this is a shorthand method for starting the server listening on the specified port and host
