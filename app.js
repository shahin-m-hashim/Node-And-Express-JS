const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Express & Node JS Backend Server');
});

// req => middleware => res 

const logger = (req, res, next) => {
    console.log('Request URL: ', req.url, ' Request method: ', req.method);
    next(); // this is a crucial step. u can either intercept the request and send a new response
    // or u can pass the request to the next middleware. 
}

app.get('/about', logger, (req, res) => {
    res.send('About Page');
});

app.get('/contact', logger, (req, res) => {
    res.send('Contact Page');
});

// this handles invalid routes
app.get('*', (req, res) => res.status(404).send('<center><h1>404, Page Not Found</h1></center>'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})