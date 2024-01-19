import express from 'express';

const app = express();
// create an express application server. The express() function is a top-level function
// this is similar to creating a server in Node.js with http.createServer().

const port = 3000;

// express has a bunch of really easy shorthand methods that are very efficient

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('App listening on port 3000!');
});

// This app starts a server and listens on port 3000 for connections.The app responds with “Hello World!”
// for requests to the root URL(/) or route. For every other path, it will respond with a 404 Not Found.
