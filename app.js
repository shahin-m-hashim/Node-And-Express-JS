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

// app.get('users/user/about', logger, (req, res) => res.send('About Page'));

// app.get('users/user/contact', logger, (req, res) => res.send('Contact Page'));

// app.get('users/user/profile', logger, (req, res) => res.send('Profile Page'));

// app.get('users/user/login', logger, (req, res) => res.send('Login Page'));

// as u can see, we have used the logger middleware in all the routes.
// this is very inefficient as we can see the path 'users/user/' repeating in all the routes.
// so we can use the app.use() method to specify the path for the middleware.


app.use('/users/user', logger);
// this will intercept all the requests that start with /users/user
// this is order specific like middleware fn's. if u place these after the routes, it will not work.
// this middleware will intercept all the requests that start with /users/user

app.get('/about', (req, res) => res.send('About Page'));

app.get('/users/user/contact', (req, res) => res.send('Contact Page'));

app.get('/users/user/profile', (req, res) => res.send('Profile Page'));

app.get('/login', (req, res) => res.send('Login Page'));


// this handles invalid routes
app.get('*', (req, res) => res.status(404).send('<center><h1>404, Page Not Found</h1></center>'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})