import express from 'express';

const app = express();
// create an express application server. The express() function is a top-level function
// this is similar to creating a server in Node.js with http.createServer().

const port = 3000;
const host = '127.0.0.1';

// express has a bunch of really easy shorthand methods that are very efficient
// by default, every browser will perform a GET request when you visit a URL

app.get('/', (req, res) => {
    res.send('Hello World!');
});
// this is a shorthand method for creating a route handler for GET requests to the root path, '/'

app.post('/', (req, res) => {
    res.send('Got a POST request');
});
// this is a shorthand method for creating a route handler for POST requests to the root path, '/'

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});
// this is a shorthand method for creating a route handler for PUT requests to the '/user' path

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});
// this is a shorthand method for creating a route handler for DELETE requests to the '/user' path

app.all('*', (req, res, next) => {
    res.status(404).send('<h1 style"text-align:centre">Error 404: Page not found<h1>')
});
// this is a shorthand method for creating a route handler for all requests to the any path

app.use(express.static('public'));
// this is a shorthand method for serving static files from the 'public' directory

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});
// this is a shorthand method for starting the server listening on the specified port and host
