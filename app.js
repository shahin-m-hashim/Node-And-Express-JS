const express = require('express');

// import middleware's
const logger = require('./logger');
const authorize = require('./authorize');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Express & Node JS Backend Server');
});

// req => middleware => res 

app.use([logger, authorize]);
// to use multiple middleware's use array. order matters here, first logger is executed then authorize. 

app.get('/about', (req, res) => res.send('About Page'));

app.get('/contact', (req, res) => res.send('Contact Page'));

app.get('/profile', (req, res) => res.send('Profile Page'));

app.get('/login', (req, res) => res.send('Login Page'));


// this handles invalid routes
app.get('*', (req, res) => res.status(404).send('<center><h1>404, Page Not Found</h1></center>'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})