const express = require('express');

// import middleware's
const logger = require('./logger');
const authorize = require('./authorize');

const app = express();

const PORT = 3000;

// req => middleware => res 

app.use(logger);

app.get('/', (req, res) => res.send('Welcome to Express & Node JS Backend Server'));

app.use('/user', authorize);
// this will run the authorize middleware for all the routes that starts with /user
// Middleware is very powerful since now we can authorize users for specific routes
// and enhance the security of the application.

app.get('/user/login', (req, res) => res.send('Login Page'));
app.get('/user/contact', (req, res) => res.send('Contact Page'));
app.get('/user/profile', (req, res) => res.send('Profile Page'));


// this handles invalid routes
app.get('*', (req, res) => res.status(404).send('<center><h1>404, Page Not Found</h1></center>'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})