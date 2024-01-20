const express = require('express');
const cors = require('cors');
const app = express();

// Define the CORS options
const corsOptions = {
    origin: 'http://127.0.0.1:5500'
};

// Enable CORS with custom options
app.use(cors(corsOptions));

const PORT = 5500;
const users = require('../userData');

app.get('/', (req, res) => {
    res.send('Welcome to Express & Node JS Backend Server');
});

app.get('/users', (req, res) => res.json(users));

// app.get('/users/hello', (req, res) => res.send('Hello World'));
// make sure to always add dynamic routes at the end else it will override other routes like above

// querying data from the server using query parameters from the req.query object

// find a user by username using find method which returns the first element that satisfies the condition
app.get('/users/search', (req, res) => {
    const { username } = req.query;
    const user = users.find(user => user.username === username);
    return user ? res.json(user) : res.status(200).send('<center><h1>Searched User Doesn\'t Exist</h1></center>');
});

// filter out users by a limit 
app.get('/users/filter', (req, res) => {
    const { limit } = req.query;
    const limitedUsers = users.slice(0, Number(limit));
    return limitedUsers ? res.json(limitedUsers) : res.status(200).send('<center><h1>Searched User Doesn\'t Exist</h1></center>');
});

// advanced search
app.get('/users/advanced-search', (req, res) => {
    const { username, limit } = req.query;
    filteredUsers = username
        ? users.filter(user => user.username.startsWith(username))
        : (limit
            ? users.slice(0, Number(limit))
            : users
        );

    return filteredUsers ? res.json(filteredUsers) : res.status(200).send('<center><h1>Searched User Doesn\'t Exist</h1></center>');
});

// make sure to use return when sending back response based on condition else it may throw error incase
// u send a response one after the other. so to avoid that use return to exit the function. 

app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === Number(req.params.id));
    user ? res.json(user) : res.status(404).send('<center><h1>User Doesn\'t Exist</h1></center>');
});

app.get('*', (req, res) => res.status(404).send('<center><h1>404, Page Not Found</h1></center>'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})