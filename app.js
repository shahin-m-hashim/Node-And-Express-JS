const express = require('express');

const app = express();

const PORT = 3000;
const users = require('./userData');

// this api endpoint simply serves the route.
app.get('/', (req, res) => {
    res.send('Welcome to Express & Node JS Backend Server');
});

// this api is used for getting details of all users.
// upon receiving the data the front end will handle it
app.get('/users', (req, res) => res.json(users));

// this api is used for getting details of a single user.
// app.get('/users/1', (req, res) => {
//     const user = users.find(user => user.id === 1);
//     res.json(user);
// });

// this above is an overkill cuz we know there will be so many users
// instead we use dynamic routing for getting details of a single user using route parameter :placeholder.
app.get('/users/:id', (req, res) => {
    // to access the value we use request object - req.params
    const user = users.find(user => user.id === Number(req.params.id));
    user ? res.json(user) : res.status(404).send('<center><h1>User Doesn\'t Exist</h1></center>');
});

// this handles invalid routes
app.get('*', (req, res) => res.status(404).send('<center><h1>404, Page Not Found</h1></center>'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})