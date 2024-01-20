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

app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === Number(req.params.id));
    user ? res.json(user) : res.status(404).send('<center><h1>User Doesn\'t Exist</h1></center>');
});

app.get('*', (req, res) => res.status(404).send('<center><h1>404, Page Not Found</h1></center>'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})